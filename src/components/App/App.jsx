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



// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from 'redux/store';

// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import { Container, Title } from './App.styled';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Container>
//           <Title>Phonebook</Title>
//           <ContactForm />
//           <Title>Contacts</Title>
//           <Filter />
//           <ContactList />
//         </Container>
//       </PersistGate>
//     </Provider>
//   );
// }
