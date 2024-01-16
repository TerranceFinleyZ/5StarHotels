import React from 'react'
import './App.css'
import Navbar from './common/Navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/About/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

