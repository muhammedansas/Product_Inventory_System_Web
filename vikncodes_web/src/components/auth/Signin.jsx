import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., make API call)
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-gray-300">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96"> {/* Adjust width to w-96 */}
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6"> {/* Increased space for form fields */}
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
              required
            />
          </div>

          {/* Submit Button */}
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
