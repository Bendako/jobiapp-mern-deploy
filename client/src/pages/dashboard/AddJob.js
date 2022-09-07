import React from 'react';

import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const { 
    isLoading,
    isEditing,
    showAlert, 
    displayAlert, 
    position, 
    company, 
    jobLocation, 
    jobType, 
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert()
      return;
    }
    
    if (isEditing) {
      editJob()
      return 
    }
    createJob()
  };

  const handleJobInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    handleChange({ name, value })
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{ isEditing ? 'Edit Job' : 'Add Job'}</h3>
        { showAlert && <Alert /> }
        <div className="form-center">

          {/* Position */}
          <FormRow 
            type="text" 
            name='position' 
            value={position} 
            handleChange={handleJobInput}
          />

          {/* Company */}
          <FormRow 
            type="text" 
            name='company' 
            value={company} 
            handleChange={handleJobInput}
          />

          {/* Location */}
          <FormRow 
            type="text" 
            labelText='job location'
            name='jobLocation' 
            value={jobLocation} 
            handleChange={handleJobInput}
          />

          {/* Job Status */}
          <FormRowSelect 
            name="status" 
            value={status} 
            handleChange={handleJobInput} 
            list={statusOptions} 
          />

          {/* Job Type */}
          <FormRowSelect 
            name="jobType"
            labelText="job type" 
            value={jobType}  
            handleChange={handleJobInput} 
            list={jobTypeOptions} 
          />
          
          {/* Button Container */}
          <div className="btn-container">
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-block submit-btn" 
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>

            {/* Clear Button */}
            <button 
              type="button" 
              className="btn btn-block clear-btn" 
              onClick={(event) => {
                event.preventDefault()
                clearValues()
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
};

export default AddJob;