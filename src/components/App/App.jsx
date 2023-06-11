import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact, setFilter } from './store';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

// const App = () => {
//   const contacts = useSelector((state) => state.contacts);
//   const filter = useSelector((state) => state.filter);
//   const dispatch = useDispatch();

//   const formSubmitHandler = ({ name, number }) => {
//     const contact = {
//       id: Date.now().toString(),
//       name,
//       number,
//     };
//     const contactNames = contacts.map((contact) => contact.name.toLowerCase());
//     if (contactNames.includes(name.toLowerCase())) {
//       alert(`${name} is already in contacts`);
//     } else {
//       dispatch(addContact(contact));
//     }
//   };

//   const deleteContactHandler = (id) => {
//     dispatch(deleteContact(id));
//   };

//   const filterChangeHandler = (event) => {
//     dispatch(setFilter(event.target.value));
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={formSubmitHandler} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={filterChangeHandler} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContactHandler} />
//     </div>
//   );
// };

// export default App;
