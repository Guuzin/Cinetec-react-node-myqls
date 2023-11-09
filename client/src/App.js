import './App.css'
import Index from './pages/Index'
import Ator from './pages/Ator'
import Cadastro from './pages/Cadastro'
import CadastroAtor from './pages/CadastroAtor'
import Home from './pages/Home'
import Login from './pages/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register/actor" element={<CadastroAtor />} />
          <Route path="/actor" element={<Ator />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
