import "./App.css"

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/AuthContext";

import { onAuthStateChanged } from "firebase/auth";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard"
import Post from "./pages/Post/Post";
import Search from "./pages/Search/Search";
import EditPost from "./pages/EditPost/EditPost";

function App() {
  const [user, setUser] = useState(undefined)
  const loadingUser = user === undefined
  
  const { auth } = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Public */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              {/* Private */}
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
              <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
