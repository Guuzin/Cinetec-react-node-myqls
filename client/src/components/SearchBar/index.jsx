import React, { useState } from 'react'
import './SearchBar.css'
import { BsSearch } from 'react-icons/bs'

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}
