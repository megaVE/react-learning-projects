import {useState} from 'react';

const Lista = () =>{
    const[lista]= useState(["Krwią", "piszę", "list", "do", "Ciebie"]);
    
    const[drugaLista, setDrugaLista]= useState([
        {id: 0, slowo: "Krew"},
        {id: 1, slowo: "płynie"},
        {id: 2, slowo: "płynie"},
        {id: 3, slowo: "po"},
        {id: 4, slowo: "szablach!"},
    ]);
    let [licznik, setLicznik] = useState(4);

    const usunSlowo = () => {
        if(licznik > 0)
            setLicznik(licznik-1);

        setDrugaLista((prevDrugaLista) => {
            return prevDrugaLista.filter((slowa) => slowa.id !== licznik);
        });
    };

    return(<div>
        <div>
            <ul>
                {lista.map((przedmiot, x) => (
                    <li key={x}>{przedmiot}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {drugaLista.map((slowa) => (
                    <li key={slowa.id}>{slowa.slowo}</li>
                ))}
                <li>{licznik}</li>
            </ul>
        </div>
        <div>
            <button onClick={usunSlowo}>Usuń</button>
        </div>
    </div>);
};

export default Lista;