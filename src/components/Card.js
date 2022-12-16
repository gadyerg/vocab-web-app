import { useState } from 'react'
import { Center, Text, Button, Box, Flex } from '@chakra-ui/react'
import NoVocab from './NoVocab'

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  function flip() {
    setIsFlipped((prev) => {
      return !prev
    })
  }

  function nextCard() {
    if (currentCard >= props.vocab.cards.length - 1) {
      setCurrentCard(0)
      setIsFlipped(false)
    } else {
      setCurrentCard((prev) => {
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
            {props.vocab.cards[currentCard].definition}
          </Text>
        ) : (
          <Text w="98%" textAlign="center" fontSize="2rem">
            {props.vocab.cards[currentCard].word}
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
