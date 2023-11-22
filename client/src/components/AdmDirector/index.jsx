import React, { useContext, useEffect } from 'react'
import api from '../../api'
import './style.css'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'
import AdminDirectorCard from '../AdminDirectorCard'

export default function AdmDirector() {
  const { director, setDirector, loading, setLoading } = useContext(AppContext)

  async function searchDirector() {
    try {
      const response = await api.get('/director')
      const data = response.data

      setDirector(data)
    } catch (erro) {
      setLoading(true)
    }
  }

  useEffect(() => {
    searchDirector()
    setLoading(false)
  }, [])
  return (
    (loading && <Loading />) || (
      <div className="director_adm container">
        {director.map((director) => (
          <AdminDirectorCard key={director.id} data={director} />
        ))}
      </div>
    )
  )
}
