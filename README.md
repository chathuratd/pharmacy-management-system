# Pharmacy Management System

This project is a Pharmacy Management System that includes a loyalty program and other essential features for managing a pharmacy. The application is built using React for the frontend and Node.js for the backend.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Directory Structure](#directory-structure)
6. [Contributing](#contributing)

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
    MONGO_URI=you_MONGO_URI
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
│   │   ├── services
│   │   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

