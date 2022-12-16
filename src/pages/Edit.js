import List from '../components/List'

function Edit(props) {
  return <List vocab={props.vocabSet} updateList={props.list} />
}

export default Edit
