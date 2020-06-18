import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {toggleAddLogModal} from '../../actions/modalActions';
import {addLog} from '../../actions/logActions';

import TechniciansOptionsList from '../technician/TechniciansOptionsList';

const AddLogModal = ({
  addLogModal,
  toggleAddLogModal,
  addLog: addLogGlobal
}) => {
  const [input, setInput] = useState({
    technician: '',
    message: '',
    needsAttention: false
  });

  const handleChange = event =>
    setInput({...input, [event.target.name]: event.target.value});

  const addLog = event => {
    event.preventDefault();

    if (!message) return;

    const newLog = {
      technician,
      message,
      needsAttention,
      lastUpdate: Date.now()
    };

    addLogGlobal(newLog);

    setInput({technician: '', message: '', needsAttention: false});

    toggleAddLogModal();
  };

  const {technician, message, needsAttention} = input;

  return (
    <div className={`modal ${addLogModal && 'is-active'}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div className='box'>
          <form onSubmit={addLog}>
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
                        <option value='' disabled>
                          Select
                        </option>
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
                      <i className='fas fa-plus-circle'></i>
                    </span>
                    <span>Add Log</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        onClick={toggleAddLogModal}
        className='modal-close is-large'
      ></button>
    </div>
  );
};

AddLogModal.propTypes = {
  addLogModal: PropTypes.bool.isRequired,
  toggleAddLogModal: PropTypes.func.isRequired,
  addLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  addLogModal: state.modal.addLogModal
});

export default connect(mapStateToProps, {toggleAddLogModal, addLog})(
  AddLogModal
);
