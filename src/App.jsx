import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Modal from './components/Modal'
import './App.css'

import cowboyArtemis from './assets/art/fanart/cowboy-Artemis.png'
import fathersDay from './assets/art/fanart/fathers_day.png'
import kindsOfKindness from './assets/art/fanart/kinds_of_kindness.png'
import planetOfTheBass from './assets/art/fanart/planet_of_the_bass.png'
import robotAndMoby from './assets/art/fanart/robot_and_moby.png'
import slayTheSpire from './assets/art/fanart/slay(the_spire).png'
import yejiKim from './assets/art/fanart/yejikim.png'
import yusufDikec from './assets/art/fanart/yusufdikec.png'
import paulieLetourneau from './assets/art/portraits/paulie_letourneau.png'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState({ src: '', title: '' })

  const handleImageClick = (src, title) => {
    setModalImage({ src, title })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage({ src: '', title: '' })
  }

  const allArtwork = [
    { src: cowboyArtemis, title: "Cowboy Artemis", description: "Fan art piece" },
    { src: fathersDay, title: "Father's Day", description: "Fan art piece" },
    { src: kindsOfKindness, title: "Kinds of Kindness", description: "Fan art piece" },
    { src: planetOfTheBass, title: "Planet of the Bass", description: "Fan art piece" },
    { src: robotAndMoby, title: "Robot and Moby", description: "Fan art piece" },
    { src: slayTheSpire, title: "Slay the Spire", description: "Fan art piece" },
    { src: yejiKim, title: "Yeji Kim", description: "Fan art piece" },
    { src: yusufDikec, title: "Yusuf Dikec", description: "Fan art piece" },
    { src: paulieLetourneau, title: "Paulie Letourneau", description: "Original portrait" }
  ]

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Gallery title="Portfolio" artworks={allArtwork} onImageClick={handleImageClick} />} />
          </Routes>
        </main>
        <Modal 
          isOpen={modalOpen} 
          imageSrc={modalImage.src} 
          imageTitle={modalImage.title} 
          onClose={closeModal} 
        />
      </div>
    </Router>
  )
}

export default App
