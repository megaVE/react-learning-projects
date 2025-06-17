import { useState, useRef } from 'react';
import './EkranGrowy.css';

function EkranGrowy({skonczGre, sprawdzaLitere, wybraneSlowo, wybranaKategoria, litery, wyprobowaneLitery, bledneLitery, proby, wynik}) {
    const [litera, setLitera] = useState("");
    const literaInputRef = useRef(null);

    const handleWyslanie = (e) => {
        e.preventDefault();
        sprawdzaLitere(litera);
        setLitera("");
        literaInputRef.current.focus();
    }
    return (
        <div className="gra">
            <p className="wynik">
                Wynik: <span>{wynik}</span>
            </p>
            <h3 className="wskazowka">Wskazówka na to słowo: <span>{wybranaKategoria}</span></h3>
            <p>Masz jeszcze <span>{proby}</span> próby(ę)</p>
            <div className="skladnikSlowa">
                {litery.map((litera, i) => (
                    wyprobowaneLitery.includes(litera) ? (
                        <span key={i} className="litera">{litera}</span>
                    ) : (
                        <span key={i} className="pustyKwadrat"></span>
                    )
                ))}
            </div>
            <div className="skladnikLitery">
                <p>Spróbuj odgadnąć literę słowa</p>
                <form onSubmit={handleWyslanie}>
                    <input required name="litera" type="text" maxLength="1" onChange={(e) => setLitera(e.target.value)} value={litera} ref={literaInputRef} ></input>
                    <button>Zagraj!</button>
                </form>
            </div>
            <div className="skladnikBledowychLiter">
                <p>Litery już wypróbowane</p>
                {bledneLitery.map((litera,i) => (
                    <span key={i}>{litera}</span>
                ))}
            </div>
            <button onClick={skonczGre}>Skończ Grę</button>
        </div>
    );
};

export default EkranGrowy;