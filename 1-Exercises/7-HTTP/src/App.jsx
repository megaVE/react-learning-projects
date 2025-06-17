import { useFetch } from '../hooks/useFetch';
import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const[products, setProducts] = useState([])

  const[name, setName] = useState('');
  const[price, setPrice] = useState(0);

  // useEffect(() =>{
  //   async function fetchData(){
  //     const res = await fetch(url)

  //     const data = await res.json()
  
  //     setProducts(data)
  //   }
  //   fetchData();
  // }, []);

  const {data: items, httpConfig, loading, error} = useFetch(url);

  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {name: name, price: price}
    
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json",},
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    httpConfig(product, "POST")

    setName("")
    setPrice(0)
  }

  const handleRemove = (id) =>{
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && {error}}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - {product.price}
          <button onClick={(e)=> handleRemove(product.id)}>Excluir</button></li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input type="submit" value="Aguarde" diasabled />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div> 
  )
}

export default App
