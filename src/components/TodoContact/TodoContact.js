import React, { Component } from 'react';
import s from './TodoContact.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

class TodoContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={s.titleText}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={s.headStyle}>
          <label className={s.labelStyle}>
            Name
            <input
              className={s.inputStyle}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.labelStyle}>
            Number
            <input
              className={s.inputStyle}
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(TodoContact);
