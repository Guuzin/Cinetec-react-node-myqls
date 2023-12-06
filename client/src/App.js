import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Ator from './pages/Ator'
import Cadastro from './pages/Cadastro'
import CadastroAtor from './pages/CadastroAtor'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminAtor from './pages/AdminAtor'
import Admin from './pages/Admin'
import Diretor from './pages/Diretor'
import CadastroDiretor from './pages/CadastroDiretor'
import AdminDiretor from './pages/AdminDiretor'
import CadastroFilme from './pages/CadastroFilme'
import Filme from './pages/Filme'
import AdminFilme from './pages/AdminFilme'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/actor" element={<Ator />} />
          <Route path="/director" element={<Diretor />} />
          <Route path="/movie" element={<Filme />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/register/actor" element={<CadastroAtor />} />
          <Route
            path="/admin/register/director"
            element={<CadastroDiretor />}
          />
          <Route path="/admin/register/movie" element={<CadastroFilme />} />
          <Route path="/admin/actor" element={<AdminAtor />} />
          <Route path="/admin/director" element={<AdminDiretor />} />
          <Route path="/admin/movie" element={<AdminFilme />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
