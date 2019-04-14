import React from 'react';
import { connect } from "react-redux";
import { Tag } from 'antd';
import { removeTypeFromFilter } from "./actions";

const FilterByType = ({ typeFilter, removeTypeFromFilter }) => (
  <>
    {
      typeFilter.map(filterName => (
        <Tag
          key={filterName}
          closable
          onClose={() => removeTypeFromFilter(filterName)}
        >
          {filterName}
        </Tag>
      ))
    }
  </>
);

const mapStateToProps = state => ({
  typeFilter: state.pokemons.typeFilter,
});

const mapDispatchToProps = dispatch => ({
  removeTypeFromFilter: (typeName) => dispatch(removeTypeFromFilter(typeName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByType);
