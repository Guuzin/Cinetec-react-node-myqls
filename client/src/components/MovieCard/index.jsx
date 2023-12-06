import React from 'react'
import './style.css'

export default function MovieCard({ data }) {
  const {
    nome_filme,
    ano_lancamento,
    duracao,
    nome_diretor,
    genero,
    foto_filme,
  } = data

  return (
    <div className="movie-card">
      <img
        src={`http://localhost:3333/${foto_filme}`}
        alt="img"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__name"> {nome_filme}</h2>
        <h2 className="card__birth"> {ano_lancamento}</h2>
        <h2 className="card__birth">{duracao}</h2>
        <h2 className="card__birth">{nome_diretor}</h2>
        <h2 className="card__birth">{genero}</h2>
      </div>
    </div>
  )
}
