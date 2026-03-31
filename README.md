# DoctorNet - Comprehensive Telemedicine Platform

A full-stack, AI-powered telemedicine platform built with Node.js, Express, MongoDB, and modern frontend technologies. DoctorNet bridges the gap in healthcare by connecting patients with medical professionals through video consultations, an AI-powered healthcare assistant, and comprehensive health management tools.

## 🚀 Key Features

### 🧑‍⚕️ For Patients
- **Smart Registration & Login**: Secure authentication with JWT and Aadhaar/ABHA verification.
- **Gemini AI Healthcare Assistant**: 
  - Symptom analysis and health advice.
  - **Multimodal Prescription Analysis**: Upload prescription images or PDFs directly into the chat for AI-driven insights and explanations.
- **Video Consultations**: Secure, real-time video calls with healthcare professionals.
- **Doctor Search & Appointments**: Find doctors by specialty and schedule seamlessly.
- **Digital Health Records**: Manage and track health issues, prescriptions, and medications.
- **Emergency & Essential Services**: Quick access to blood banks, rehabilitation centers, and emergency contacts.

### 🥼 For Doctors
- **Professional Dashboard**: Manage assigned patients and daily schedule.
- **Video Consultations**: Host scheduled video calls with patients seamlessly.
- **Digital Prescriptions**: Write, upload, and manage digital prescriptions effortlessly.
- **Patient Records Access**: Comprehensive view of patient's health history for better diagnosis.
- **Secure Access**: Professional registration with UID/NMR ID verification and robust JWT authentication.

## 🛠️ Technology Stack

### Backend
- **Node.js & Express.js** - Robust runtime and web framework
- **MongoDB & Mongoose** - Flexible NoSQL database and ODM
- **JWT (JSON Web Tokens)** - Secure, stateless authentication
- **BCrypt.js** - Advanced password hashing
- **Google Generative AI API** - Powering the Gemini AI Healthcare Assistant
- **Multer** - Handling secure file and prescription uploads
- **Socket.io / WebRTC** - Real-time communication and video calls
- **EJS & EJS-Mate** - Dynamic, server-side templating

### Frontend
- **Bootstrap 5** - Responsive UI components
- **Font Awesome** - Intuitive iconography
- **Custom CSS & JavaScript** - Modern, interactive, mobile-first design

## 📁 Project Structure

```text
doctorNet/
├── models/             # Database schemas (Patient, Doctor, etc.)
├── routes/             # Express routes (auth, patient, doctor, ai APIs)
├── views/              # EJS templates (dashboards, video-call, ai-assistant)
│   ├── layout/         
│   ├── patient/        # Patient-facing views
│   └── doctor/         # Doctor-facing views
├── public/             # Static assets (CSS, JS, images)
│   └── uploads/        # Uploaded prescriptions and documents
├── server.js           # Entry point and server configuration
└── .env                # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (Local instance or MongoDB Atlas)
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd doctorNet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Start the Database (if local)**
   ```bash
   mongod
   ```

5. **Run the Application**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`

## 🔒 Security & Authentication

- **JWT Authentication**: Replaced legacy session management with modern, secure JSON Web Tokens payload encryption.
- **Cookie Security**: HTTP-only cookies to prevent XSS attacks related to token theft.
- **Data Protection**: BCrypt implementation for robust password storage.
- **File Upload Security**: Regulated file types and size limits for AI analysis and prescriptions.

## 🌱 Future Enhancements

- **Payment Gateway**: Integration (Stripe/Razorpay) for smooth appointment billing.
- **Mobile Application**: Porting the platform to React Native or Flutter.
- **Advanced Analytics**: Usage statistics and performance metrics dashboard.
- **Automated Notifications**: Email and SMS alerts for reminders and updates.

## 🤝 Contributing

We welcome contributions!
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for better healthcare accessibility**
