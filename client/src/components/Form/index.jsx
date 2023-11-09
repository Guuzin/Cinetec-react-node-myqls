import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './style.css'

//style={{margin: '0 25px'}}
export default function FormDefalt() {
  return (
    <div>
        {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '20rem', margin: '0 auto', textAlign: 'center'}}
          className="mb-2"
        >
        <Card.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Link to='/cadastro'>
              <Button variant="link" type="submit" >
                cadastre-se
              </Button>
              </Link> 
              <Link to='/home'>
              <Button variant="primary" type="submit" >
                acessar
              </Button>
              </Link>
          </div>
        </Form>
      </Card.Body>
    </Card>))}
    </div>
  )
}
