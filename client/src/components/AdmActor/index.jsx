import React, { useContext, useEffect } from 'react'
import api from '../../api'
import './style.css'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'
import AdminActorCard from '../AdminActorCard'

export default function AdmActor() {
  const { actor, setActor, loading, setLoading } = useContext(AppContext)

  async function searchActor() {
    try {
      const response = await api.get('/actor')
      const data = response.data

      setActor(data)
    } catch (erro) {
      setLoading(true)
    }
  }

  useEffect(() => {
    searchActor()
    setLoading(false)
  }, [])
  return (
    (loading && <Loading />) || (
      <div className="actor_adm container">
        {actor.map((actor) => (
          <AdminActorCard key={actor.id} data={actor} />
        ))}
      </div>
    )
  )
}
