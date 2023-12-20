import React, { useEffect, useState } from 'react';
import '../styles.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const LinksContainer = () => {
  const [links, setLinks] = useState([]);

  // retrieve all links
  async function getAllLinks() {

    try {
      const result = await fetch();
      const data = await result.json();
      setLinks(data);
    } catch (err) {
      console.error("FETCH Error in getAllLinks:", err);
    }

  }

  // refresh new data when link is added (what goes in dependency?)
  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div>

    </div>
  );
}

export default LinksContainer;