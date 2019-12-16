import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/main.scss'
import './styles/App.scss'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
