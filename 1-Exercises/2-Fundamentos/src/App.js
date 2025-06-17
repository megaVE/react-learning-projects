// styles
import './App.css';
// components
import PierwszySkladnik from './components/PierwszySkladnik';
import DrugiSkladnikJavaScriptowy from './components/DrugiSkladnikJavaScriptowy';
import TrzeciSkladnikSyn from './components/TrzeciSkladnikSyn';
import CzwartySkladnikWydarzen from './components/CzwartySkladnikWydarzen';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PierwszySkladnik/>
      <DrugiSkladnikJavaScriptowy/>
      <TrzeciSkladnikSyn/>
      <CzwartySkladnikWydarzen/>
      <Challenge/>
    </div>
  );
}

export default App;
