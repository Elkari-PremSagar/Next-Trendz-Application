🛒 Nxt Trendz – Online Shopping Application (Frontend)
📌 Project Overview

Nxt Trendz is a responsive frontend e-commerce web application inspired by popular platforms like Amazon.
The application was developed using React with a strong emphasis on clean code practices, scalable component architecture, and real-world frontend development concepts.

This project was completed in one week, with the primary focus on building a robust and maintainable frontend system that delivers a smooth user experience.

🎯 Learning Objectives

The main objective of this project was to apply and strengthen the following concepts:

Authentication and authorization

State management using React Context API

Client-side routing and protected routes

Component-based architecture

Responsive UI design

Clean code guidelines and reusable components

✨ Features
🔐 Authentication

User login functionality with validation

Error handling for:

Invalid username

Invalid password

Authentication persistence using cookies, allowing users to remain logged in after page reloads

🛍️ Product Browsing

Search products by name

Sort products based on available criteria

Filter products using categories and ratings

View detailed product information

🛒 Shopping Cart

Add products to the cart

Increase or decrease product quantity

Remove individual items from the cart

Remove all items at once

Cart state is managed globally using Context API

🧭 Navigation & Routing

Implemented using React Router

Protected routes to restrict access for unauthenticated users

Smooth navigation between:

Login

Products

Product Details

Cart

📱 Responsive Design

Fully responsive across mobile, tablet, and desktop devices

Layout implemented using:

Flexbox

Media Queries

🧠 Technical Implementation
State Management

Used React Context API to create a global cart state

Avoided prop drilling by centralizing shared state

Routing

Implemented client-side routing using React Router

Protected routes ensure only authenticated users can access restricted pages

API Integration

Integrated mock APIs for authentication and product data

Backend complexity was intentionally avoided to focus on frontend architecture

Clean Code Practices

Maintained a consistent folder structure

Used meaningful and descriptive naming conventions

Prefixed event handlers with on (e.g., onClickAddToCart)

Built reusable and modular components

Ensured separation of concerns across components

🧩 Tech Stack
Technology	Purpose
React	UI development
React Router	Client-side routing
Context API	Global state management
JavaScript (ES6+)	Application logic
CSS	Styling
Flexbox	Layout
Media Queries	Responsive design
Cookies	Authentication persistence
