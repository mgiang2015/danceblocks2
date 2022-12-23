import './App.css';
import BlockingList from './components/blockingList/blockingList';
import { Box } from '@mui/material';
import Toolbar from './components/toolbar/toolbar';
import Stage from './components/stage/stage';
import DancerList from './components/dancerList/dancerList';
import { useEffect, useState } from 'react';
import { getWindowDimensions } from '../model/util';

const padding = '0.5em'

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: windowDimensions.height }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '200em', border: 1}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: 1 }}>
          <Toolbar />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 7, border: 1  }}>
          <Stage />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: 1 }}>
          <DancerList />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', border: 1, paddingLeft: padding}}>
        <BlockingList />
      </Box>
    </Box>
  );
}

export default App;
