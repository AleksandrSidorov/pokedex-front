import React from 'react';

const FilterByType = ({ typeFilter, removeTypeFromFilter }) => {
  return (
    <ul>
      {
        typeFilter.map( (filterName, index) => {
          return (
            <li
              key={index}
              onClick={() => removeTypeFromFilter(filterName)}
            >
              {filterName}
            </li>
          )
        })
      }
    </ul>
  )
};

export default FilterByType;
