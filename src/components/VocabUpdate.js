import { Textarea, Input, Box } from '@chakra-ui/react'

function VocabUpdate(props) {
  return (
    <Box>
      <Input value={props.vocabInfo.word} />
      <Textarea value={props.vocabInfo.definition} />
    </Box>
  )
}

export default VocabUpdate
