import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleAddTechnicianModal} from '../../actions/modalActions';
import {addTechnician} from '../../actions/technicianActions';

const AddTechnicianModal = ({
  addTechnicianModal,
  toggleAddTechnicianModal,
  addTechnician: addTechnicianGlobal
}) => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = event =>
    setInput({...input, [event.target.name]: event.target.value});

  const addTechnician = event => {
    event.preventDefault();

    addTechnicianGlobal({firstName, lastName});

    setInput({firstName: '', lastName: ''});

    toggleAddTechnicianModal();
  };

  const {lastName, firstName} = input;

  return (
    <div className={`modal ${addTechnicianModal && 'is-active'}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div className='box'>
          <form onSubmit={addTechnician}>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label htmlFor='firstName' className='label'>
                  First Name
                </label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control'>
                    <input
                      type='text'
                      name='firstName'
                      value={firstName}
                      onChange={handleChange}
                      id='firstName'
                      className='input'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label htmlFor='lastName' className='label'>
                  Last Name
                </label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control'>
                    <input
                      type='text'
                      name='lastName'
                      value={lastName}
                      onChange={handleChange}
                      id='lastName'
                      className='input'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <div className='has-text-right'>
                  <button className='button is-success is-inverted'>
                    <span className='icon'>
                      <i className='fas fa-plus-circle'></i>
                    </span>
                    <span>Add Technician</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        onClick={toggleAddTechnicianModal}
        className='modal-close is-large'
      ></button>
    </div>
  );
};

AddTechnicianModal.propTypes = {
  addTechnicianModal: PropTypes.bool.isRequired,
  toggleAddTechnicianModal: PropTypes.func.isRequired,
  addTechnician: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  addTechnicianModal: state.modal.addTechnicianModal
});

export default connect(mapStateToProps, {
  toggleAddTechnicianModal,
  addTechnician
})(AddTechnicianModal);
