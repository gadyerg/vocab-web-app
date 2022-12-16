import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Flex, Button, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Home from './pages/Home'
import Edit from './pages/Edit'
import NavBar from './components/NavBar'

function App() {
  const fileSelector = useRef(null)
  const [currentList, setCurrentList] = useState({})

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
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Flex m="0 auto" w="18rem" justifyContent="space-between" mt="5rem">
        <Button border="2px solid black">Create New List</Button>
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
      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit vocabSet={currentList} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
