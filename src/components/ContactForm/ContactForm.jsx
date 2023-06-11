import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/action';

import { Form, Label, InputForm, BtnForm } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const numberPattern = /^\+\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!namePattern.test(name)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!numberPattern.test(number)) {
      alert('Please enter a valid phone number starting with "+".');
      return;
    }

    const isDuplicateNumber = contacts.some(contact => contact.number === number);

    if (isDuplicateNumber) {
      alert('This number already exists in the contacts list.');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name-input">
        Name
        <InputForm
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label htmlFor="number-input">
        Number
        <InputForm
          type="tel"
          name="number"
          required
          pattern="^\+\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and must start with +"
        />
      </Label>
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  );
}
