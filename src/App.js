import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Center, Button, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Create from './pages/Create'
import NavBar from './components/NavBar'

function App() {
  const fileSelector = useRef(null)
  const [currentList, setCurrentList] = useState({})
  const [currentDeckPosition, setCurrentDeckPosition] = useState(0)

  function openSelector() {
    fileSelector.current.click()
  }

  function setList(evt) {
    const reader = new FileReader()
    reader.readAsText(evt.target.files[0])
    reader.onload = (evt) => {
      const data = JSON.parse(evt.target.result)
      setCurrentList(data)
    }
    setCurrentDeckPosition(0)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Center m="0 auto" w="18rem" mt="5rem">
        <Button onClick={openSelector} border="2px solid black">
          Load list
        </Button>
        <Input
          type="file"
          ref={fileSelector}
          display="none"
          accept=".json"
          onChange={setList}
        />
      </Center>
      <Routes>
        <Route path="/" element={<Home vocabSet={currentList} pos={currentDeckPosition} setPos={setCurrentDeckPosition} />} />
        <Route
          path="/edit"
          element={<Edit vocabSet={currentList} update={setCurrentList} />}
        />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
