import React, { useState } from 'react'
import propTypes from 'prop-types'
import AppContext from './AppContext.js'

export default function Provider({ children }) {
  const [director, setDirector] = useState([])
  const [actor, setActor] = useState([])
  const [loading, setLoading] = useState(true)
  const [genderData, setGenderData] = useState([])
  const [movie, setMovie] = useState([])

  const value = {
    actor,
    setActor,
    loading,
    setLoading,
    director,
    setDirector,
    genderData,
    setGenderData,
    movie,
    setMovie,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired
