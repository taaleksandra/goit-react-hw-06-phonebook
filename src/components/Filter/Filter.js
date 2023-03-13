import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import css from '../Filter/Filter.module.css';

import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const searchingName = evt.target.value;
    dispatch(filterContact(searchingName));
  };

  return (
    <div className={clsx(css.filter)}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        onChange={handleChange}
        id="filter"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};
