import React from 'react'
import Header from '../../components/Header'
import Movie from '../../components/Movie'
import Provider from '../../context/Provider'

export default function Filme() {
  return (
    <Provider>
      <Header />
      <Movie />
    </Provider>
  )
}
