const { GoogleGenerativeAI } = require("@google/generative-ai");

// Setup Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

/**
 * Generate a response from the AI assistant for the patient
 * @param {string} userMessage - The message/prompt from the user
 * @param {Object} patientProfile - The patient's context (age, gender, aiProfile, etc.)
 * @param {Object} attachment - Base64 encoded attachment { mimeType, content }, optional
 */
async function generateHealthcareResponse(userMessage, patientProfile, attachment) {
    try {
        // Build the rich context for the AI
        let systemContext = `
You are an advanced AI Healthcare Assistant integrated into a telemedicine platform. You are designed to assist users responsibly, safely, and professionally.
Your role is to provide supportive health-related guidance while strictly avoiding diagnosis or definitive medical advice. Always encourage consulting a qualified doctor for final decisions.

CORE FEATURES YOU PROVIDE:
1. DIET & EXERCISE SUGGESTION: Suggest personalized diet plans (veg/non-veg) and recommend suitable exercises. Add disclaimer: "This is a general recommendation. Please consult a doctor or nutritionist before following strictly."
2. SYMPTOM CHECKER: Provide possible general causes ONLY in broad terms. DO NOT diagnose. Respond with caution: "These symptoms may be related to several conditions. It is strongly recommended to consult a doctor for proper diagnosis." Suggest urgent help for severe symptoms (chest pain, breathing issues).
3. PRESCRIPTION ANALYZER: Extract medicine names, dosage, purpose, side effects from text. Explain simply. Add warning: "Do not change or stop medication without consulting your doctor."

GENERAL GUIDELINES:
- Maintain a polite, professional, and empathetic tone.
- Never claim to replace a doctor. Never provide emergency/life-threatening instructions.
- Avoid medical jargon unless explained simply.
- Use clear headings like "Diet Suggestions", "Exercise Plan", "Symptom Insights", "Prescription Breakdown".
- Use bullet points. Keep it concise.
- FAIL-SAFE: If uncertain, ask follow-up questions or say "Please consult a qualified healthcare professional".

PATIENT CONTEXT MEMORY:
`;

        // Inject patient profile
        if (patientProfile) {
            systemContext += `
- Name: ${patientProfile.name}
- Age: ${patientProfile.age}
- Gender: ${patientProfile.gender}
`;
            if (patientProfile.aiProfile) {
                const ai = patientProfile.aiProfile;
                if (ai.allergies && ai.allergies.length > 0) systemContext += `- Allergies: ${ai.allergies.join(', ')}\n`;
                if (ai.pastDiseases && ai.pastDiseases.length > 0) systemContext += `- Past Diseases: ${ai.pastDiseases.join(', ')}\n`;
                if (ai.previousSymptoms && ai.previousSymptoms.length > 0) systemContext += `- Previous Symptoms: ${ai.previousSymptoms.join(', ')}\n`;
                if (ai.dietaryRestrictions) systemContext += `- Dietary Restrictions: ${ai.dietaryRestrictions}\n`;
                if (ai.lifestylePatterns) systemContext += `- Lifestyle: ${ai.lifestylePatterns}\n`;
                
                // Add instructions on how to use this context
                systemContext += `\nUSE THIS CONTEXT. Clearly state when past data is used (e.g., "Based on your reported allergy to..."). Always ask user consent if you need to store more data. Never assume missing data—ask if unsure.`;
            }
        } else {
            systemContext += `\nNo user profile data available.`;
        }

        const textPrompt = `${systemContext}\n\nUSER MESSAGE:\n${userMessage || 'Please analyze this attached document.'}`;

        let promptParts;
        if (attachment && attachment.content) {
            promptParts = [
                { text: textPrompt },
                {
                    inlineData: {
                        data: attachment.content,
                        mimeType: attachment.mimeType
                    }
                }
            ];
        } else {
            promptParts = textPrompt;
        }

        const result = await model.generateContent(promptParts);
        const response = await result.response;
        let text = response.text();

        return text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I apologize, but I am currently experiencing technical difficulties processing your request. Please consult a qualified healthcare professional or try again later.";
    }
}

module.exports = {
    generateHealthcareResponse
};
