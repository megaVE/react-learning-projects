import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"
// import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  const {counter, setCounter} = useContext(CounterContext)
  // const {hookCounter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p onClick={()=>setCounter(counter+1)}>Contador: {counter}</p>
      {/* <p>Contador do Hook: {counter}</p> */}
      <ChangeCounter/>
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home