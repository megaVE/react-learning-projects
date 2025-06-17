import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search'
import SearchForm from './components/SearchForm';

function App(){
  return (
    <div> 
      <h1>Página</h1>   
      <BrowserRouter>
        <NavBar/>
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products/:id/info" element={<Info/>}></Route>
          <Route path="/products/:id" element={<Product/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App