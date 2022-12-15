import './App.css';
import { useAppSelector } from '../control/hooks'

function App() {
  const project = useAppSelector(state => state.project);
  project.getBlockings().map((blocking) => {
    console.log(blocking);
  })
  
  return (
    <h1>HelloWorld</h1>
  );
}

export default App;
