import { useState, useEffect } from 'react'
import { Center, Text, Button, Box, Flex } from '@chakra-ui/react'
import NoVocab from './NoVocab'

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false)

  function flip() {
    setIsFlipped((prev) => {
      return !prev
    })
  }

  function nextCard() {
    if (props.currentCard >= props.vocab.cards.length - 1) {
      props.setCurrentCard(0)
      setIsFlipped(false)
    } else {
      props.setCurrentCard((prev) => {
        return prev + 1
      })
      setIsFlipped(false)
    }
  }

  return props.vocab.cards ? (
    <Box>
      <Center
        border="2px solid black"
        bg="white"
        w="40rem"
        h="20rem"
        margin="0 auto"
        mt="2rem"
      >
        {isFlipped ? (
          <Text w="98%" textAlign="center">
            {props.vocab.cards[props.currentCard].definition}
          </Text>
        ) : (
          <Text w="98%" textAlign="center" fontSize="2rem">
            {props.vocab.cards[props.currentCard].word}
          </Text>
        )}
      </Center>
      <Flex m="0 auto" mt="1rem" w="10rem" justify="space-between">
        <Button onClick={flip} border="2px solid black">
          flip
        </Button>
        <Button onClick={nextCard} border="2px solid black">
          next
        </Button>
      </Flex>
    </Box>
  ) : (
    <NoVocab />
  )
}

export default Card
