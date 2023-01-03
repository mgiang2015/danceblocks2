import './App.css';
import BlockingList from './components/blockingList/blockingList';
import { Box } from '@mui/material';
import Toolbar from './components/toolbar/toolbar';
import Stage from './components/stage/stage';
import DancerList from './components/dancerList/dancerList';
import { useEffect, useState } from 'react';
import { getWindowDimensions } from '../model/util';
import Stage3d from './components/stage3d/stage3d';

const padding = '0.5em'

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [view3d, setView3d] = useState(false);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggle3d = () => {
    setView3d(!view3d);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: windowDimensions.height }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', height: '200em', border: 1}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', border: 1, width: "100%" }}>
          <Toolbar tools={[{
            label: "View 3D",
            listener: toggle3d
          }]}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1  }}>
          {
            view3d ? <Stage3d /> : <Stage />
          }
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', border: 1, width: "100%" }}>
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
