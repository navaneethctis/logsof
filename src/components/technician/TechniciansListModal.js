import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleTechniciansListModal} from '../../actions/modalActions';
import {getTechnicians} from '../../actions/technicianActions';

import TechnicianListItem from './TechnicianListItem';

const TechniciansListModal = ({
  techniciansListModal,
  toggleTechniciansListModal,
  technicians,
  getTechnicians
}) => {
  useEffect(() => {
    getTechnicians();

    // eslint-disable-next-line
  }, []);

  return (
    <div className={`modal ${techniciansListModal && 'is-active'}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div className='box'>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {technicians &&
                technicians.map(technician => (
                  <TechnicianListItem
                    key={technician.id}
                    technician={technician}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={toggleTechniciansListModal}
        className='modal-close is-large'
      ></button>
    </div>
  );
};

TechniciansListModal.propTypes = {
  techniciansListModal: PropTypes.bool.isRequired,
  toggleTechniciansListModal: PropTypes.func.isRequired,
  technicians: PropTypes.array,
  getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techniciansListModal: state.modal.techniciansListModal,
  technicians: state.technician.technicians
});

export default connect(mapStateToProps, {
  toggleTechniciansListModal,
  getTechnicians
})(TechniciansListModal);
