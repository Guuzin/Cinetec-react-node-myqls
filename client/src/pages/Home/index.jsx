import React from 'react'
import { Link } from 'react-router-dom'
import ator from './assets/atores.jpg'
import diretor from './assets/diretores.jpg'
import filme from './assets/filmes.jpg'
import './style.css'

export default function Home() {
  return (
    <div className="container container__card">
      <div className="card">
        <img src={ator} alt="atores" className="img_card" />
        <div className="data_card">
          <h4>
            <b>Atores</b>
          </h4>
          <Link to={'/actor'}>
            <button className="button__blue__card">Ver atores</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={diretor} alt="" className="img_card" />
        <div className="data_card">
          <h4>
            <b>Diretores</b>
          </h4>
          <Link to={'/director'}>
            <button className="button__blue__card">Ver diretores</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img src={filme} alt="" className="img_card" />
        <div className="data_card">
          <h4>
            <b>Filme</b>
          </h4>
          <Link to={'/movie'}>
            <button className="button__blue__card">Ver filmes</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
