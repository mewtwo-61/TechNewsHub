import React, { useEffect, useState } from 'react';
import '../styles.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddLinkModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div className='add-link'>
        <Button onClick={handleOpen}>Add Link</Button>
        <Modal
          open={ open }
          onClose={ handleClose }
        aria-labelledby='add-link-modal'
        aria-describedby='Add a new link in this modal'
        >
          <Box sx={ style }>
            <Typography id="modal-title" variant="h6" component="h2">
              Add Link
            </Typography>
            <br />
            <Stack spacing={2}>
                <TextField className="outlined-basic" label="Title" variant="outlined" />
                <TextField className="outlined-basic" label="Source" variant="outlined" />
                <TextField className="outlined-basic" label="Link" variant="outlined" />
                <Button variant="contained">Done</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    );
}

export default AddLinkModal;