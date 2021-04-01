import React from 'react';
import s from './List.module.css';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.listItem} key={id}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibileContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getVisibileContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
