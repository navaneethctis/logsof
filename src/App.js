import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

import ActionsMenu from './components/layout/ActionsMenu';
import Navbar from './components/layout/Navbar';
import AddLogModal from './components/log/AddLogModal';
import EditLogModal from './components/log/EditLogModal';
import LogsList from './components/log/LogsList';
import AddTechnicianModal from './components/technician/AddTechnicianModal';
import TechniciansListModal from './components/technician/TechniciansListModal';

const App = () => {
  return (
    <Provider store={store}>
      <AddLogModal />
      <EditLogModal />
      <AddTechnicianModal />
      <TechniciansListModal />
      <Navbar />
      <ActionsMenu />
      <LogsList />
    </Provider>
  );
};

export default App;
