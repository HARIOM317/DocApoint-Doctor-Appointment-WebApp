# DocApoint - Comprehensive Healthcare Management & Wellness Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge)](https://github.com/HARIOM317/DocApoint-Doctor-Appointment-WebApp) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE) 
[![Repo Size](https://img.shields.io/badge/repo%20size-25MB-blue.svg?style=for-the-badge)](https://github.com/HARIOM317/DocApoint-Doctor-Appointment-WebApp) 
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange.svg?style=for-the-badge)](https://github.com/HARIOM317/DocApoint-Doctor-Appointment-WebApp)

DocApoint is a full-stack MERN application designed to streamline healthcare management while promoting overall wellness. With a modern, premium look powered by Ant Design components, DocApoint offers role-based dashboards for doctors, patients, and administrators. In addition to appointment scheduling and management, the platform now features an innovative health dashboard with advanced analytics and a machine learning model to recommend personalized exercises, diets, and lifestyle adjustments based on user goals.

<p align="center">
  <img src="https://github.com/user-attachments/assets/23618f7c-b349-4876-b9b1-b1249cced392" alt="DocApoint" />
</p>

---

## Table of Contents
- [🧑🏼‍💻 Overview](#-overview)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [⚙ Installation & Setup](#-installation--setup)
- [🚀 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📩 Contact](#-contact)

---

## 🧑🏼‍💻 Overview

DocApoint is a comprehensive healthcare management and wellness platform that caters to the diverse needs of doctors, patients, and administrators. Beyond managing appointments, the platform now includes a robust health dashboard where users can monitor essential health metrics, such as water intake, calorie consumption, and sleep patterns, and receive personalized recommendations based on machine learning analysis. This ensures not only efficient healthcare management but also proactive wellness guidance.

---

## ✨ Features

### Common Features
- **Role-Based Dashboards:**
  - **Admin Dashboard:** Manage system operations, user roles, and permissions.
  - **Doctor Dashboard:** Efficiently manage appointments with auto-generated 15-minute slots, interact with patients, and manage digital prescriptions and invoices.
  - **Patient Dashboard:** Book appointments, track appointment history, and interact with doctors.

### New & Enhanced Features

- **Health Dashboard:**
  - Track vital health metrics like water intake, calorie intake, sleep duration, and more.
  - Visualize health trends through interactive graphs and charts.
    
- **Personalized ML Recommendations:**
  - Test your health by symptoms and get a recommended doctor, exercises and diet according to your symptoms.
  - Receive tailored exercise and diet plans based on your health data and goals (e.g., weight gain, weight loss).
  - Get suggestions on activities and foods to avoid for better health outcomes.
    
- **Additional Functionalities:**
  - Digital Prescription & Invoicing for seamless documentation.
  - Integrated Rezopay Payment Gateway for secure transactions.
  - Advanced search and filter options for finding doctors by expertise, experience, and location.
  - Blog publishing feature for doctors.
  - Automated email notifications for appointment updates and system alerts.

---

## 🛠 Tech Stack

- **Frontend:** React, Ant Design
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Integration:** Rezopay
- **Authentication:** JWT with role-based access control
- **Machine Learning:** Integrated ML model for personalized exercise and diet recommendations

---

## ⚙ Installation & Setup

### Prerequisites
- **Node.js** (v16+)
- **MongoDB**
- **npm** or **yarn**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HARIOM317/DocApoint-Doctor-Appointment-WebApp.git
   cd DocApoint-Doctor-Appointment-WebApp
  
2. **Install dependencies:**

    ```bash
    npm install
  

3. **Configure environment variables:**
Create a .env file in the root directory and add the following variables:

    ```env
    # MongoDB Connection
    DATABASE_URL=<your_postgresql_connection_string>
    
    # JSON Web Token (JWT) configuration
    JWT=<your_jwt_token>
    JWT_SCRET=<your_jwt_secret>
    JWT_EXPIRED_IN=<jwt_expiration_time>         # e.g., 30d
    JWT_REFRESH_SECRET=<your_jwt_refresh_secret>
    JWT_SCRET_SALT_ROUND=<salt_round_number>       # e.g., 10
    
    # Server configuration
    PORT=<your_app_port>                           # e.g., 5000
    NODE_ENV=<your_environment>                    # e.g., production or development
    
    # Default passwords for roles (ensure to change for production)
    DOCTOR_PASS=<default_doctor_password>
    PATIENT_PASS=<default_patient_password>
    
    # Cloudinary configuration
    CLOUND_NAME=<your_cloudinary_cloud_name>
    API_KEY=<your_cloudinary_api_key>
    API_SECRET=<your_cloudinary_api_secret>
    
    # Email configuration
    EMAIL_PASS=<your_cloudnarry_email_password>
    ADMIN_EMAIL=<your_cloudnary_email_address>
    GMAIL_APP_EMAIL=<gmail_app_email_address>
    
    # Client URLs
    CLIENT_URL=<your_client_url>                   # e.g., http://localhost:3000/
    CLIENT__LOCAL_URL=<your_client_local_url>        # e.g., http://localhost:3000/
    
    # Razorpay configuration
    RAZORPAY_API_KEY=<your_razorpay_api_key>
    RAZORPAY_APT_SECRET=<your_razorpay_api_secret>

4. **Run the application:**

    ```bash
    npm start

---

## 🚀 Usage
After starting the application, navigate to the appropriate dashboard based on your role:

Admin Dashboard: http://localhost:3000/admin/dashboard

Doctor Dashboard: http://localhost:3000/dashboard/appointments

Patient Dashboard: http://localhost:3000/dashboard/

Physical Exercises: http://localhost:3000/health/exercise

Recommend Diets: http://localhost:3000/health/diets

Test Symptoms: http://localhost:3000/health/test-health-by-symptoms

---

## 🤝 Contributing
Contributions are highly appreciated! Follow these steps to contribute:

Fork the Repository

Clone Your Fork

git clone https://github.com/HARIOM317/DocApoint.git
cd DocApoint
Create a New Branch

git checkout -b feature/your-feature-name
Make Your Changes & Commit

git add .
git commit -m "✨ Add [feature/fix]: description"
Push to Your Fork & Create a Pull Request

git push origin feature/your-feature-name

Submit a Pull Request on GitHub

---

## 📜 License
DocApoint is licensed under the MIT License. View the full license here.

---

## 📩 Contact
For further information, feedback, or support, please reach out:

Project Maintainer: Hariom Singh Rajput

GitHub: [@HARIOM317](https://github.com/HARIOM317)

LinkedIn: [@in/hariom-singh-mewada](https://www.linkedin.com/in/hariom-singh-mewada/)

DocApoint – Empowering healthcare and wellness through technology.
