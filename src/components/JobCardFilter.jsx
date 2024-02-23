import React from 'react'

const JobCardFilter = ({ filterQuery, handleSelect }) => {
  return (
    <div>
        <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
            {
                filterQuery?.role &&
                <li>
                    <button onClick={() => handleSelect('role', filterQuery.role)}>
                        <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">
                            {filterQuery.role}
                        </div>
                    </button>
                </li>
            }
            {
                filterQuery?.level &&
                <li>
                    <button onClick={() => handleSelect('level', filterQuery.level)}>
                        <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">
                            {filterQuery?.level}
                        </div>
                    </button>
                </li>
            }
            {filterQuery?.languages?.map((language, idx) => (
                <li key={idx}>
                    <button onClick={() => handleSelect('languages', language)}>
                        <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">
                            {language}
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default JobCardFilter