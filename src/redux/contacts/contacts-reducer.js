import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  ChangeFilter,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from './contacts-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
});

const filter = createReducer('', {
  [ChangeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter, loading });
