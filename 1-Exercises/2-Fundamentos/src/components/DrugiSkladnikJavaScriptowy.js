const DrugiSkladnikJavaScriptowy = () => {
    const imie = "Jan Kowalski";
    const otobie = {
        wiek: 31,
        praca: "Programista",
    };
    return(
        <div>
            <h2>Cześć, {imie}, jak się masz?</h2>
            <p>Pracujesz jako {otobie.praca}</p>
            <p>Masz {otobie.wiek} lat(a)</p>
        </div>
    );
};

export default DrugiSkladnikJavaScriptowy;