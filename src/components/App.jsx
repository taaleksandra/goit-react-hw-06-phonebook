import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');

  const handleFindContact = value => {
    setFilter(value);
  };

  return (
    <div className={clsx(css.phonebook)}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter onFind={handleFindContact} />
      <ContactList filter={filter} />
    </div>
  );
};
