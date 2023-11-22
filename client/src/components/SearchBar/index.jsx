import React, { useContext, useState } from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'
import api from '../../api'
import AppContext from '../../context/AppContext'

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('')
  const { setActor, setDirector, setLoading } = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true)

    const response2 = await api.get(`/director?nome_diretor=%${searchValue}%`)
    const director = response2.data

    const response = await api.get(`/actor?nome_ator=%${searchValue}%`)
    const actor = response.data

    setActor(actor)
    setDirector(director)
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
