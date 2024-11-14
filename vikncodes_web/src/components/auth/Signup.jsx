import React from 'react';
import { useRegister } from '../../api/AuthApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const {mutate:userRegister} = useRegister()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    userRegister(formData)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300">
      <div>
        <ToastContainer />
      </div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-center text-indigo-500 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300">First Name</label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-300">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-300">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirm_password"
                className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
