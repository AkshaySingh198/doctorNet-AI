# TeleMed Platform - Comprehensive Telemedicine Website

A full-stack telemedicine platform built with Node.js, Express, MongoDB, and modern frontend technologies. This platform connects patients with healthcare professionals through video consultations, digital prescriptions, and comprehensive health management tools.

## 🚀 Features

### For Patients
- **Easy Registration**: Simple registration with Aadhaar/ABHA number verification
- **Doctor Search**: Find doctors by name or specialty
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Video Consultations**: Secure video calls with healthcare professionals
- **Digital Prescriptions**: Upload and manage prescription records
- **Emergency Services**: Quick access to emergency numbers and nearby hospitals
- **Health Records**: Comprehensive health issue tracking
- **Medicine Management**: Track and manage medication records
- **Blood Bank**: Check blood availability in nearby locations
- **Rehabilitation Centers**: Find nearby rehabilitation services

### For Doctors
- **Professional Registration**: Register with UID/NMR ID verification
- **Patient Management**: View and manage assigned patients
- **Digital Prescriptions**: Write and manage digital prescriptions
- **Schedule Management**: Set availability and manage appointments
- **Patient Records**: Access comprehensive patient health information
- **Billing System**: Manage appointment billing (framework ready)

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **EJS** - Template engine
- **EJS-Mate** - Layout support for EJS
- **Express-Session** - Session management
- **BCrypt** - Password hashing
- **Multer** - File upload handling
- **Socket.io** - Real-time communication (ready for chat/video)

### Frontend
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Custom CSS** - Modern UI components
- **JavaScript** - Interactive functionality
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
telemedicine-website/
├── models/
│   ├── Patient.js          # Patient data model
│   └── Doctor.js           # Doctor data model
├── routes/
│   ├── index.js            # Main routes
│   ├── patient.js          # Patient routes
│   └── doctor.js           # Doctor routes
├── views/
│   ├── layout.ejs          # Main layout template
│   ├── landing.ejs         # Landing page
│   ├── patient/
│   │   ├── register.ejs    # Patient registration
│   │   ├── login.ejs       # Patient login
│   │   ├── dashboard.ejs  # Patient dashboard
│   │   └── home.ejs       # Patient main page
│   └── doctor/
│       ├── register.ejs    # Doctor registration
│       ├── login.ejs       # Doctor login
│       └── dashboard.ejs  # Doctor dashboard
├── public/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── main.js         # Main JavaScript
│   └── uploads/
│       └── prescriptions/  # Prescription uploads
├── server.js               # Main server file
├── package.json            # Dependencies
├── env.example            # Environment variables template
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd telemedicine-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Start MongoDB**
   ```bash
   # On Windows
   mongod
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 🎨 UI/UX Design

The platform features a modern, clean design inspired by healthcare UI/UX best practices:

### Design Principles
- **Clean & Modern**: Minimalist design with focus on usability
- **Healthcare-Focused**: Color scheme and icons appropriate for medical context
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with proper contrast and navigation
- **User-Friendly**: Intuitive navigation and clear call-to-actions

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust and professionalism
- **Secondary**: Dark Blue (#1e40af) - Depth and reliability
- **Success**: Green (#10b981) - Health and positive actions
- **Warning**: Orange (#f59e0b) - Caution and attention
- **Danger**: Red (#ef4444) - Emergency and alerts

### Key UI Components
- **Hero Section**: Prominent landing page with clear user paths
- **Feature Cards**: Highlighted service offerings
- **Dashboard Layout**: Clean, organized information display
- **Modal Dialogs**: Smooth interactions for forms and confirmations
- **Status Badges**: Clear visual indicators for appointment status
- **Emergency Buttons**: Prominent, accessible emergency services

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly controls
- **Mobile**: Streamlined interface optimized for small screens

## 🔒 Security Features

- **Session Management**: Secure user sessions with proper expiration
- **Data Validation**: Server-side validation for all inputs
- **File Upload Security**: Restricted file types and size limits
- **Password Hashing**: BCrypt implementation for secure password storage
- **Input Sanitization**: Protection against XSS attacks

## 🚀 Future Enhancements

### Planned Features
- **Real-time Chat**: Socket.io implementation for doctor-patient messaging
- **Video Calling**: WebRTC integration for video consultations
- **Payment Integration**: Stripe/PayPal integration for appointment billing
- **Email Notifications**: Automated appointment reminders and updates
- **Mobile App**: React Native or Flutter mobile application
- **AI Integration**: Symptom checker and preliminary diagnosis
- **Telemedicine Compliance**: HIPAA and medical regulation compliance
- **Analytics Dashboard**: Usage statistics and performance metrics

### Technical Improvements
- **API Documentation**: Swagger/OpenAPI documentation
- **Testing Suite**: Unit and integration tests
- **CI/CD Pipeline**: Automated deployment pipeline
- **Performance Optimization**: Caching and database optimization
- **Monitoring**: Application performance monitoring
- **Backup System**: Automated database backups

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- Font Awesome for comprehensive icon library
- MongoDB team for the robust database solution
- Express.js community for the web framework
- Healthcare professionals who provided feedback on the design

---

**Built with ❤️ for better healthcare accessibility**
