import React from 'react'
import './app.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App