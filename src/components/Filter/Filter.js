import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, ChangeFilter } from '../../redux/contacts';
// import * as contactsActions from '../../redux/contacts/contacts-actions';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

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
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(ChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
