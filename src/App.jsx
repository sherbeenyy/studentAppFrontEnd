import { useState } from 'react';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
