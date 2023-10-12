import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Button, ButtonGroup } from 'react-bootstrap'

const App = () => {

  const [colorB, setColorB] = useState("App")

  const handleCam = () => {
    setColorB("App am")
  }
  const handleCpm = () => {
    setColorB("App pm")
  }

  return (
    <div className={colorB}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <ButtonGroup className='b' vertical>
          <Button variant='outline-dark' onClick={handleCam}
            style={{
              width: "40px",
              height: "40px"
            }}>am</Button>
          <Button variant='outline-dark' onClick={handleCpm}
            style={{
              width: "40px",
              height: "40px"
            }}>pm</Button>
        </ButtonGroup>
        <Footer />
      </Router>
    </div>
  )
}

export default App