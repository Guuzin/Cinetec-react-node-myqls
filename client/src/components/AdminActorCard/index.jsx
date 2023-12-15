import React, { useState } from 'react'
import './style.css'
import api from '../../api'

export default function AdminActorCard({ data }) {
  const { id_ator, nome_ator, dt_nascimento, sexo, foto_ator } = data
  const [nameActor, setNameActor] = useState(nome_ator)
  const [sex, setSex] = useState(sexo)
  const [birth, setBirth] = useState(
    new Date(dt_nascimento).toJSON().replace('T03:06:28.000Z', '')
  )
  const [image, setImage] = useState('')

  console.log(`teste ${sex}`)

  const dataActor = { id_ator, nameActor, sex, birth }
  const dataActor2 = { id_ator, nameActor, sex, birth, foto_ator }

  const formData = new FormData()
  formData.append('image', image)

  async function handleEditActor() {
    try {
      if (image) await api.put('/actor/edit/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
      console.log(erro)
    }

    try {
      if (image) {
        await api.put('http://localhost:3333/actor/edit', dataActor)
        alert('Ator editado com sucesso')
        return
      }

      await api.put('http://localhost:3333/actor/edit', dataActor2)
      alert('Ator editado com sucesso')
    } catch (erro) {
      alert(`Erro ao editar. ${erro}`)
    }
  }

  async function handleDeleteActor() {
    try {
      await api.delete(`http://localhost:3333/actor/delete/${id_ator}`)
      alert('Ator deletado com sucesso')
    } catch (erro) {
      alert(`Erro ao deletar. ${erro}`)
    }
  }

  return (
    <div className="actor-card">
      <div className="card__infos">
        <label for={`image${id_ator}`}>Enviar imagem</label>
        <input
          type="file"
          name="image"
          id={`image${id_ator}`}
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="Imagem"
          className="card__image"
        />
      ) : (
        <img
          alt="Imagem"
          src={`http://localhost:3333/${foto_ator}`}
          className="card__image"
        />
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
            defaultValue={sexo}
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="div_buttons">
          <button onClick={handleEditActor} className="button__blue">
            edit
          </button>
          <button onClick={handleDeleteActor} className="button__red">
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
