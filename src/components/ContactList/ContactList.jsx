import { ContactsList, ContactsItem, ContactsContainer, PhoneContainer, DeletContactBtn } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  return (
    <ContactsList>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsContainer>{name}:</ContactsContainer>
          <PhoneContainer>{number}</PhoneContainer>
          <DeletContactBtn onClick={() => dispatch(removeContact(id))}>Delete</DeletContactBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;







// import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from 'redux/contactsSlice';

// export default function ContactList() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);

//   console.log(contacts)

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleDelete = contactId => {
//     dispatch(removeContact(contactId));
//   };

//   return (
//     <ul>
//       {filteredContacts.map(contact => (
//         <li key={contact.id}>
//           <span>{contact.name}</span>
//           <span>{contact.number}</span>
//           <button onClick={() => handleDelete(contact.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

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