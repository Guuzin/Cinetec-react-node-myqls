import React from 'react'
import RegisterMovie from '../../components/RegisterMovie'
import Provider from '../../context/Provider'

export default function CadastroFilme() {
  return (
    <Provider>
      <RegisterMovie />
    </Provider>
  )
}
