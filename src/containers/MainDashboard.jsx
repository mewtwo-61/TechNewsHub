import React, { useState } from 'react';
import LinksContainer from './LinksContainer.jsx';
import SearchBar from './SearchBar.jsx';
import AddLinkModal from './AddLinkModal.jsx';
import FilterByTag from './FilterByTag.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles.css';

const MainDashboard = () => {

  return (
    <div className='login-wrapper'>
    {/* <div className='main-container'> */}
      <Typography variant='h2' id='welcome-header'>Welcome to Tech News Hub</Typography>
      <br />
      <Box >
        {/* <SearchBar /> */}
        <FilterByTag />
        <AddLinkModal />
        <LinksContainer />
      </Box>
    {/* </div> */}
    </div>
  );
}

export default MainDashboard;