import JobListing from './pages/JobListing';
import {Route,  Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JobDetail from './pages/JobDetail';
import Header from './components/Header';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/jobs' element={<Header />}>
        <Route index element={<JobListing />} />
        <Route path=':id' element={<JobDetail />}/>
      </Route>
    </Routes>
  );
};

export default App;
