 Inventory Management Dashboard

A modern inventory management dashboard built using **Next.js (App Router), TypeScript, and Tailwind CSS**.  
This project demonstrates a modular frontend architecture with **role-based authentication, protected routes, and product management workflows**.

The application simulates a small commodity inventory system where different roles have controlled access to features.
URL : https://sloooze-frontend-challenge.vercel.app/auth/login
---

Features

- Role-based authentication (Manager / Store Keeper)
- Protected routes with authorization guards
- Dashboard analytics showing stock insights
- Product inventory listing
- Add product form with validation
- Edit product functionality
- Modular feature-based architecture
- Responsive admin dashboard UI

---

 Roles

### Manager
- View dashboard analytics
- View products
- Add products
- Edit products

### Store Keeper
- View products
- Add products
- Edit products

---

## Dashboard Insights

The dashboard provides key inventory metrics:

- Total products
- Total categories
- Low stock items
- Out-of-stock items

---

## Project Structure
app
dashboard
products
add
edit
auth
components
layout
features
auth
dashboard
product
guards
lib
mock
store

This project follows a **feature-based architecture** for better scalability.

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zustand (State Management)

---

##  Authentication

The app includes a mock authentication system with role-based access control.

Example credentials:
Manager 
username: manager
password: manager123
Store Keeper
username: store
password: store123
# Installation
Clone the repository:
https://github.com/Samir7631/slooze-frontend-challenge.git
Install dependencies:
npm install
Run development server:
npm run dev
open in browser:
http://localhost:3000

---

## Screens

- Login Page
- Dashboard Analytics
- Product Listing
- Add Product
- Edit Product

---

## Purpose

This project was built as a **frontend engineering challenge** to demonstrate:

- scalable project architecture
- role-based access control
- reusable components
- clean UI structure
- TypeScript usage in large apps

---

##  Author

Samir Kumar

GitHub  
https://github.com/Samir7631

---

