import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import TechPage from './pages/TechPage'
import DJPage from './pages/DJPage'
import MusicPage from './pages/MusicPage'
import CarsPage from './pages/CarsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tech" element={<TechPage />} />
        <Route path="dj" element={<DJPage />} />
        <Route path="music" element={<MusicPage />} />
        <Route path="cars" element={<CarsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
