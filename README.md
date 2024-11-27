# VRV Security

VRV Security is a web application designed to manage and secure various roles and users in a system. This application allows for easy management of user roles, user details, and login functionalities.

## Project Overview

This is a [Next.js](https://nextjs.org) project that provides a user management and authentication system for managing roles and users, suitable for enterprise-level applications where security and ease of use are priorities.

### Features

- **User Authentication**: Secure login for users to access the application.
- **User Management**: Ability to view and manage user details including username, email, password, phone number, address, and more.
- **Role Management**: Admins can view and manage user roles such as Admin, User, etc.
- **Admin Panel**: Admin users can perform actions to update user details, enable or disable users, and manage permissions.

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js (if applicable), Next.js API Routes

## Getting Started

### Prerequisites

Before you can run the application, you need to have [Node.js](https://nodejs.org/) installed. You also need a package manager such as [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/).

### Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/sharonsajan/VRV_Security_Assignment.git
cd VRV_Security_Assignment

------------------------------------------------------------------------------------------------------

Install Dependencies
Run the following command to install the necessary dependencies:

```

npm install

# or

yarn install

# or

pnpm install

## Running the Development Server

To run the development server locally, use the following command:

npm run dev

# or

yarn dev

# or

pnpm dev

This will start the server, and you can view the app in your browser at http://localhost:3000.

---

## Environment Variables

Make sure to set up the following environment variables in your .env.local file for the app to work:

SECRET_KEY=<your_secret_key_here>
ADMIN=<your_admin_username>
PASSWORD=<your_admin_password>
NODE_ENV=developmen

---

## Learn More

To learn more about Next.js, check out the following resources:

Next.js Documentation – Learn about Next.js features and API.
Learn Next.js – An interactive Next.js tutorial.
Next.js GitHub Repository – Your feedback and contributions are welcome!
Deployment
You can deploy the application using Vercel, which integrates seamlessly with Next.js:

Go to Vercel and sign in or create an account.
Connect your GitHub repository to Vercel.
Vercel will automatically detect that it's a Next.js project and deploy it.
For more details on deploying with Vercel, check out the Next.js deployment documentation.

## License

This project is licensed under the MIT License – see the LICENSE file for details.
