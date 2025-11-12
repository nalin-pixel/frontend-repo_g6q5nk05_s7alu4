import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import RSVPPage from './pages/RSVP'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
          Made with love • #AaravWedsBela
        </div>
      </footer>
    </div>
  )
}

export default App
