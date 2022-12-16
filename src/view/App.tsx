import './App.css';
import { useAppSelector } from '../control/hooks'
import BlockingList from './components/blockingList/blockingList';
import { Box } from '@mui/material';
import Toolbar from './components/toolbar/toolbar';
import Stage from './components/stage/stage';
import DancerList from './components/dancerList/dancerList';
import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const project = useAppSelector(state => state.project);
  project.getBlockings().map((blocking) => {
    console.log(blocking);
  })
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: windowDimensions.height }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 5, border: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: 1 }}>
          <Toolbar />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 4, border: 1 }}>
          <Stage blocking={project.getCurrentBlocking()}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: 1 }}>
          <DancerList blocking={project.getCurrentBlocking()} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, border: 1 }}>
        <BlockingList project={project} />
      </Box>
    </Box>
  );
}

export default App;
