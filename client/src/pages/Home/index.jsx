import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link to="/"><Button>voltar para o inicio</Button></Link>
    </div>
  )
}
