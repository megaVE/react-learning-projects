const Challenge = () =>{
    const numSum = () =>{
        console.log(num1 + num2);
    }
    const num1 = 1;
    const num2 = 17;
    return(
        <div>
            <p>The values writen in the component "Challenge" are {num1} and {num2}.</p>
            <button onClick={numSum}>Calculate their sum</button>
        </div>
    );
};

export default Challenge;