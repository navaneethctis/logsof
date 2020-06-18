import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';

import {toggleEditLogModal} from '../../actions/modalActions';
import {removeLog, setLogToEdit} from '../../actions/logActions';

const LogItem = ({
  toggleEditLogModal,
  log,
  removeLog: removeLogGlobal,
  setLogToEdit
}) => {
  const showEditLogModal = event => {
    event.preventDefault();

    setLogToEdit(log);

    toggleEditLogModal();
  };

  const removeLog = event => {
    event.preventDefault();

    removeLogGlobal(id);
  };

  const {id, message, technician, needsAttention, lastUpdate} = log;

  return (
    <tr>
      <th>{id}</th>
      <td>
        <a href='/' onClick={showEditLogModal}>
          {message}
        </a>
      </td>
      <td>{technician}</td>
      <td className={`has-text-${needsAttention ? 'danger' : 'success'}`}>
        {needsAttention ? 'Yes' : 'No'}
      </td>
      <td>
        <Moment format='MMMM DD YYYY, hh:mm A'>{new Date(lastUpdate)}</Moment>
      </td>
      <td>
        <a href='/' onClick={removeLog} className='has-text-danger'>
          <span className='icon'>
            <i className={`fas fa-minus-circle`}></i>
          </span>
        </a>
      </td>
    </tr>
  );
};

LogItem.propTypes = {
  toggleEditLogModal: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired,
  removeLog: PropTypes.func.isRequired,
  setLogToEdit: PropTypes.func.isRequired
};

export default connect(null, {toggleEditLogModal, removeLog, setLogToEdit})(
  LogItem
);
