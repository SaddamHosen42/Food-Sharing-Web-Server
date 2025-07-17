# 🍽️ FoodBridge Server - Backend API for Food Sharing Platform

This is the backend server for the [FoodBridge](https://foodbridge-1.web.app/) web application — a community-based food sharing and surplus reduction platform.

**🔗 Server Live URL:** [https://food-sharing-web-server-tau.vercel.app/](https://food-sharing-web-server-tau.vercel.app/)

## 🎯 Purpose

The server handles all the backend operations for FoodBridge, including user authentication, food data CRUD operations, food request handling, and secure API communication using JWT.

## ⚙️ Key Features

- ✅ RESTful API endpoints
- ✅ JWT authentication with HTTP-only cookies
- ✅ CRUD operations for food management
- ✅ Manage food request system
- ✅ Role-based access control (if implemented)
- ✅ Firebase Admin SDK for user verification
- ✅ MongoDB database integration

## 🔐 Security

- **JWT Authentication** for protected routes
- **HTTP-only Cookies** to protect access tokens
- **Environment Variables** for secret credentials

## 🧰 Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Admin SDK + JWT
- **Environment Config:** dotenv
- **CORS Handling:** cors
- **Cookies:** cookie-parser

## 📦 NPM Packages Used

```bash
express
cors
dotenv
mongodb
jsonwebtoken
firebase-admin
cookie-parser
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Firebase project with Admin SDK credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaddamHosen42/Food-Sharing-Web-Server.git
   cd Food-Sharing-Web-Server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   ```

4. **Firebase Admin SDK Setup**
   - Go to your Firebase Console
   - Navigate to Project Settings > Service Accounts
   - Generate a new private key
   - Download the JSON file
   - Rename it to `firebase-adminsdk.json` and place it in the root directory
   - **Important:** This file contains sensitive credentials and should never be committed to version control

5. **Run the server**
   ```bash
   npm start
   ```

The server will start on the configured port (default: 5000).

### 🔒 Security Notes

- The `firebase-adminsdk.json` file is already included in `.gitignore`
- Never commit actual credentials to version control
- Use environment variables for sensitive data
- A template file `firebase-adminsdk.template.json` is provided as reference
