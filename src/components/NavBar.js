import { Link, Box, Flex } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

function NavBar(props) {
  return (
    <Box
      variant="solid-rounded"
      align="center"
      width="50rem"
      m="0 auto"
      mt=".5rem"
      bg="white"
      border="2px solid black"
      borderRadius="2rem"
      pading=".5rem 0"
    >
      <Flex
        padding=".2rem 0"
        justify="center"
        columnGap="5rem"
        fontSize="1.2rem"
        fontWeight="bold"
      >
        <Link as={ReactLink} to="/">
          Study
        </Link>
        <Link as={ReactLink} to="/edit">
          Edit
        </Link>
        <Link as={ReactLink} to="/create">
          Create
        </Link>
      </Flex>
    </Box>
  )
}

export default NavBar
