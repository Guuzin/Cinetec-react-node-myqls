import React from 'react'
import Provider from '../../context/Provider'
import Header from '../../components/Header'
import AdmMovie from '../../components/AdmMovie'

export default function AdminFilme() {
  return (
    <Provider>
      <Header />
      <AdmMovie />
    </Provider>
  )
}
