import React from 'react'
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
                <AccordionPanel>{card.definition}</AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      ) : (
        <p>Load a list</p>
      )}
    </React.Fragment>
  )
}

export default List
