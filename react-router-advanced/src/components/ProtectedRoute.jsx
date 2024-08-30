import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = false; // Simulate authentication

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/" />}
    />
  );
}

export default ProtectedRoute;
