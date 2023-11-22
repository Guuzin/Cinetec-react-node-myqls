import React from 'react'
import './style.css'

export default function DirectorCard({ data }) {
  const { nome_diretor, nacionalidade, dt_nascimento, foto_diretor } = data

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="director-card">
      <img
        src={`http://localhost:3333/${foto_diretor}`}
        alt="img"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__name"> {nome_diretor}</h2>
        <h2 className="card__birth">{nacionalidade}</h2>
        <h2 className="card__birth">
          {new Date(dt_nascimento).toLocaleDateString('pt-br', options)}
        </h2>
      </div>
    </div>
  )
}
