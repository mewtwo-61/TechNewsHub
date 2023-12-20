import React, { useState } from 'react';
import LinksContainer from './LinksContainer.jsx';
import SearchBar from './SearchBar.jsx';
import AddLinkModal from './AddLinkModal.jsx';
import FilterByTag from './FilterByTag.jsx';
import '../styles.css';

const MainDashboard = () => {

  return (
    <div className='main-container'>
      {/* <SearchBar /> */}
      <FilterByTag />
      <AddLinkModal />
      <LinksContainer />
    </div>
  );
}

export default MainDashboard;