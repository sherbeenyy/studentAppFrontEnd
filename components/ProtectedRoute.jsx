import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthCheck from '../hooks/authcheck';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuthCheck();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
