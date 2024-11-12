import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#2E3A59] to-[#0E2145] text-white">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Product Inventory System
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Manage your products and stock with ease. Start by logging in or creating a new account.
      </p>
      <div className="flex gap-6">
        <Link
          to="/Signin"
          className="px-8 py-4 bg-white text-[#2E3A59] font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#e0e0e0] transition-transform duration-200"
        >
          Login
        </Link>
        <Link
          to="/Signup"
          className="px-8 py-4 bg-white text-[#2E3A59] font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#e0e0e0] transition-transform duration-200"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
