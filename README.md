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
