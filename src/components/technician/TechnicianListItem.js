import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {removeTechnician} from '../../actions/technicianActions';

const TechnicianListItem = ({
  technician,
  removeTechnician: removeTechnicianGlobal
}) => {
  const {id, firstName, lastName} = technician;

  const removeTechnician = event => {
    event.preventDefault();

    removeTechnicianGlobal(id);
  };

  return (
    <tr>
      <th>{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <a href='/' onClick={removeTechnician} className='has-text-danger'>
          <span className='icon'>
            <i className='fas fa-minus-circle'></i>
          </span>
        </a>
      </td>
    </tr>
  );
};

TechnicianListItem.propTypes = {
  technician: PropTypes.object.isRequired,
  removeTechnician: PropTypes.func.isRequired
};

export default connect(null, {removeTechnician})(TechnicianListItem);
