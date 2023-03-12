import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../Filter/Filter.module.css';

export const Filter = ({ onFind }) => {
  const handleChange = evt => {
    let searchingName = evt.target.value;
    onFind(searchingName);
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

Filter.propTypes = {
  onFind: PropTypes.func,
};
