import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <label>Filter</label>
      <input
        style={{ borderRadius: '4px' }}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
};
