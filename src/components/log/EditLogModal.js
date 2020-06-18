import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleEditLogModal} from '../../actions/modalActions';
import {clearLogToEdit, updateLog} from '../../actions/logActions';

import TechniciansOptionsList from '../technician/TechniciansOptionsList';

const EditLogModal = ({
  editLogModal,
  toggleEditLogModal,
  logToEdit,
  clearLogToEdit,
  updateLog: updateLogGlobal
}) => {
  const [input, setInput] = useState({
    technician: '',
    message: '',
    needsAttention: false
  });

  useEffect(() => {
    if (logToEdit)
      setInput({
        technician: logToEdit.technician,
        message: logToEdit.message,
        needsAttention: logToEdit.needsAttention
      });
  }, [logToEdit]);

  const handleChange = event =>
    setInput({...input, [event.target.name]: event.target.value});

  const updateLog = event => {
    event.preventDefault();

    updateLogGlobal({
      id: logToEdit.id,
      technician,
      message,
      needsAttention,
      lastUpdate: Date.now()
    });

    clearLogToEdit();

    toggleEditLogModal();
  };

  const closeModal = () => {
    clearLogToEdit();

    toggleEditLogModal();
  };

  const {technician, message, needsAttention} = input;

  return (
    <div className={`modal ${editLogModal && 'is-active'}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div className='box'>
          <form onSubmit={updateLog}>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'></div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control'>
                    <label
                      className={`checkbox has-text-${
                        needsAttention ? 'danger' : 'success'
                      }`}
                    >
                      <input
                        type='checkbox'
                        name='needsAttention'
                        value={needsAttention}
                        checked={needsAttention}
                        onChange={() =>
                          setInput({...input, needsAttention: !needsAttention})
                        }
                      />{' '}
                      Needs Attention
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label htmlFor='message' className='label'>
                  Message
                </label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control'>
                    <input
                      type='text'
                      name='message'
                      value={message}
                      onChange={handleChange}
                      id='message'
                      className='input'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label htmlFor='technician' className='label'>
                  Technician
                </label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='control'>
                    <div className='select'>
                      <select
                        name='technician'
                        value={technician}
                        onChange={handleChange}
                        id='technician'
                      >
                        <TechniciansOptionsList />
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='field'>
              <div className='control'>
                <div className='has-text-right'>
                  <button className='button is-info is-inverted'>
                    <span className='icon'>
                      <i className='fas fa-edit'></i>
                    </span>
                    <span>Update Log</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button onClick={closeModal} className='modal-close is-large'></button>
    </div>
  );
};

EditLogModal.propTypes = {
  editLogModal: PropTypes.bool.isRequired,
  toggleEditLogModal: PropTypes.func.isRequired,
  logToEdit: PropTypes.object,
  clearLogToEdit: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  editLogModal: state.modal.editLogModal,
  logToEdit: state.log.logToEdit
});

export default connect(mapStateToProps, {
  toggleEditLogModal,
  clearLogToEdit,
  updateLog
})(EditLogModal);
