import React, { useState } from 'react';

const AccountSettings = () => {
  const [imagePreview, setImagePreview] = useState('https://img.icons8.com/lollipop/48/user.png');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-slate-600">Account Settings</h1>
        <div className="flex items-start space-x-4">
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="profile-upload"
            />
            <label htmlFor="profile-upload" className="cursor-pointer">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>
          <div>
            <h2 className="font-bold text-lg">Marry Doe</h2>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;