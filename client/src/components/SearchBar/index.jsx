import React, { useContext, useState } from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'
import api from '../../api'
import AppContext from '../../context/AppContext'

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('')
  const { setActor, setLoading } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)

    const response = await api.get(`/actor?nome_ator=%${searchValue}%`)
    const actor = response.data

    setActor(actor)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
