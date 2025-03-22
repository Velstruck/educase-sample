import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    navigate('/account-settings');
  };

  return (
    <div className="flex flex-col min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-2">Sign in to your PopX account</h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-3 rounded-lg mt-6 font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;