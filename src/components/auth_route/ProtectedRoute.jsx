import React from 'react'
import { useAuth } from '../../auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ 
    redirectTo = '/login',
    children
 }) => {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn) return <Navigate to={redirectTo} replace />
  
  return children ? children : <Outlet />;
}

export default ProtectedRoute;