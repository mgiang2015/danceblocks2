import './App.css';
import BlockingList from './components/blockingList/blockingList';
import Toolbar from './components/toolbar/toolbar';
import Stage from './components/stage/stage';
import DancerList from './components/dancerList/dancerList';
import { useEffect } from 'react';
import Stage3d from './components/stage3d/stage3d';
import { useAppSelector } from '../control/hooks';
import { selectView3d } from '../control/stateSlice';

function App() {
  const view3d = useAppSelector(selectView3d);
  useEffect(() => {
    document.title = 'Danceblocks 2';
  }, []);

  return (
    <div className="App">
      <div className="ToolbarStageDancerList">
        <div className="Toolbar">
          <Toolbar />
        </div>
        <div className="Stage">
          {
            view3d ? <Stage3d /> : <Stage />
          }
        </div>
        <div className='DancerList'>
          <DancerList />
        </div>
      </div>
      <div>
        <BlockingList />
      </div>
    </div>
  );
}

export default App;
