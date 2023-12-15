import React, { useState } from 'react'
import './style.css'
import api from '../../api'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { useEffect } from 'react'

export default function AdminMovieCard({ data }) {
  const {
    id_filme,
    nome_filme,
    ano_lancamento,
    duracao,
    FK_id_genero,
    FK_id_diretor,
    foto_filme,
  } = data

  const [nameMovie, setNameMovie] = useState(nome_filme)
  const [releaseYear, setReleaseYear] = useState(ano_lancamento)
  const [duration, setDuration] = useState(duracao)
  const [genderId, setGenderID] = useState(FK_id_genero)
  const [directorId, setDirectorID] = useState(FK_id_diretor)
  const [image, setImage] = useState('')

  const { director, setDirector, genderData, setGenderData } =
    useContext(AppContext)

  const dataMovie = {
    id_filme,
    nameMovie,
    releaseYear,
    duration,
    genderId,
    directorId,
  }
  const dataMovie2 = {
    id_filme,
    nameMovie,
    releaseYear,
    duration,
    genderId,
    directorId,
    foto_filme,
  }

  const formData = new FormData()
  formData.append('image', image)

  async function handleEditMovie() {
    try {
      if (image) await api.put('/movie/edit/upload', formData)
    } catch (erro) {
      alert(`Erro fazer o upload. ${erro}`)
      console.log(erro)
    }

    try {
      if (image) {
        await api.put('http://localhost:3333/movie/edit', dataMovie)
        alert('Filme editado com sucesso')
        return
      }

      await api.put('http://localhost:3333/movie/edit', dataMovie2)
      alert('Filme editado com sucesso')
    } catch (erro) {
      alert(`Erro ao editar. ${erro}`)
    }
  }

  async function handleDeleteMovie() {
    try {
      await api.delete(`http://localhost:3333/movie/delete/${id_filme}`)
      alert('Filme deletado com sucesso')
    } catch (erro) {
      alert(`Erro ao deletar. ${erro}`)
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

  return (
    <div className="actor-card">
      <div className="card__infos">
        <label for={`image${id_filme}`}>Enviar imagem</label>
        <input
          type="file"
          name="image"
          id={`image${id_filme}`}
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
        <img
          alt="Imagem"
          className="card__image"
          src={`http://localhost:3333/${foto_filme}`}
        />
      )}
      <div className="card__infos">
        <div className="inputs">
          {/* <label>nome filme</label> */}
          <input
            type="text"
            value={nameMovie}
            onChange={(e) => setNameMovie(e.target.value)}
          />
          {/* <label>ano lançamento</label> */}
          <input
            className="release_year_input"
            min={1000}
            max={9999}
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
            // onInvalid={(e) =>
            //   e.target.setCustomValidity('Enter User Name Here')
            // }
            // onInput={(e) => e.target.setCustomValidity('')}
          />
          {/* <label>duração</label> */}
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {/* <label>diretor</label> */}
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
          {/* <label>genero</label> */}
          <select
            value={genderId}
            onChange={(e) => setGenderID(e.target.value)}
          >
            {genderData.map((genderData) => (
              <option key={genderData.id} value={genderData.id_genero}>
                {genderData.genero}
              </option>
            ))}
          </select>
        </div>

        <div className="div_buttons">
          <button onClick={handleEditMovie} className="button__blue">
            edit
          </button>
          <button onClick={handleDeleteMovie} className="button__red">
            delete
          </button>
        </div>
      </div>
    </div>
  )
}
