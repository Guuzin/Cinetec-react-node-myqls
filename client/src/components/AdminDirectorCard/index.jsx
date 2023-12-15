import React, { useState } from 'react'
import './style.css'
import api from '../../api'

export default function AdminDirectorCard({ data }) {
  const {
    id_diretor,
    nome_diretor,
    nacionalidade,
    dt_nascimento,
    sexo,
    foto_diretor,
  } = data
  const [nameDirector, setNameDirector] = useState(nome_diretor)
  const [nationality, setNationality] = useState(nacionalidade)
  const [sex, setSex] = useState(sexo)
  const [birth, setBirth] = useState(
    new Date(dt_nascimento).toJSON().replace('T03:06:28.000Z', '')
  )
  const [image, setImage] = useState('')

  const dataDirector = { id_diretor, nameDirector, nationality, sex, birth }
  const dataDirector2 = {
    id_diretor,
    nameDirector,
    nationality,
    sex,
    birth,
    foto_diretor,
  }

  const formData = new FormData()
  formData.append('image', image)

  async function handleEditDirector() {
    try {
      if (image) await api.put('/director/edit/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
      console.log(erro)
    }

    try {
      if (image) {
        await api.put('http://localhost:3333/director/edit', dataDirector)
        alert('Diretor editado com sucesso')
        return
      }

      await api.put('http://localhost:3333/director/edit', dataDirector2)
      alert('Diretor editado com sucesso')
    } catch (erro) {
      alert(`Erro ao editar. ${erro}`)
    }
  }

  async function handleDeleteDirector() {
    try {
      await api.delete(`http://localhost:3333/director/delete/${id_diretor}`)
      alert('Diretor deletado com sucesso')
    } catch (erro) {
      alert(`Erro ao deletar. ${erro}`)
    }
  }

  return (
    <div className="actor-card">
      <div className="card__infos">
        <label for={`image${id_diretor}`}>Enviar imagem</label>
        <input
          type="file"
          name="image"
          id={`image${id_diretor}`}
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
          src={`http://localhost:3333/${foto_diretor}`}
          className="card__image"
        />
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
          <button onClick={handleEditDirector} className="button__blue">
            edit
          </button>
          <button onClick={handleDeleteDirector} className="button__red">
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
