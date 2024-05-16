import { useState, useEffect } from "react"

import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
  const [showModal, setShowModal] = useState(false)
  
  const handleToggleModal = () => {
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} />
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
