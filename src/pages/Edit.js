import List from '../components/List'

function Edit(props) {
  return <List vocab={props.vocabSet} updateList={props.update} />
}

export default Edit
