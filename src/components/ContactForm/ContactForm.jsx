import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Label, InputForm, BtnForm } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const initialState = { name: '', number: '' };
  const [contact, setContact] = useState(initialState);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'name') {
      const namePattern =
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

      if (!namePattern.test(value)) {
        e.target.setCustomValidity(
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        );
      } else {
        e.target.setCustomValidity('');
      }
    }

    if (name === 'number') {
      const numberPattern =
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
      if (!numberPattern.test(value)) {
        e.target.setCustomValidity(
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        );
      } else {
        e.target.setCustomValidity('');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(({ number }) => number === contact.number)) {
      toast.error(`${contact.number} is already in contacts`);
      return;
    }

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
      <ToastContainer />
    </Form>
  );
}
