import JobListing from './pages/JobListing';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobDetail from './pages/JobDetail';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/jobs',
    element: <Header />,
    children: [
      {
        index: true,
        element: <JobListing />
      },
      {
        path: ':id',
        element: <JobDetail />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
