import './App.css';

import {BrowserRouter, Routes , Route , Navigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
          <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
