import './App.css';
import MojFormularz from './components/MojFormularz';

function App() {
  return (
    <div className="App">
      <MojFormularz defaultForm={{kraj: "Polska", miasto: "Wizna"}}/>
    </div>
  );
}

export default App;
