import { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm(onSubmit) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const {name: inputName, value: inputValue} = e.currentTarget;
switch inputName{
  case "name":
    setName(inputValue);
    return;
    case "number":
      setNumber(inputValue);
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

// export class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;

//     this.props.onSubmit(name, number);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label htmlFor="name" className={s.label}>
//           Name
//         </label>
//         <input
//           className={s.input}
//           id="name"
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={this.handleInputChange}
//         />
//         <label htmlFor="number" className={s.label}>
//           Phone number
//         </label>
//         <input
//           className={s.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           value={number}
//           onChange={this.handleInputChange}
//           required
//         />
//         <button type="submit" className={s.submitBtn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
