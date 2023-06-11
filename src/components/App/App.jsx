import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Container, Title } from './App.styled';

export default function App() {
    return (
          <Container>
            <Title>Phonebook</Title>
            <ContactForm />
            
            <Title>Contacts</Title>
            <Filter />
            <ContactList />
          </Container>
    );
  }
