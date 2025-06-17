import './App.css';
import {useState} from "react";
import PierwszySkladnik from './components/PierwszySkladnik.js';

function App() {
  const [kolorTekst, setkolorTekst] = useState(true);

  return (
    <div className="App">
      <h2>Jakiś Tytuł</h2>
      <p>Jakiś paragraf</p>
      <PierwszySkladnik class="klasaPierszegoSkladniku"/>
      <p style={{fontSize:"1.4rem", backgroundColor:"yellow"}}>Paragraf z Inline</p>
      <p style={kolorTekst === true ? {backgroundColor: "yellow", color: "orange", fontSize:"1.4rem"} : {backgroundColor: "green", color: "blue", fontSize:"1.4rem"}}>Paragraf z innym Inline</p>
      <div>
        <button onClick={ () => {setkolorTekst(!kolorTekst)}}>Zmień Kolor</button>
      </div>
    </div>
  );
}

export default App;
