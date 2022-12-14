import React, { useState, useRef } from 'react'
import VocabUpdate from './VocabUpdate'
import NoVocab from './NoVocab'
import { Accordion, Button, Center } from '@chakra-ui/react'

function List(props) {
  const [allCards, setAllCards] = useState(props.vocab.cards)
  const downloadRef = useRef(null)

  function save(evt) {
    let updatedData = { cards: [] }
    evt.preventDefault()
    console.log(evt.target)
    for (const data of evt.target) {
      if (data.type === 'fieldset') {
        const card = {
          word: data.children[0].children[1].value,
          definition: data.children[1].children[1].value,
        }
        updatedData.cards.push(card)
      }
    }
    props.updateList(updatedData)
  }

  function addCard() {
    const addCard = [
      ...props.vocab.cards,
      { word: 'Empty Card', definition: '' },
    ]
    props.vocab.cards = addCard
    setAllCards(props.vocab.cards)
  }

  function download() {
    const vocabFile = new Blob([JSON.stringify(props.vocab)], {
      type: 'application/json',
    })
    const vocabUrl = window.URL.createObjectURL(vocabFile)
    downloadRef.current.href = vocabUrl
    downloadRef.current.click()
    window.URL.revokeObjectURL(vocabUrl)
  }

  return (
    <React.Fragment>
      {props.vocab.cards ? (
        <form onSubmit={save}>
          <Accordion
            allowToggle="true"
            w="40rem"
            margin="0 auto"
            border="2px solid black"
            mt="1rem"
            bg="white"
          >
            {props.vocab.cards.map((card) => {
              return (
                <VocabUpdate
                  key={props.vocab.cards.indexOf(card)}
                  vocabInfo={card}
                />
              )
            })}
          </Accordion>
          <Center mt="1rem">
            <Button border="2px black solid" onClick={addCard}>
              Add
            </Button>
            <Button type="submit" border="2px black solid" m="0 1rem">
              Save
            </Button>
            <Button as="a" border="2px black solid" onClick={download}>
              Download
            </Button>
          </Center>
        </form>
      ) : (
        <NoVocab />
      )}
      <a download ref={downloadRef} style={{ display: 'hidden' }} />
    </React.Fragment>
  )
}

export default List
