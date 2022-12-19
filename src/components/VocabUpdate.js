import {
  Textarea,
  Input,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

function VocabUpdate(props) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>{props.vocabInfo.word}</AccordionButton>
      </h2>
      <AccordionPanel>
        <fieldset>
          <FormControl isRequired>
            <FormLabel>Word:</FormLabel>
            <Input defaultValue={props.vocabInfo.word} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Definition:</FormLabel>
            <Textarea defaultValue={props.vocabInfo.definition} />
          </FormControl>
        </fieldset>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default VocabUpdate
