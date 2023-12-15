import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Index() {
  return (
    <div className="container">
      <h1>Seja bem vindo!</h1>
      <br />
      <h3>Cadastre-se</h3>
      <Link to="/register">
        <Button variant="success">Cadastro</Button>
      </Link>
      <hr />
      <h3>Faça login</h3>
      <Link to="/login">
        <Button variant="outline-dark">Login</Button>
      </Link>
      <hr />
    </div>
  )
}
