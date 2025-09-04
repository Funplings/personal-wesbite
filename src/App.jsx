import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Modal from './components/Modal'
import './App.css'

import cowboyArtemis from './assets/art/fanart/cowboy-Artemis.png'
import daMob from './assets/art/fanart/da_mob.png'
import fathersDay from './assets/art/fanart/fathers_day.png'
import kindsOfKindness from './assets/art/fanart/kinds_of_kindness.png'
import mamaLizChiliOil from './assets/art/fanart/mama_lizs_chili_oil.png'
import planetOfTheBass from './assets/art/fanart/planet_of_the_bass.png'
import robotAndMoby from './assets/art/fanart/robot_and_moby.png'
import slayTheSpire from './assets/art/fanart/slay(the_spire).png'
import yejiKim from './assets/art/fanart/yejikim.png'
import yusufDikec from './assets/art/fanart/yusufdikec.png'
import paulieLetourneau from './assets/art/portraits/paulie_letourneau.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
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

  const artworkData = {
    'fan-art': [
      { src: cowboyArtemis, title: "Cowboy Artemis", description: "Fan art piece" },
      { src: fathersDay, title: "Father's Day", description: "Fan art piece" },
      { src: kindsOfKindness, title: "Kinds of Kindness", description: "Fan art piece" },
      { src: planetOfTheBass, title: "Planet of the Bass", description: "Fan art piece" },
      { src: robotAndMoby, title: "Robot and Moby", description: "Fan art piece" },
      { src: slayTheSpire, title: "Slay the Spire", description: "Fan art piece" },
      { src: yejiKim, title: "Yeji Kim", description: "Fan art piece" },
      { src: yusufDikec, title: "Yusuf Dikec", description: "Fan art piece" }
    ],
    'prints': [],
    'originals': [
      { src: paulieLetourneau, title: "Paulie Letourneau", description: "Original portrait" }
    ],
    'thumbnails': [],
    'key-art': []
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'fan-art':
        return <Gallery title="Fan Art" artworks={artworkData['fan-art']} onImageClick={handleImageClick} />
      case 'prints':
        return <Gallery title="Prints" artworks={artworkData.prints} onImageClick={handleImageClick} />
      case 'originals':
        return <Gallery title="Original Pieces" artworks={artworkData.originals} onImageClick={handleImageClick} />
      case 'thumbnails':
        return <Gallery title="YouTube Thumbnails" artworks={artworkData.thumbnails} onImageClick={handleImageClick} />
      case 'key-art':
        return <Gallery title="Game Key Art" artworks={artworkData['key-art']} onImageClick={handleImageClick} />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main">
        {renderSection()}
      </main>
      <Modal 
        isOpen={modalOpen} 
        imageSrc={modalImage.src} 
        imageTitle={modalImage.title} 
        onClose={closeModal} 
      />
    </div>
  )
}

export default App
