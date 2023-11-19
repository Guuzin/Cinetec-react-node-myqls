import React from 'react'
import Provider from '../../context/Provider'
import AdmActor from '../../components/AdmActor'

export default function AdminAtor() {
  return (
    <div>
      <Provider>
        <AdmActor />
      </Provider>
    </div>
  )
}
