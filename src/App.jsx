import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Resume from './component/Resume';
import Footer from './component/Footer';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/resume" element={<><Navbar /><Resume /><Footer /></>} />
      <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
      <Route path="/portfolio" element={<><Navbar /><Portfolio /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
    </Routes>
  )
}

export default App
