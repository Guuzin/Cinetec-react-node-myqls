import React, { useContext, useEffect } from 'react'
import api from '../../api'
import './style.css'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'
import AdminMovieCard from '../AdmMovieCard'

export default function AdmMovie() {
  const { movie, setMovie, loading, setLoading } = useContext(AppContext)

  async function searchMovie() {
    try {
      const response = await api.get('/movie')
      const data = response.data

      setMovie(data)
    } catch (erro) {
      console.log(erro)
      setLoading(true)
    }
  }

  useEffect(() => {
    searchMovie()
    setLoading(false)
  }, [])
  return (
    (loading && <Loading />) || (
      <div className="movie container">
        {movie.map((movie) => (
          <AdminMovieCard key={movie.id} data={movie} />
        ))}
      </div>
    )
  )
}
