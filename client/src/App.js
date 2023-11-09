import './App.css'
import Index from './components/Index'
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
          <Route path="/register/actor" element={<CadastroAtor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
