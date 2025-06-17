import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch"
import { Link } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data:product, loading, error} = useFetch(url)
  return (
    <div>
        <p>ID do Produto: {id}</p>
        {error && <p>Erro de Carregamento do Produto!</p>}
        {loading && <p>Carregando a Página do Produto...</p>}
        {product && (<div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>)}
    </div>
  )
}

export default Product