import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');
    const agency = formData.get('agency');

    
    if (!fullName || !phone || !email || !password || !agency) {
      alert('Please fill in all required fields');
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

   
    navigate('/account-settings');
  };
  return (
    <div className="flex flex-col min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Phone number*</label>
          <input
            type="tel"
            name="phone"
            placeholder="1234567890"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Email address*</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-purple-800"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-purple-800 font-semibold">Are you an Agency?*</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="mr-2 text-purple-800"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="agency"
                value="no"
                className="mr-2 text-purple-800"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-3 rounded-lg mt-6 font-medium"
          
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;