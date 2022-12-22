import React, { useState, useRef } from 'react'
import { Center, Button, Accordion } from '@chakra-ui/react'
import VocabUpdate from './VocabUpdate'

function CreateDeck() {
  const [newDeck, setNewDeck] = useState({ cards: [] })
  const downloadRef = useRef(null)

  function addCard() {
    const updatedNewDeck = {
      cards: [...newDeck.cards, { word: 'Empty Card', definition: '' }],
    }
    setNewDeck(updatedNewDeck)
  }

  function download() {
    const vocabFile = new Blob([JSON.stringify(newDeck)], {
      type: 'application/json',
    })
    const vocabUrl = window.URL.createObjectURL(vocabFile)
    downloadRef.current.href = vocabUrl
    downloadRef.current.click()
    window.URL.revokeObjectURL(vocabUrl)
  }

  function save(evt) {
    let updatedData = { cards: [] }
    evt.preventDefault()
    for (const data of evt.target) {
      if (data.type === 'fieldset') {
        const card = {
          word: data.children[0].children[1].value,
          definition: data.children[1].children[1].value,
        }
        updatedData.cards.push(card)
      }
    }
    setNewDeck(updatedData)
  }

  return (
    <React.Fragment>
      <Center mt="1rem">
        <Button border="2px black solid" onClick={addCard}>
          Add
        </Button>
      </Center>
      {newDeck.cards.length > 0 && (
        <form onSubmit={save}>
          <Accordion
            allowToggle="true"
            w="40rem"
            margin="0 auto"
            border="2px solid black"
            mt="1rem"
            bg="white"
          >
            {newDeck.cards.map((card) => {
              return (
                <VocabUpdate
                  key={newDeck.cards.indexOf(card)}
                  vocabInfo={card}
                />
              )
            })}
          </Accordion>
          <Center mt="1rem">
            <Button type="submit" border="2px black solid" m="0 1rem">
              Save
            </Button>
            <Button as="a" border="2px black solid" onClick={download}>
              Download
            </Button>
          </Center>
        </form>
      )}
      <a download ref={downloadRef} style={{ display: 'hidden' }} />
    </React.Fragment>
  )
}

export default CreateDeck
