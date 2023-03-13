import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../ContactList/ContactList.module.css';

import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactList = ({ filter }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDelete = evt => {
    const deletingContactId = evt.target.id;

    dispatch(deleteContact(deletingContactId.id));
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

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
