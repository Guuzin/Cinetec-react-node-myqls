import React from 'react'
import Provider from '../../context/Provider'
import AdmActor from '../../components/AdmActor'
import Header from '../../components/Header'

export default function AdminAtor() {
  return (
    <div>
      <Provider>
        <Header />
        <AdmActor />
      </Provider>
    </div>
  )
}
