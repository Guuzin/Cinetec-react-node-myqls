import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import api from '../../api'
import AppContext from '../../context/AppContext'

export default function RegisterMovie() {
  const [nameMovie, setNameMovie] = useState('')
  const [releaseYear, setReleaseYear] = useState(0)
  const [duration, setDuration] = useState(0)
  const [genderId, setGenderID] = useState(1)
  const [directorId, setDirectorID] = useState(1)
  const [image, setImage] = useState('')
  const [gender, setGender] = useState('')

  const { director, setDirector, genderData, setGenderData } =
    useContext(AppContext)

  async function registerMovie(e) {
    e.preventDefault()
    const dataMovie = { nameMovie, releaseYear, duration, genderId, directorId }

    const formData = new FormData()
    formData.append('image', image)

    try {
      await api.post('/movie/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
    }

    try {
      await api.post('/movie', dataMovie)

      alert('Filme cadastrado com sucesso')
    } catch (erro) {
      alert(`Erro ao cadastrar. ${erro}`)
    }
  }

  async function searchDirector() {
    try {
      const response = await api.get('/director')
      const data = response.data

      setDirector(data)
    } catch (erro) {
      console.log(erro)
    }
  }

  async function searchGender() {
    try {
      const response = await api.get('/gender')
      const data = response.data

      setGenderData(data)
    } catch (erro) {
      console.log(erro)
    }
  }

  useEffect(() => {
    searchGender()
    searchDirector()
  }, [genderData, director])

  async function registerGender(e) {
    e.preventDefault()

    const dataGender = { gender }

    try {
      await api.post('/gender', dataGender)

      alert('Genero cadastrado com sucesso')
    } catch (erro) {
      console.log(erro)
    }
  }

  return (
    <div className="teste">
      <form onSubmit={registerMovie}>
        <label for="image">Enviar imagem</label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        {image ? (
          <img src={URL.createObjectURL(image)} alt="Imagem" />
        ) : (
          <img alt="Imagem" />
        )}
        <label>nome filme</label>
        <input
          type="text"
          value={nameMovie}
          onChange={(e) => setNameMovie(e.target.value)}
        />
        <label>ano lançamento</label>
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <label>duração</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label>diretor</label>
        <select
          value={directorId}
          onChange={(e) => setDirectorID(e.target.value)}
        >
          {director.map((director) => (
            <option key={director.id} value={director.id_diretor}>
              {director.nome_diretor}
            </option>
          ))}
        </select>
        <label>genero</label>
        <select value={genderId} onChange={(e) => setGenderID(e.target.value)}>
          {genderData.map((genderData) => (
            <option key={genderData.id} value={genderData.id_genero}>
              {genderData.genero}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">enviar</button>
      </form>

      <form onSubmit={registerGender}>
        <label>crie genero</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button type="submit">criar</button>
      </form>
    </div>
  )
}
