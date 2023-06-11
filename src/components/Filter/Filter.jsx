import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/action';
import { FilterInput, FilterLabel } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterLabel>
    <FilterInput type="text" value={filter} onChange={handleChange} placeholder="Filter contacts" />
    </FilterLabel>
  );
}

// import PropTypes from 'prop-types';
// import { FilterLabel, FilterInput } from './Filter.styled';
 
// const Filter = ({ value, onChange }) => (
//   <FilterLabel>
//     Find contacts by name
//     <FilterInput type="text" value={value} onChange={onChange} />
//   </FilterLabel>
// );

// export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// }