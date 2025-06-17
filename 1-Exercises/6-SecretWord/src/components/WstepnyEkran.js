import './WstepnyEkran.css';

const WstepnyEkran = ({zaczynaGre}) => {
  return (<div className="wstepny_ekran">
    <h1>Sekretne Słowo</h1>
    <p>Kliknij, żeby zacznąć grać</p>
    <button onClick={zaczynaGre}>Zaczynaj Grę</button>
  </div>)
}

export default WstepnyEkran