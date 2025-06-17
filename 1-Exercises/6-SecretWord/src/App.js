import './App.css';
import {useState, useEffect, useCallback} from 'react';
import WstepnyEkran from './components/WstepnyEkran';
import EkranGrowy from './components/EkranGrowy';
import EkranKoncowy from './components/EkranKoncowy';
import {listaSlow} from './data/slowa.js';

const fazy = [
  {id: 0, name: "poczatek"},
  {id: 1, name: "gra"},
  {id: 2, name: "koniec"},
];

const szansy = 5;
const punkty = 1;

function App() {
  const [obecnaFaza,setObecnaFaza] = useState(fazy[0].name);
  const slowa = listaSlow;

  const [wybraneSlowo, setWybraneSlowo] = useState("");
  const [wybranaKategoria, setWybranaKategoria] = useState("");
  const [litery, setLitery] = useState([]);

  const [wyprobowaneLitery, setWyprobowaneLitery] = useState([]);
  const [bledneLitery, setBledneLitery] = useState([]);

  const [proby, setProby] = useState(szansy);
  const [wynik, setWynik] = useState(0);

  const wybieraSlowoKategorie = useCallback(() => {
    const kategorie = Object.keys(slowa);
    const kategoria = kategorie[Math.floor(Math.random() * Object.keys(kategorie).length)];
    console.log(kategoria);

    const slowo = slowa[kategoria][Math.floor(Math.random() * slowa[kategoria].length)];
    console.log(slowo);

    return {slowo, kategoria};
  },[slowa]);


  const zaczynaGre = useCallback(() => {
    usunieStanyLiter();
    const {slowo, kategoria} = wybieraSlowoKategorie();
    let literySlowa = slowo.split("");
    console.log(slowo, kategoria, literySlowa);

    setWybraneSlowo(slowo);
    setWybranaKategoria(kategoria);
    setLitery(literySlowa);

    setObecnaFaza(fazy[1].name);
  }, [wybieraSlowoKategorie]);

  const sprawdzaLitere = (litera) => {
    const znormalizowanaLitera = litera.toLowerCase();

    if(wyprobowaneLitery.includes(znormalizowanaLitera) || bledneLitery.includes(znormalizowanaLitera)){return;}

    if(litery.includes(znormalizowanaLitera)){
      setWyprobowaneLitery((actualWyprobowaneLitery) => [...actualWyprobowaneLitery, znormalizowanaLitera]);
    } else {
      setBledneLitery((actualBledneLitery) => [...actualBledneLitery, znormalizowanaLitera]);
      setProby((actualProby) => actualProby-1);
    }


    console.log(litera);
  }

  const usunieStanyLiter = () => {
    setWyprobowaneLitery([]);
    setBledneLitery([]);
  }

  useEffect(() => {
    if(proby <= 0){
      usunieStanyLiter();

      setObecnaFaza(fazy[2].name);
    }
  }, [proby]);

  useEffect(() => {
      const jedyneLitery = [...new Set(litery)];

      if(wyprobowaneLitery.length === jedyneLitery.length && obecnaFaza === "gra"){
        setWynik((actualWynik) => (actualWynik += punkty));
        zaczynaGre();
      }

      console.log(jedyneLitery);
  }, [wyprobowaneLitery, litery, zaczynaGre]);

  console.log(bledneLitery);
  console.log(wyprobowaneLitery);

  const skonczGre = () => {
    usunieStanyLiter();
    setObecnaFaza(fazy[2].name);
  }

  const sprobujePonownie = () => {
    setWynik(0);
    setProby(szansy);

    setObecnaFaza(fazy[0].name);
  }

  console.log(listaSlow);

  return (
    <div className="App">
      {obecnaFaza === "poczatek" && <WstepnyEkran zaczynaGre={zaczynaGre}/>}
      {obecnaFaza === "gra" && <EkranGrowy
      skonczGre={skonczGre}
      sprawdzaLitere={sprawdzaLitere}
      wybraneSlowo={wybraneSlowo}
      wybranaKategoria={wybranaKategoria}
      litery={litery}
      wyprobowaneLitery={wyprobowaneLitery}
      bledneLitery={bledneLitery}
      proby={proby}
      wynik={wynik}
      />}
      {obecnaFaza === "koniec" && <EkranKoncowy
      sprobujePonownie={sprobujePonownie}
      wynik={wynik}
      />}
    </div>
  );
}

export default App;
