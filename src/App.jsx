import JobListing from './pages/JobListing';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobDetail from './pages/JobDetail';
import Header from './components/Header';
import Login from './pages/Login';
import { AuthProvider } from './auth';
import ProtectedRoute from './components/auth_route/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Header />,
    children: [
      {index: true, element: <Login />}
    ]
  },
  {
    path: '/jobs',
    element: <Header />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        )
      },
      {
        path: ':id',
        element: (
          <ProtectedRoute>
            <JobDetail />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  )
};

export default App;
