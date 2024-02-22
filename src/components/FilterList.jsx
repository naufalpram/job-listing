import React, { useState, useEffect } from 'react'

const FilterList = ({ filter, handleUnselect }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {filter?.role && 
        <li className="flex">
            <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">
                {filter.role}
            </div>
            <div>
            <button 
                className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
                id="role"
                onClick={() => handleUnselect('role', filter.role)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path>
                </svg>
            </button>
            </div>
        </li>
      }
      {filter?.level &&
        <li className="flex">
            <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">
                {filter.level}
            </div>
            <div>
            <button 
                className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
                id="level"
                onClick={() => handleUnselect('level', filter.level)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path>
                </svg>
            </button>
            </div>
        </li>
      }
      {
        filter?.languages?.map((language, idx) => (
            <li key={idx} className="flex">
                <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">
                    {language}
                </div>
                <div>
                <button 
                    className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
                    id="languages"
                    value={language}
                    onClick={() => handleUnselect('languages', language)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                        <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path>
                    </svg>
                </button>
                </div>
            </li>
        ))
      }
      {
        filter?.tools?.map((tool, idx) => (
            <li key={idx} className="flex">
                <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">
                    {tool}
                </div>
                <div>
                <button 
                    className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
                    id="languages"
                    value={tool}
                    onClick={() => handleUnselect('tools', tool)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                        <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path>
                    </svg>
                </button>
                </div>
            </li>
        ))
      }
    </ul>        
  )
}

export default FilterList