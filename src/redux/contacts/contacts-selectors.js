import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.contacts;

// const getVisibileContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

const getVisibileContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getAllContacts,
  getVisibileContacts,
};
