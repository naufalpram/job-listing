import React, { useState, useEffect } from 'react'
import JobCardFilter from './JobCardFilter';
import { Link } from 'react-router-dom';

const JobCard = ({ jobDetail, handleSelectFilter }) => {
  const [filterQuery, setFilterQuery] = useState({
    role: jobDetail.role,
    level: jobDetail.level,
    languages: jobDetail.languages
  })

  useEffect(() => {
    setFilterQuery({
        role: jobDetail.role,
        level: jobDetail.level,
        languages: jobDetail.languages
    })
  }, [jobDetail.role, jobDetail.level, jobDetail.languages])
  
  return (
    <li className={`relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6`}>
        <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
            <img src={jobDetail.logo} alt={'image'} className="rounded-full w-full" />
        </div>
        <div className="w-full lg:flex justify-between items-center">
          <div>
            <div>
                <span className="text-sm text-cyan-dark font-bold">
                {jobDetail.company}
                </span>
                {
                    jobDetail.new &&
                    <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                        NEW!
                    </span>
                }
                {
                    jobDetail.featured &&
                    <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                    FEATURED
                    </span>
                }
            </div>
            <Link to={`/jobs/${jobDetail.id}`}>
              <p className="block my-1 text-base font-bold hover:text-cyan-dark">
                  {jobDetail.position}
              </p>
            </Link>
            <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
                <li>{jobDetail.postedAt}</li>
                <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
                    {jobDetail.contract}
                </li>
                <li>{jobDetail.location}</li>
            </ul>
          </div>
          <JobCardFilter filterQuery={filterQuery} handleSelect={handleSelectFilter} />
        </div>
    </li>
  )
}

export default JobCard;