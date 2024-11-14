import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { useLogOut } from '../api/AuthApi';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { authUser } = useAuthContext();
  const { mutate:logout } = useLogOut()

  const onLogout = () =>{
    logout()
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#2E3A59] to-[#0E2145] text-white relative">
      <div>
        <ToastContainer />
      </div>
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Product Inventory System
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Manage your products and stock with ease. Start by logging in or creating a new account.
      </p>
      {authUser && 
            <Link
            to="/products"
            className="px-8 py-4 bg-white text-[#2E3A59] font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#e0e0e0] transition-transform duration-200 mb-6"
          >
            View Products
          </Link>
      }

      {!authUser && (
        <div className="flex gap-6 mb-6">
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
      )}
      {authUser && (
        <button
          onClick={onLogout}
          className="absolute top-6 right-6 px-6 py-3 bg-white text-[#2E3A59] font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#e0e0e0] transition-transform duration-200"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
