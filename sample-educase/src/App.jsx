import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fontsource/rubik';
import Welcome from './components/Welcome';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import AccountSettings from './components/AccountSettings';

const App = () => {
  return (
    <Router>
      <div className="font-rubik w-full max-w-[375px] mx-auto min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;