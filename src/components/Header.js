import { Link } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'
import '../styles/Header.scss'

export default function Header() {
  return (
    <header className="header">
      <h1 className="jumbo-title" data-testid="jumbo-title">
        <Link className="jumbo-title__link" to="/">
          <span className="jumbo-title__first">dan</span>
          <span className="jumbo-title__last">alexander</span>
          <span className="jumbo-title__end">.dev</span>
        </Link>
      </h1>

      <NavBar />
    </header>
  )
}
