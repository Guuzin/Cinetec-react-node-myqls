import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <div className="title">
        <h1>Pagina admin</h1>
      </div>

      <div className="container__adm">
        <div className="btn-container">
          <p className="btn-text">Registrar novo ator</p>
          <Link to={'/admin/register/actor'}>
            <button className="button__registrar">Registrar</button>
          </Link>
        </div>
        <div className="btn-container">
          <p className="btn-text">Registrar novo diretor</p>
          <Link to={'/admin/register/director'}>
            <button className="button__registrar">Registrar</button>
          </Link>
        </div>
        <div className="btn-container">
          <p className="btn-text">Admintrar ator</p>
          <Link to={'/admin/actor'}>
            <button className="button__adminstrar">Administrar</button>
          </Link>
        </div>
        <div className="btn-container">
          <p className="btn-text">Administrar diretor</p>
          <Link to={'/admin/director'}>
            <button className="button__adminstrar">Admintrar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
