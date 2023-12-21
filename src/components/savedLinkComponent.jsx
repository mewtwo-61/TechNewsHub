import React from 'react';
import { Box, ThemeProvider, Shadows } from '@mui/system';


const savedLink = ({created_at, title, website, link}) => {
  return (
    <div>
      <Box
        sx={{
          width: 1000,
          height: 120,
          backgroundColor: '#4fc3f7',
          borderRadius: 4,
          boxShadow: 2,
        }}
      >
        <div>
          <p className='dateDisplay'>{created_at}</p>
          <p className='titleDisplay'>{title} | {website}</p>
          <p className='linkDisplay'><a href="url">{link}</a></p>
        </div>
      </Box>
    </div>
  );
};

export default savedLink;