import React from 'react'
import './App.css'
import Navbar from './common/Navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/About/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Gallery from './components/gallery/Gallery'
import Hotels from './components/Hotels/Hotels'
import Blog from './components/blog/Blog'
import Bloger from './components/pages/blogger/Bloger'
import ContactPage from './components/contact/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
          <Route path='/hotels' exact component={Hotels}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blogger' exact component={Bloger}></Route>
          <Route path='/contact' exact component={ContactPage}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

