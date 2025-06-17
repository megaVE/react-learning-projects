import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
      <div>
        <h1>Página</h1>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
