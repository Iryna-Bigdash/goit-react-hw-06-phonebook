import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from 'redux/action';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer(initialState.filter, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});

export { contactsReducer, filterReducer };