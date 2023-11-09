import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api'
import './style.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    const dataUser = { password, email }

    try {
      await api.post('/login', dataUser)

      navigation('/home')
    } catch (erro) {
      alert(`Email ou senha invalido!`)
    }
  }
  return (
    <div className="conteiner">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleLogin}>
            <span className="login-form-title"> Bem vindo </span>

            {/* <span className="login-form-title">

        </span> */}

            <div className="wrap-input">
              <input
                className={email !== '' ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link className="txt2" to="/register">
                Criar conta.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
