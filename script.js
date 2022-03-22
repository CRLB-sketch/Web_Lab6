// import TestingT from "Components/TestingT"
// import TestingT from "./Components/TestingT"

function Title(){
  return (
      <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
  )
}

let theCount = 0;
let temps = 0;
let cardOne = 0;
let cardTwo = 0;

const Card = ({ ship, theImg }) => {
  const [flipped, setFlipped] = React.useState(false);
  
  function change(){
    if(flipped == false){
      setFlipped(!flipped)
      theCount++;
    }
  }

  return (
    <div className="box a" onClick={change}>
      {!flipped && <img className="the-image" src="img/card.png"></img>}
      {flipped && <img className="the-image" src={theImg}></img>}
    </div>
  )
}

const defaultCards = [
  {
    ship: 1,
    theImg: "img/ship1_m.png",
  },
  {
    ship: 1,
    theImg: "img/ship1_w.png",
  },
  {
    ship: 2,
    theImg: "img/ship2_m.png",
  },
  {
    ship: 2,
    theImg: "img/ship2_w.png",
  },
  {
    ship: 3,
    theImg: "img/ship3_m.png",
  },
  {
    ship: 3,
    theImg: "img/ship3_w.png",
  },
  {
    ship: 4,
    theImg: "img/ship4_m.png",
  },
  {
    ship: 4,
    theImg: "img/ship4_w.png",
  },
  {
    ship: 5,
    theImg: "img/ship5_m.png",
  },
  {
    ship: 5,
    theImg: "img/ship5_w.png",
  }
]

function Cards(){

  const [cards, setCards] = React.useState(defaultCards)
  
  return (
    <div className="the-grid">
      {cards.map((card) => <Card key={`${card.ship}-${card.theImg}`} {...card} />)}
    </div>
  )
}


function Contador(){
  const[contador, setContador] = React.useState(0)
  
  const frame = React.useCallback(() => {
    setContador(theCount)
    requestAnimationFrame(frame)
  }, [])
  
  React.useEffect(() => {
    requestAnimationFrame(frame)
  }, [])

  return (
    <div>
      <h2>Movimientos tomados: {contador}</h2>
    </div>
  )
}

function App(){  
  return (
    <div>
      <Title/>
      <Contador/>
      {/* <TestingT/>*/}
      <Cards/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))