import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Video from './components/Video'

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
