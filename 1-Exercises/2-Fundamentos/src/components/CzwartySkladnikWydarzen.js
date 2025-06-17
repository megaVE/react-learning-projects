const CzwartySkladnikWydarzen = () => {
    const handleMojeWydarzenie = (e) => {
        console.log(e);
        console.log("Wydarzenie zostało aktywowane!");
    }
    const renderowacCos = (x) =>{
        if(x){
            return <h2>Mogę to renderować!</h2>;
        }else{
            return <h2>Mogę to też renderować!</h2>;
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMojeWydarzenie}>Kliknij tutaj!</button>
            </div>
            <div>
                <button onClick={()=> console.log("Wydarzenie zostało aktywowane!")}>Kliknij też tutaj!</button>
            </div>
            {renderowacCos(true)}
            {renderowacCos(false)}
        </div>
    );
};

export default CzwartySkladnikWydarzen;