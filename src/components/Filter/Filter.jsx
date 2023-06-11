import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInput, FilterLabel } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <FilterLabel htmlFor="1">Find contacts by name</FilterLabel>
      <FilterInput
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        onChange={handleChangeFilter}
      />
    </>
  );
}
