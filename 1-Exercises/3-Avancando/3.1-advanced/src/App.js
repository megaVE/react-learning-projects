import './App.css';
import Axis from "./assets/inne_zdjecie_przyklad.jpg";
import State from "./components/State.js";
import Lista from "./components/Lista.js";
import Conditional from "./components/Conditional.js";
import PropsDostaje from "./components/PropsDostaje.js"
import WielePropsowDostaje from './components/WielePropsowDostaje.js';
import Fragment from './components/Fragment.js';
import Dziecko from './components/Dziecko.js';
import ZaczynaDrukarke from './components/ZaczynaDrukarke.js';
import Wiadomosc from './components/Wiadomosc.js';
import WybracWiadomosc from './components/WybracWiadomosc.js';
import { useState } from 'react';

function drukarka(){
  console.log("To druki teskt!");
}

function App() {
  const arrayZolnierzy = [
    {id: 0, dlon: "jeden granat", bron: "ostry bagnet", piers: "silna odwaga"},
    {id: 1, dlon: "ładowany karabin", bron:"gotowy ściskać spust", piers:"ogień"},
  ];

  const [wiadomosc, setWiadomosc] = useState("");

  const zniescWiadomosc = (tekst) => {
    setWiadomosc(tekst);
  };

  return (
    <div className="App">
      <h1>Empty Header</h1>
      {/* Imagem em public*/}
      <img src="./zdjecie_przyklad.jpg" alt="Femboy Party!"/>
      {/* Imagem em assets*/}
      <img src={Axis} alt="Axis Alliance Leaders"/>
      <State/>
      <Lista/>
      <Conditional/>
      <PropsDostaje dane="propszek"/>
      <WielePropsowDostaje dlon="granaty" bron="bagnet" piers="odwaga"/>
      <WielePropsowDostaje dlon="karabin" bron="brakująca amunicji" piers="płomień"/>
      {arrayZolnierzy.map((zolnierz) => (
        <WielePropsowDostaje key={zolnierz.id} dlon={zolnierz.dlon} bron={zolnierz.bron} piers={zolnierz.piers}/>
      ))}
      <Fragment/>
      <Dziecko>
        <p>Oto paragraf dziecka</p>
      </Dziecko>
      <ZaczynaDrukarke drukarka={drukarka}/>
      <br/>
      <Wiadomosc tekst={wiadomosc}/>
      <WybracWiadomosc funkcja={zniescWiadomosc}/>
      <br/>
    </div>
  );
}

export default App;
