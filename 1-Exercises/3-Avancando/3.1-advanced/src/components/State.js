import {useState} from 'react';

const State = () => {
    const zmien = () => {
        if(odpowiedz === "Tak!")
            setOdpowiedz("Nie!");
        else
            setOdpowiedz("Tak!");
    }
    let[odpowiedz, setOdpowiedz] = useState("Tak!");

    return(<div>
        <h2>Państwo jest wrogiem: {odpowiedz}</h2>
        <button onClick={zmien}>Zmień</button>
    </div>);
};

export default State;