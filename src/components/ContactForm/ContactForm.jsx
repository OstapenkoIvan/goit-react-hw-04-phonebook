import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name: inputName, value: inputValue } = e.currentTarget;
    switch (inputName) {
      case 'name':
        setName(inputValue);
        return;
      case 'number':
        setNumber(inputValue);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor="number" className={s.label}>
        Phone number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleInputChange}
        required
      />
      <button type="submit" className={s.submitBtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  children: PropTypes.func,
};

export default ContactForm;
