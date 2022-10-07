import { nanoid, save, load, Filter } from '../utils/reexport';

import React, { useState, useEffect } from 'react';

import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = load('contacts');
    storedContacts && setContacts(storedContacts);
  }, []);

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const removeContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <h1 className={s.mainHeader}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <section>
        <h2 className={s.addHeader}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ul className={s.list}>
          <ContactList data={visibleContacts} onClick={removeContact} />
        </ul>
      </section>
    </Container>
  );
}

export default App;
