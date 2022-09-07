import React from 'react';

import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const { 
    isLoading, 
    search, 
    searchStatus, 
    searchType, 
    sort, 
    sortOptions, 
    handleChange, 
    clearFilters,
    jobTypeOptions,
    statusOptions
  } = useAppContext();

  const handleSearch = (event) => {
    if (isLoading) return
    handleChange({ name: event.target.name, value: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search</h4>
        <div className="form-center">

          {/* Search Position */}
          <FormRow 
            type="text" 
            labelText='search position'
            name="search" 
            value={search} 
            handleChange={handleSearch} 
          />

          {/* Search By Status */}
          <FormRowSelect 
            labelText='status' 
            name='searchStatus' 
            value={searchStatus} 
            handleChange={handleSearch} 
            list={['all', ...statusOptions]}
          />

          {/* Search By Type */}
          <FormRowSelect 
            labelText='job type' 
            name='searchType' 
            value={searchType} 
            handleChange={handleSearch} 
            list={['all', ...jobTypeOptions]}
          />

          {/* Sort */}
          <FormRowSelect 
            name='sort' 
            value={sort} 
            handleChange={handleSearch} 
            list={sortOptions}
          />
          <button 
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
};

export default SearchContainer;