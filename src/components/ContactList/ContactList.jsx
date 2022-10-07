import PropTypes from 'prop-types';
import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ data, onClick }) => {
  return data.map(data => (
    <ContactListItem key={data.id} data={data} onClick={onClick} />
  ));
  // return data.map(({ id, name, number }) => (
  //   <li key={id} className={s.listItem}>
  //     <p className={s.pEl}>{name}</p>:{' '}
  //     <span className={s.spanEl}>{number}</span>
  //     <button className={s.btn} type="button" onClick={() => removeContact(id)}>
  //       Delete
  //     </button>
  //   </li>
  // ));
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
