import React, { useState } from 'react'
import './style.css'
import api from '../../api'

export default function RegisterDirector() {
  const [nameDirector, setNameDirector] = useState('')
  const [nationality, setNationality] = useState('')
  const [sex, setSex] = useState('M')
  const [birth, setBirth] = useState('')
  const [image, setImage] = useState('')

  async function registerDirector(e) {
    window.location.reload()

    const dataDirector = { nameDirector, nationality, sex, birth }

    const formData = new FormData()
    formData.append('image', image)

    try {
      await api.post('/director/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
    }

    try {
      await api.post('/director', dataDirector)

      alert('Diretor cadastrado com sucesso')
    } catch (erro) {
      alert(`Erro ao cadastrar. ${erro}`)
    }
  }

  return (
    <div className="register__director container">
      <div className="director-card">
        <form onSubmit={registerDirector}>
          <div className="card__infos">
            <label for="image">Enviar imagem</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Imagem"
              className="card__image"
            />
          ) : (
            <img alt="Imagem" className="card__image" />
          )}
          <div className="card__infos">
            <div className="inputs">
              <input
                type="text"
                value={nameDirector}
                onChange={(e) => setNameDirector(e.target.value)}
                required
              />
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
              />
              <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                required
              />

              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                required
              >
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="div_buttons">
              <button type="submit" className="button__green">
                cadastrar diretor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
