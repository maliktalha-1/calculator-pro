# Calculator Pro

A modern full-stack calculator application built using **React.js**, **Node.js**, **Express.js**, and **MySQL**. The application provides secure user authentication using JWT, allows users to perform arithmetic calculations, and stores their calculation history in a MySQL database.

---

# Project Overview

Calculator Pro is a secure web application that enables users to create an account, log in, perform arithmetic calculations, and automatically save every calculation. Each user has a separate calculation history that can be viewed, deleted individually, or cleared completely.

This project was developed as part of an internship assignment to demonstrate full-stack web development skills, RESTful API development, JWT authentication, database integration, and responsive frontend design.

---

# Features

- User Registration
- User Login
- JWT Authentication
- Protected API Routes
- Addition, Subtraction, Multiplication, and Division
- Automatic Calculation History
- View Previous Calculations
- Delete Individual Calculation
- Clear Entire History
- Responsive User Interface
- Toast Notifications
- MySQL Database Integration

---

# Technologies Used

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- React Icons

## Backend

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt
- dotenv
- cors

## Database

- MySQL

---

# Project Structure

```
calculator-app/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/maliktalha-1/calculator-pro.git
```

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=calculator_db

JWT_SECRET=your_secret_key
```

---

# Database Setup

Create a MySQL database.

```sql
CREATE DATABASE calculator_db;
```

Import the required SQL tables before running the application.

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

## Calculations

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/calculations` | Save a calculation |
| GET | `/api/calculations` | Get calculation history |
| DELETE | `/api/calculations/:id` | Delete a calculation |
| DELETE | `/api/calculations` | Clear all calculation history |

---

# Future Improvements

- Dark Mode
- Search Calculation History
- Export History
- Profile Management
- Calculator Keyboard Support

---


# License

This project is intended for educational and internship purposes.