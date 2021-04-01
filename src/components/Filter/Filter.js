import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <div className={s.filterTitle}>
    <h2>Contacts</h2>
    <label className={s.labelStyle}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.ChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
