import './App.css';
import { useAppSelector } from '../control/hooks'
import BlockingList from './components/blockingList/blockingList';

function App() {
  const project = useAppSelector(state => state.project);
  project.getBlockings().map((blocking) => {
    console.log(blocking);
  })
  
  return (
    <BlockingList project={project}></BlockingList>
  );
}

export default App;
