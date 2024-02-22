import { useState, useEffect } from 'react';
import image1 from '../public/bg-header-desktop.svg';
import JobCard from './components/JobCard';

import data from './data/data.json';
import FilterListContainer from './components/FilterListContainer';


const App = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState({
    role: null,
    level: null,
    languages: [],
    tools: []
  });

  const handleClear = () => {
    setFilter({
      role: null,
      level: null,
      languages: [],
      tools: []
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
      if (!filter.languages.includes(value)){
        const updatedArray = [...filter[key]];
        updatedArray.push(value)
        setFilter(current => ({...current, [key]: updatedArray}));
      }
    }
    
  }

  const updateJobs = () => {
    return data.filter(job => {
      return (filter.role === null || job.role.toLowerCase().includes(filter.role.toLowerCase())) &&
      (filter.level === null || job.level.toLowerCase() === filter.level.toLowerCase()) &&
      (filter.languages.length === 0 || filter.languages.every(lang => job.languages.includes(lang))) &&
      (filter.tools.length === 0 || filter.tools.every(tool => job.tools.includes(tool)))
    })
  }

  useEffect(() => {
    if (filter.role || filter.level || filter.languages.length > 0 || filter.tools.length > 0)
      setFilteredJobs(updateJobs());
  }, [filter])
  

  // JobList Component
  const JobList = () => {
    const jobs = filteredJobs.length === 0 ? data : filteredJobs;
    return jobs.map(job =>
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
              <JobList />
            </ul>
          </div>
          <nav className="mt-4">
            <ul className="flex justify-center">
              <li>
                <button
                  className={`mx-1 px-6 py-4 rounded shadow 
                      text-blue-500 bg-white`}
                >
                  1
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
