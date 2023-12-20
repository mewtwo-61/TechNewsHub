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
  // modal click function to open and close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const defaultValues = {
    title: '',
    source: '',
    link: ''
  };

  // set values in form
  const [values, setValues] = useState(defaultValues);

  // handle click event for onChange
  function handleChange(val) {
    setValues(val);
  };


  // const [title, setTitle] = useState('');
  // const [source, setSource] = useState('');
  // const [link, setLink] = useState('');

  async function addLink() {
    try {
      console.log('BODY:', values.link, values.title)
      const result = await fetch('/api/display/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: values.title,
          link: values.link,
        })
      });
      const data = await result.json();
      handleClose();
      console.log('Hooray! You successfully added a link to your dashboard.')
    } catch (err) {
      console.error("FETCH Error in addLink:", err);
    }
  }
  
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
                <TextField 
                  className="outlined-basic" 
                  label="Title" 
                  variant="outlined"
                  value={ values.title }
                  onChange={(e) =>
                    handleChange({ ...values, title: e.target.value })
                  }
                />
                <TextField 
                  className="outlined-basic" 
                  label="Source" 
                  variant="outlined" 
                  value={ values.source }
                  onChange={(e) =>
                    handleChange({ ...values, source: e.target.value })
                  }
                />
                <TextField 
                  className="outlined-basic" 
                  label="Link" 
                  variant="outlined" 
                  value={ values.link }
                  onChange={(e) =>
                    handleChange({ ...values, link: e.target.value })
                  }
                />

                <Button variant="contained" onClick={ addLink }>Done</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    );
}

export default AddLinkModal;