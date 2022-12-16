import './App.css';
import { useAppSelector } from '../control/hooks'
import BlockingList from './components/blockingList/blockingList';
import { Box } from '@mui/material';
import Toolbar from './components/toolbar/toolbar';
import Stage from './components/stage/stage';
import DancerList from './components/dancerList/dancerList';

function App() {
  const project = useAppSelector(state => state.project);
  project.getBlockings().map((blocking) => {
    console.log(blocking);
  })
  
  return (
    <Box>
      <Box>
        <Toolbar />
        <Stage blocking={project.getCurrentBlocking()}/>
        <DancerList blocking={project.getCurrentBlocking()} />
      </Box>
      <BlockingList project={project} />
    </Box>
  );
}

export default App;
