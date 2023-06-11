import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { Form, Label, InputForm, BtnForm } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const initialState = { name: '', number: '' };
  const [contact, setContact] = useState(initialState);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    if (contacts.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    e.preventDefault();
    dispatch(
      addContact({ id: nanoid(), name: contact.name, number: contact.number })
    );
    setContact(initialState);
  };

  const idName = nanoid();
  const idNumber = nanoid();
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={idName}>Name</Label>
      <InputForm
        id={idName}
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <Label htmlFor={idNumber}>Number</Label>
      <InputForm
        id={idNumber}
        type="tel"
        name="number"
        value={contact.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <BtnForm type="submit" disabled={!contact.name || !contact.number}>
        Add contact
      </BtnForm>
    </Form>
  );
}






// // components/ContactForm/ContactForm.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { addContact } from 'redux/contactsSlice';

// import { Form, Label, InputForm, BtnForm } from './ContactForm.styled';

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.contacts);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const number = e.target.number.value;

//     const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
//     const numberPattern = /^\+\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

//     if (!namePattern.test(name)) {
//       alert('Please enter a valid name.');
//       return;
//     }

//     if (!numberPattern.test(number)) {
//       alert('Please enter a valid phone number starting with "+".');
//       return;
//     }

//     const isDuplicateNumber = contacts.some(contact => contact.number === number);

//     if (isDuplicateNumber) {
//       alert('This number already exists in the contacts list.');
//       return;
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     dispatch(addContact(contact));
//     e.target.reset();
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label htmlFor="name-input">
//         Name
//         <InputForm
//           type="text"
//           name="name"
//           required
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         />
//       </Label>
//       <Label htmlFor="number-input">
//         Number
//         <InputForm
//           type="tel"
//           name="number"
//           required
//           pattern="^\+\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and must start with +"
//         />
//       </Label>
//       <BtnForm type="submit">Add contact</BtnForm>
//     </Form>
//   );
// }
