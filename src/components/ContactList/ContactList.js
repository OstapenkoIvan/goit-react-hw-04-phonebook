import PropTypes from 'prop-types';
import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ data, onClick }) => {
  const removeContact = id => {
    onClick(id);
  };

  return data.map(({ id, name, number }) => (
    <li key={id} className={s.listItem}>
      <p className={s.pEl}>{name}</p>:{' '}
      <span className={s.spanEl}>{number}</span>
      <button className={s.btn} type="button" onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  ));
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
