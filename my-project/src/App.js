import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'
import React, { useState, useEffect } from 'react'
import Footer from './components/footer'
import { Route, Switch } from 'react-router'
import Home from './Pages'
import About from './Pages/about'
import Menu from './Pages/menu'
import Dropdown from './components/Dropdwon'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resizeee')
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
