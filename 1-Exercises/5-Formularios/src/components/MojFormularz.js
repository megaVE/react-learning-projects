import './MojFormularz';
import {useState} from 'react';

const MojFormularz = ({defaultForm}) => {
    const [kraj,setKraj] = useState(defaultForm ? defaultForm.kraj: "");
    const [miasto,setMiasto] = useState(defaultForm ? defaultForm.miasto : "");
    const [opis, setOpis] = useState("");
    const [rola,setRola] = useState("");

    const handleImie = (e) => {
      console.log(`Imię: ${e.target.value}`);
    }
  
    const handleNazwisko = (e) => {
      console.log(`Nazwisko: ${e.target.value}`);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Wysłany Formularz!");
      setKraj("");
      setMiasto("");
    }

    console.log(kraj);
    console.log(miasto);
    console.log(rola);
    console.log(opis);

  return (<div>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="imie_form">Imię: </label>
            <input type="text" name="imie_form" placeholder="Napisz swoje imię" onChange={handleImie}/>
        </div>
        <div>
            <span>Nazwisko: </span>
            <input type="text" name="nazwisko_form" placeholder="Napisz swoje nazwisko" onChange={handleNazwisko}/>
        </div>
    </form>
    <br/>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="imie_form">Kraj: </label>
            <input type="text" name="kraj_form" placeholder="Napisz swój kraj" value={kraj} onChange={(e) => {setKraj(e.target.value)}}/>
        </div>
        <div>
            <span>Miasto: </span>
            <input type="text" name="miasto_form" placeholder="Napisz swoje miasto" value={miasto} onChange={(e) => {setMiasto(e.target.value)}}/>
        </div>
        <br/>
        <div>
          <label>
            <span>Opis:</span>
            <textarea name="tekst-opisu" placeholder="Napisz krótki opis o Tobie" onChange={(e) => {setOpis(e.target.value)}}>
            </textarea>
          </label>
        </div>
        <br/>
        <div>
          <label> 
            <span>Rola Wojska:</span>
            <select name="wybrac" onChange={(e) => setRola(e.target.value)}>
              <option value="zolnierz">Żolnierz</option>
              <option value="komendant">Komendant</option>
              <option value="general">Generał</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Wysłaj"/>
    </form>
  </div>);
};

export default MojFormularz;