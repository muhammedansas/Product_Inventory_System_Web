# Product Inventory System - Frontend

## Features

- Product Listing:
    - Displays products with their variants and sub-variants.
    - Products are organized based on their categories for easy navigation.

- Stock Status:
    - Shows real-time stock information for each product variant.
    - Users can view available stock quantities for each size/color combination.

- Authentication:
    - JWT (JSON Web Token) authentication is implemented for secure user login.
    - Login page for users to authenticate and access protected routes.

- Product Management (Admin Side):
    - Admin can view and manage products, including variants and sub-variants.

- State Management:
    - useContext is used for managing global state across the application, with AuthContext for authentication and ProductContext for product data and stock updates.

- Data Fetching with React Query:
    - React Query is used to efficiently fetch, cache, and sync data from the backend API.

- Toast Notifications:
    - react-toastify is used for displaying user-friendly notifications such as successful actions, error messages, and warnings.

- Forms and Validation:
    - Includes forms for user registration, login, and product management.
    - Form validation to ensure data integrity during user input.

- Error Handling:
    - User-friendly error messages for failed login attempts, product updates, and other interactions.


# Getting Started     

## Prerequisites:

- Node.js (latest stable version)
- npm or yarn

## Installation"

1. Clone the repository:
    ```bash
    https://github.com/muhammedansas/Product_Inventory_System_Web.git

2. Navigate to the project directory:
    cd vikncodes_web

3. Install Dependencies:
    npm install
    # or
    yarn install


## Running the Application
    npm run dev
    # or
    yarn dev
