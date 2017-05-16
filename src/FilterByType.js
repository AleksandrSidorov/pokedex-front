import React from 'react';

const FilterByType = ({ typeFilter }) => {
  return (
    <ul>
      {
        typeFilter.map( (filterName, index) => {
          return <li key={index}>filterName</li>
        })
      }
    </ul>
  )
};

export default FilterByType;
