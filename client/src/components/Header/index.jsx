import React from 'react'
import './Header.css'
import Searchbar from '../SearchBar'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Searchbar />
      </div>
    </header>
  )
}

export default Header
