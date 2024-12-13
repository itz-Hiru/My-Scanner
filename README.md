# Link to QR 🔗📱

## Project Overview

Link to QR is a comprehensive React-based web application that provides advanced QR code functionality, allowing users to generate, scan, and interact with QR codes seamlessly.

## 🌟 Features

### QR Code Scanning
- Upload image-based QR code scanning
- Live camera-based QR code scanning
- Support for multiple QR code formats

### QR Code Generation
- Easy QR code generation
- Customizable QR code creation

### Authentication
- Secure Firebase authentication
- Email-based login
- One-Time Password (OTP) verification via EmailJS

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Bootstrap
- **Authentication**: Firebase
- **Email Verification**: EmailJS
- **QR Functionality**:
  - `html5-qrcode` for QR scanning
  - `react-qr-code` for QR generation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/itz-Hiru/My-Scanner.git
cd My-Scanner
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebasee_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

4. Run the application
```bash
npm run dev
# or
yarn dev
```

## 📦 Key Dependencies

- `react`: UI Library
- `vite`: Build tool
- `firebase`: Authentication
- `bootstrap`: Styling
- `html5-qrcode`: QR Code Scanning
- `react-qr-code`: QR Code Generation
- `sweetalert`: Enhanced Alerts
- `emailjs`: Email Verification

## 🔐 Authentication Flow

1. User registers/logs in via email
2. EmailJS sends a one-time password (OTP)
3. User verifies OTP
4. Firebase authenticates the user

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- You cant't read via qr scanner twice in one login.(Only for camera scanner)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Hirumitha Kuladewa - [hirumithakuladewanew@gmail.com]

Project Link: [https://github.com/itz-Hiru/My-Scanner](https://github.com/itz-Hiru/My-Scanner)

---

**Made with ❤️ by itz-Hiru**