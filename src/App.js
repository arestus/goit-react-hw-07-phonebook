import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoContact from './components/TodoContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <TodoContact />
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
