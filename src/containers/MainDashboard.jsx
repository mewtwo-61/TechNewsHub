import React, { useState } from 'react';
import LinksContainer from './LinksContainer.jsx';
import SearchBar from './SearchBar.jsx';
import AddLinkModal from './AddLinkModal.jsx';
import '../styles.css';

const MainDashboard = () => {

  return (
    <div className='main-container'>
      {/* <SearchBar /> */}
      <AddLinkModal />
      <LinksContainer />
    </div>
  );
}

export default MainDashboard;