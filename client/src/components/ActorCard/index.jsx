import React from 'react'
import './style.css'

export default function ActorCard({ data }) {
  const { nome_ator, dt_nascimento } = data

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className="actor-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg"
        alt="img"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__name"> {nome_ator}</h2>
        <h2 className="card__birth">
          {new Date(dt_nascimento).toLocaleDateString('pt-br', options)}
        </h2>
      </div>
    </div>
  )
}
