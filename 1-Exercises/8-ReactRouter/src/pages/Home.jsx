import React from 'react'
import {useFetch} from '../hooks/useFetch.js'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const url = 'http://localhost:3000/products'
  const {data : items , loading, error} = useFetch(url)

  return (
    <div>Home
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map((product)=>(
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home