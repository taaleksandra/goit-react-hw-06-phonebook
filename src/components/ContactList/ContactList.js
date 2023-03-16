import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from '../ContactList/ContactList.module.css';

import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = evt => {
    const deletingContactId = evt.target.id;
    dispatch(deleteContact(deletingContactId));
  };

  useEffect(() => {
    const contactsStringified = JSON.stringify(contacts);
    window.localStorage.setItem('contacts', contactsStringified);
  }, [contacts]);

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={contact.id} className={clsx(css.contact)}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              id={contact.id}
              type="button"
              onClick={handleDelete}
              className={clsx(css.deleteBtn)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
