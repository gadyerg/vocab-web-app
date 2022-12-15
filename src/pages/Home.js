import { Flex, Button, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';

function Home() {
  const fileSelector = useRef(null);
  const [currentList, setCurrentList] = useState({});

  console.log(currentList)
  function openSelector() {
    fileSelector.current.click()
  }

  function setList(evt) {
    const reader = new FileReader();
    reader.readAsText(evt.target.files[0])
    reader.onload = (evt) => {
      const data = JSON.parse(evt.target.result);
      setCurrentList(data)
    }
  }

  return (
    <Flex m='0 auto' w='16rem' justifyContent='space-between' mt='5rem'>
      <Button>Create New List</Button>
      <Button onClick={openSelector}>Load list</Button>
      <Input type='file' ref={fileSelector} display='none' accept='.json' onChange={setList} />
    </Flex>
  )
}

export default Home;
