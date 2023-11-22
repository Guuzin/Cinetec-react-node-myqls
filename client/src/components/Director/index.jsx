import React, { useContext, useEffect } from 'react'
import api from '../../api'
import DirectorCard from '../DirectorCard'
import './style.css'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'

export default function Director() {
  const { director, setDirector, loading, setLoading } = useContext(AppContext)

  async function searchDirector() {
    try {
      const response = await api.get('/director')
      const data = response.data

      setDirector(data)
    } catch (erro) {
      console.log(erro)
      setLoading(true)
    }
  }

  useEffect(() => {
    searchDirector()
    setLoading(false)
  }, [])
  return (
    (loading && <Loading />) || (
      <div className="director container">
        {director.map((director) => (
          <DirectorCard key={director.id} data={director} />
        ))}
      </div>
    )
  )
}
