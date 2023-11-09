import React, { useState } from 'react'
import api from '../../api'

export default function CadastroAtor() {
  const [nameActor, setNameActor] = useState('')
  const [sex, setSex] = useState('')
  const [birth, setBirth] = useState('')

  async function registerActor(e) {
    e.preventDefault()

    const dataActor = {nameActor, sex, birth}

    try {

      await api.post('/actor', dataActor)
    
      alert("Ator cadastrado com sucesso");
    } catch (erro) {
      alert(`Erro ao cadastrar. ${erro}`);
    }
  }

  return (
    <div>
      <form onSubmit={registerActor}>
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
        />{' '}
        <br />
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option>Genero do ator...</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>{' '}
        <br />
        <button type="submit">cadastrar ator</button>
      </form>
    </div>
  )
}
