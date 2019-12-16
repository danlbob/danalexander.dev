import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.scss'

export default function NavBar() {
  return (
    <nav className="main-nav" data-testid="main-nav">
      <Link className="main-nav__item  main-nav__item--work" to="/work">
        Work
      </Link>

      <Link className="main-nav__item main-nav__item--about" to="/about">
        About
      </Link>

      <Link className="main-nav__item  main-nav__item--contact" to="/contact">
        Contact
      </Link>
    </nav>
  )
}
