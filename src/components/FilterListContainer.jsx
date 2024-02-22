import React, { useState, useEffect } from 'react'
import FilterList from './FilterList'

const FilterListContainer = ({ filter, handleClear, handleUnselect }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [fixedFilter, setFixedFilter] = useState(filter);

  useEffect(() => {
    setShowFilter(
        filter.role !== null || filter.level !== null ||
        filter.languages.length !== 0 || filter.tools.length !== 0
    );
    setFixedFilter(filter);
  }, [filter]);

  return (
    showFilter && (
    <div className="w-full max-w-5xl min-h-[4rem] mb-10">
      <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
        <FilterList filter={fixedFilter} handleUnselect={handleUnselect} />
        <button className="text-sm text-cyan-dark font-bold underline" onClick={handleClear}>
            Clear
        </button>
      </div>
    </div>
    )
  )
}

export default FilterListContainer