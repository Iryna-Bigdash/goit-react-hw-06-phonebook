import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/action';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// import PropTypes from 'prop-types';
// import {ContactsList, ContactsItem, ContactsContainer, PhoneContainer, DeletContactBtn} from './ContactList.styled';

// const ContactList = ({contacts, onDeletContact}) => (
// <ContactsList>
// {contacts.map(({id, name, number}) => (
// <ContactsItem key={id}>
//     <ContactsContainer>{name}: <PhoneContainer>{number}</PhoneContainer>
//     </ContactsContainer>
//     <DeletContactBtn onClick={()=>onDeletContact(id)}>Delete</DeletContactBtn>
// </ContactsItem>
// ))}
// </ContactsList>
// );

// export default ContactList;

// ContactList.protoType = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired).isRequired,
//   onDeletContact: PropTypes.func.isRequired,
// }