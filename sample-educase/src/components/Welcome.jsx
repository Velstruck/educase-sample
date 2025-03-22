import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-end min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-left">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link to='/create-account' className="w-full bg-purple-800 text-center text-white py-3 rounded-lg mb-4 font-medium ">
        <button className="cursor-pointer">
          Create Account
        </button>
      </Link>
      <Link to='/signin' className="w-full bg-purple-100 text-purple-800 py-3 rounded-lg font-medium text-center">
        <button className="cursor-pointer">
        Already Registered? Login
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
