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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>Introducing wave.js: Accessible Video Live Streaming for Node-Based Dev Environments | Medium</p>
          <p className='linkDisplay'><a href="url">https://medium.com/@wavejs/introducing-wave-js-accessible-video-live-streaming-for-node-based-dev-environments-bce898a61732</a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>Ludwig VS: The Accessibility Tool You Didn’t Know You Needed | Medium</p>
          <p className='linkDisplay'>https://medium.com/@connallyjae/ludwig-vs-the-accessibility-tool-you-didnt-know-you-needed-25b59bb8c3fa<a href="url"></a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>The New Zustand Dev Tool | Medium</p>
          <p className='linkDisplay'>https://medium.com/@itsnancyhuang/the-new-zustand-dev-tool-15613144b585<a href="url"></a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>KubeVX: An Intuitive Kubernetes DevTool | Medium</p>
          <p className='linkDisplay'>https://medium.com/@kubevx123/kubevx-an-intuitive-kubernetes-devtool-39cafbb2fca9<a href="url"></a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>Introducing kubik | Medium</p>
          <p className='linkDisplay'>https://medium.com/@kubikkubernetes/introducing-kubik-51bed25777dd<a href="url"></a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>FEO Fig: Optimizing the Web’s Front End with Figs | Medium</p>
          <p className='linkDisplay'>https://medium.com/@zackrauzi/feo-fig-optimizing-the-webs-front-end-with-figs-6cecc316234b<a href="url"></a></p>
      </div>
      </Box>
  </div>

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
          <p className='dateDisplay'>12-20-2023</p>
          <p className='titleDisplay'>React Query Rewind: Time Travel Debugging Made Simple | Medium</p>
          <p className='linkDisplay'>https://medium.com/@teeringe/react-query-rewind-time-travel-debugging-made-simple-46aaeeafd497<a href="url"></a></p>
      </div>
      </Box>
  </div>
    </div>
  );
}

export default LinksContainer;