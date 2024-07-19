# Pharmacy Management System

This project is a Pharmacy Management System that includes a loyalty program and other essential features for managing a pharmacy. The application is built using React for the frontend and Node.js for the backend.

## Current Hosting

This application is currently hosted at [http://54.172.39.22:3000/](http://54.172.39.22:3000/) using two separate repositories named [PMS_backend](https://github.com/chathuratd/PMS_backend) and [PMS_frontend](https://github.com/chathuratd/PMS_frontend), with self-hosted runners. GitHub Actions is configured for continuous integration and deployment.

You can use the following credentials to log in as a manager and check the loyalty program and other functions:

- **Username:** manager@pms.dev
- **Password:** itpITP123!

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Directory Structure](#directory-structure)
6. [Screenshots](#screenshots)

## Features

- **Inventory Management:** Keep track of all medicines and supplies.
- **Sales Management:** Process sales and generate invoices.
- **Loyalty Program:** Reward loyal customers with points and discounts.
- **User Management:** Manage staff and their roles.
- **Reporting:** Generate various reports for analysis.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- MongoDB

## Installation

### Backend (Node.js)

1. Clone the repository:
    ```sh
    git clone https://github.com/chathuratd/pharmacy-management-system.git
    cd pharmacy-management-system/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```sh
    PORT=4000
    MONGO_URI=your_MONGO_URI
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```sh
    nodemon server.js
    ```

### Frontend (React)

1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Running the Application

1. Start the backend server as mentioned above.
2. Start the frontend development server as mentioned above.
3. Open your browser and navigate to `http://localhost:3000`.

## Directory Structure

```
pharmacy-management-system
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   ├── index.js
└── README.md
```

## Screenshots

![image](https://github.com/user-attachments/assets/0955f350-8206-45f4-8bb4-31895506407a)


