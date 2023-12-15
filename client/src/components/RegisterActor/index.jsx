import React, { useState } from 'react'
import './style.css'
import api from '../../api'

export default function RegisterActor() {
  const [nameActor, setNameActor] = useState('')
  const [sex, setSex] = useState('M')
  const [birth, setBirth] = useState('')
  const [image, setImage] = useState('')

  console.log(`teste ${sex}`)

  async function registerActor() {
    window.location.reload()

    const dataActor = { nameActor, sex, birth }

    const formData = new FormData()
    formData.append('image', image)

    try {
      await api.post('/actor/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
    }

    try {
      await api.post('/actor', dataActor)

      alert('Ator cadastrado com sucesso')
    } catch (erro) {
      alert(`Erro ao cadastrar. ${erro}`)
    }
  }

  return (
    <div className="register__actor container">
      <div className="actor-card">
        <form onSubmit={registerActor}>
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
                value={nameActor}
                onChange={(e) => setNameActor(e.target.value)}
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
                cadastrar ator
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
