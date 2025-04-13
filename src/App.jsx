import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Reviews from './Pages/Reviews' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App