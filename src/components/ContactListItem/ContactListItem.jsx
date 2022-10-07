import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ data: { id, name, number }, onClick }) {
  return (
    <li className={s.listItem}>
      <p className={s.pEl}>{name}</p>
      <span className={s.spanEl}>{number}</span>
      <button className={s.btn} type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
