import React, { useContext, useEffect } from 'react'
import api from '../../api'
import ActorCard from '../ActorCard'
import './style.css'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'

export default function Actor() {
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
      <div className="actor container">
        {actor.map((actor) => (
          <ActorCard key={actor.id} data={actor} />
        ))}
      </div>
    )
  )
}
