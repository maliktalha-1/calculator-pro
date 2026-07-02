# Calculator Pro

A modern full-stack calculator application built with **React.js**, **Node.js**, **Express.js**, **NestJS**, and **MySQL**. The application provides secure JWT authentication, performs arithmetic calculations, and stores each user's calculation history in a MySQL database.

---

# Project Overview

Calculator Pro is a secure web application that allows users to:

* Register and log in securely
* Perform arithmetic calculations
* Automatically save calculation history
* View previous calculations
* Delete individual calculations
* Clear all calculation history

This project was developed as part of an internship assignment to demonstrate full-stack web development skills, RESTful API development, authentication, database integration, and backend development using both **Express.js** and **NestJS**.

---

# Features

* User Registration
* User Login
* JWT Authentication
* Protected API Routes
* Addition
* Subtraction
* Multiplication
* Division
* Automatic Calculation History
* Pagination Support
* Search Calculation History
* Sort Calculation History
* Delete Individual Calculation
* Clear Entire History
* Responsive User Interface
* Toast Notifications
* MySQL Database Integration

---

# Technologies Used

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Hot Toast
* React Icons

---

## Express Backend

* Node.js
* Express.js
* MySQL
* JWT (JSON Web Token)
* bcrypt
* dotenv
* cors

---

## NestJS Backend

* NestJS
* TypeORM
* MySQL
* JWT Authentication
* Class Validator
* Class Transformer
* Cookie Parser
* Config Module

---

## Database

* MySQL

---

# Project Structure

```text
calculator-app/

├── backend/                 # Express Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── package.json/
│   └── server.js
│
├── nest-backend/            # NestJS Backend
│   ├── src/
│   │   ├── auth/
│   │   ├── calculations/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── .env
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

cd calculator-pro
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Express Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

# NestJS Backend Setup

```bash
cd nest-backend

npm install

npm run start:dev
```

---

# Environment Variables

Create a `.env` file inside the backend folders.

## Express Backend

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=calculator_db

JWT_SECRET=your_secret_key
```

---

## NestJS Backend

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=calculator

JWT_SECRET=your_secret_key
```

---

# Database Setup

Create the database.

```sql
CREATE DATABASE calculator;
```

TypeORM will automatically generate the required tables when the NestJS backend starts.

---

# API Endpoints

## Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |
| POST   | /api/auth/logout   | Logout user         |

---

## Calculations

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | /api/calculations     | Save a calculation            |
| GET    | /api/calculations     | Get calculation history       |
| DELETE | /api/calculations/:id | Delete a calculation          |
| DELETE | /api/calculations     | Clear all calculation history |

---

# Future Improvements

* Dark Mode
* User Profile Management
* Export Calculation History
* Advanced Scientific Calculator
* Password Reset
* Email Verification
* Unit Converter
* Calculation Statistics

---

GitHub: https://github.com/maliktalha-1
