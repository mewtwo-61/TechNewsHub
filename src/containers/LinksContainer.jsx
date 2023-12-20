import React, { useEffect, useState } from 'react';
import '../styles.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import savedLink from '../components/savedLinkComponent.jsx';

const LinksContainer = () => {
  const [links, setLinks] = useState([]);

  // retrieve all links
  async function getAllLinks() {

    try {
      const result = await fetch('http://localhost:3020/api/display/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await result.json();
      setLinks(data);
    } catch (err) {
      console.error("FETCH Error in getAllLinks:", err);
    }

  }

  // refresh new data when link is added (links goes in dependency?)
  useEffect(() => {
    getAllLinks();
  }, [links]);

  // map data to link components and put in list array to put in returned component below
  const listOfLinks = links.map(el => {
    <savedLink />
  })

  return (
    <div>
      { listOfLinks }
    </div>
  );
}

export default LinksContainer;