import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AbMe from './pages/AbMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AbMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
