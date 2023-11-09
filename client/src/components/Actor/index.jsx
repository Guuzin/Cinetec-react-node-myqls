import React, { useEffect, useState } from 'react'
import api from '../../api'
import ActorCard from '../ActorCard'
import './Actor.css'

export default function Actor() {
  const [actor, setActor] = useState([])

  async function searchActor() {
    try {
      const response = await api.get('/actor')
      const data = response.data

      setActor(data)
    } catch (erro) {
      alert(`Erro ao cadastrar. ${erro}`)
    }
  }

  useEffect(() => {
    searchActor()
  }, [])
  return (
    <div className="actor container">
      {actor.map((actor) => (
        <ActorCard key={actor.id} data={actor} />
      ))}
    </div>
  )
}
