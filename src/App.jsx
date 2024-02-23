import { useState, useEffect } from 'react';
import image1 from '../public/bg-header-desktop.svg';
import JobCard from './components/JobCard';

import data from './data/data.json';
import FilterListContainer from './components/FilterListContainer';

const jobsPerPage = 5;

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState([...data]);
  const [filter, setFilter] = useState({
    role: null,
    level: null,
    languages: []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / jobsPerPage))

  const handleClear = () => {
    setFilter({
      role: null,
      level: null,
      languages: []
    })
    setFilteredJobs([]);
  };

  const handleUnselectFilter = (key, value) => {
    if (key === 'role' || key === 'level')
      setFilter(current => ({...current, [key]: null}));
    else
      setFilter(current => ({...current, [key]: current[key].filter(item => item !== value)}));
  };

  const handleSelectFilter = (key, value) => {
    if (key === 'role' || key === 'level')
      setFilter(current => ({...current, [key]: value}));
    else{
      if (!filter[key].includes(value)){
        const updatedArray = [...filter[key]];
        updatedArray.push(value)
        setFilter(current => ({...current, [key]: updatedArray}));
      }
    }
    
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const updateJobs = () => {
    return data.filter(job => {
      return (filter.role === null || job.role.toLowerCase() === filter.role.toLowerCase()) &&
      (filter.level === null || job.level.toLowerCase() === filter.level.toLowerCase()) &&
      (filter.languages.length === 0 || filter.languages.every(lang => job.languages.includes(lang)))
    })
  }

  useEffect(() => {
    setCurrentPage(1);
    if (filter.role || filter.level || filter.languages.length > 0){
      const updatedJobs = updateJobs();
      setTotalPages(Math.ceil(updatedJobs.length / jobsPerPage));
      setFilteredJobs(updatedJobs);
    }
    else {
      setTotalPages(Math.ceil(data.length / jobsPerPage));
      setFilteredJobs([...data]);
    }
  }, [filter])
  

  // JobList Component
  const JobList = ({ jobs }) => {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = currentPage * jobsPerPage;
    const shownJobs = jobs.slice(startIndex, endIndex);
    
    return shownJobs.map(job =>
      <JobCard key={job.id} jobDetail={job} handleSelectFilter={handleSelectFilter} />
    );
  }

  return (
    <>
      <header className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop" style={{background: image1}}></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          <FilterListContainer filter={filter} handleClear={handleClear} handleUnselect={handleUnselectFilter} />
          <div>
            <ul>
              <JobList jobs={filteredJobs} />
            </ul>
          </div>
          <nav className="mt-4">
            <ul className="flex justify-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                <button
                  className={`mx-1 px-6 py-4 rounded shadow 
                    ${currentPage === i + 1 ? 'bg-cyan-dark text-white' : 'bg-white text-blue-500'}`
                  }
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
