import React from 'react'
import Provider from '../../context/Provider'
import Header from '../../components/Header'
import AdmDirector from '../../components/AdmDirector'

export default function AdminDiretor() {
  return (
    <div>
      <Provider>
        <Header />
        <AdmDirector />
      </Provider>
    </div>
  )
}
