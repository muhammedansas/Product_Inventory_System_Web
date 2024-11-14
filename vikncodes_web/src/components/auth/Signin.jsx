import React, { useState } from 'react';
import { useLogin } from '../../api/AuthApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const {mutate:login} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    login(formData)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300">
      <div>
        <ToastContainer />
      </div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
