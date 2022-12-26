import Card from '../components/Card'

function Home(props) {
  return <Card vocab={props.vocabSet} currentCard={props.pos} setCurrentCard={props.setPos} />
}

export default Home
