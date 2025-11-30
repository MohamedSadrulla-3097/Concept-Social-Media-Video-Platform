import React from 'react'
import './index.css'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Video from './components/Video.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Video />
    </div>
  )
}

export default App
