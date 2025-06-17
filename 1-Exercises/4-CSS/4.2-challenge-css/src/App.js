import './App.css';
import Cars from './components/Cars.js'

function App() {
  const arrayCarros = [
    {id: 0, cor: "vermelho", placa: "HTB-5160", km:67866},
    {id: 1, cor: "verde", placa: "HVJ-9715", km:0},
    {id: 2, cor: "prata", placa: "MRB-9415", km:11225},
  ];

  return (
    <div className="App">
      <h1>Apresentação de Carros</h1>
      {arrayCarros.map((carro) => (
        <Cars key={carro.id} cor={carro.cor} placa={carro.placa} km={carro.km}/>
      ))}
    </div>
  );
}

export default App;
