import './EkranKoncowy.css';

const EkranKoncowy = ({sprobujePonownie, wynik}) => {
  return (
    <div>
      <h1>Koniec Gry!</h1>
      <h2>Twój wynik był: <span>{wynik}</span></h2>
      <button onClick={sprobujePonownie}>Sprobuj Ponownie</button>

    </div>
  );
};

export default EkranKoncowy;