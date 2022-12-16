import React from 'react'
import VocabUpdate from './VocabUpdate'
import NoVocab from './NoVocab'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'

function List(props) {
  return (
    <React.Fragment>
      {props.vocab.cards ? (
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
              <AccordionItem>
                <h2>
                  <AccordionButton>{card.word}</AccordionButton>
                </h2>
                <AccordionPanel>
                  <VocabUpdate
                    onVocabChange={props.updateVocab}
                    vocabInfo={card}
                  />
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      ) : (
        <NoVocab />
      )}
    </React.Fragment>
  )
}

export default List
