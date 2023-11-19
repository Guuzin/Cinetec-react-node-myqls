import React, { useState } from 'react'
import api from '../../api'

export default function CadastroAtor() {
  const [nameActor, setNameActor] = useState('')
  const [sex, setSex] = useState('')
  const [birth, setBirth] = useState('')
  const [image, setImage] = useState('')

  async function registerActor(e) {
    e.preventDefault()

    const dataActor = { nameActor, sex, birth }

    const formData = new FormData()
    formData.append('image', image)

    try {
      await api.post('/actor/upload', formData)
()    } catch (erro) {
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
    <div>
      <form onSubmit={registerActor}>
        <label>Imagem: </label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Imagem"
            style={{ width: '300px' }}
          />
        ) : (
          <img alt="Imagem" width="150" height="150" />
        )}
        <br />
        <br />
        <span>nome do ator</span>
        <input
          type="text"
          value={nameActor}
          onChange={(e) => setNameActor(e.target.value)}
        />
        <br />
        <span>data de nascimento</span>
        <input
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        <br />
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option>Genero do ator...</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
        <br />
        <button type="submit">cadastrar ator</button>
      </form>
    </div>
  )
}
