import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import {
  ContactsList,
  ContactsItem,
  ContactsContainer,
  PhoneContainer,
  DeletContactBtn,
} from './ContactList.styled';

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
          <DeletContactBtn onClick={() => dispatch(removeContact(id))}>
            Delete
          </DeletContactBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
