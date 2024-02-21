import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import AbMe from './pages/AbMe'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AbMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
