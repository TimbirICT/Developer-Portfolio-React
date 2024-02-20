import { Outlet } from 'react-router-dom'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import AbMe from './pages/AbMe'

function App() {
  

  return (
    <div>
      <Tabs />
      <Navbar />
      <AbMe />
      <Outlet />
    </div>
  )
}

export default App
