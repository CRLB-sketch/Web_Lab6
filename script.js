const Title = () => {
  return (
      <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
  )
}

const Card = ({ card, manager, setManager, flipped }) => {
    
  const change = () => {
    // console.log(manager.selected1.ship + " and " + manager.selected2.ship)   
    // console.log(manager.selected1 + " and " + manager.selected2)   
    if(manager.selected1 === null){
      console.log("Primera carta registrada: " + card.theImg)
      setManager({ contador: manager.contador+1, selected1: card, selected2: manager.selected2, temps: manager.temps+1})
    }
    else {
      console.log("Segunda carta registrada: " + card.theImg)
      setManager({ contador: manager.contador+1, selected1: manager.selected1, selected2: card, temps: -1})
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.theImg} alt="card front" />
        <img 
          className="back" 
          src="img/card.png"
          onClick={change}
          alt="card back" 
        />
      </div>
    </div>
  )
}

const defaultCards = [
  { ship: 1, theImg: "img/ship1_m.png", done: false },
  { ship: 1, theImg: "img/ship1_w.png", done: false },
  { ship: 2, theImg: "img/ship2_m.png", done: false },
  { ship: 2, theImg: "img/ship2_w.png", done: false },
  { ship: 3, theImg: "img/ship3_m.png", done: false },
  { ship: 3, theImg: "img/ship3_w.png", done: false },
  { ship: 4, theImg: "img/ship4_m.png", done: false },
  { ship: 4, theImg: "img/ship4_w.png", done: false },
  { ship: 5, theImg: "img/ship5_m.png", done: false },
  { ship: 5, theImg: "img/ship5_w.png", done: false },
  { ship: 6, theImg: "img/ship6_m.png", done: false },
  { ship: 6, theImg: "img/ship6_w.png", done: false },
  { ship: 7, theImg: "img/ship7_m.png", done: false },
  { ship: 7, theImg: "img/ship7_w.png", done: false },
  { ship: 8, theImg: "img/ship8_m.png", done: false },
  { ship: 8, theImg: "img/ship8_w.png", done: false },
]

function Cards({manager, setManager}){

  const [cards, setCards] = React.useState(defaultCards)

  if(manager.temps == -1 ){
    console.log("Revisar:" + manager.selected1 + " & " + manager.selected2)
    if(manager.selected1 === manager.selected2){
      console.log("SI SON UWU")
    }
    else{
      console.log("NO SON >:v")
      setTimeout(() => {
        setManager({ contador: manager.contador+1, selected1: null, selected2: null, temps: -1})
      }, 1000)
      
    }
  }
  
  return (
    <div className="the-grid">
      {cards.map((card) => 
      <Card 
        card={card}
        manager={manager}
        setManager={setManager}
        flipped={card === manager.selected1 || card === manager.selected2 || card.done}
      />
    )}
    </div>
  )
}


function Contador({manager}){  
  return (
    <div>
      <h2>Movimientos tomados: {manager.contador}</h2>
      <h2>Temps: {manager.temps}</h2>
    </div>
  )
}

function App(){  
  
  const[manager, setManager] = React.useState({
    contador: 0,
    selected1 : null,
    selected2 : null,
    temps: -1
  })
  
  return (
    <div>
      {/* Titulo del juego de memoria */}
      <Title/>
      {/* Contador en general */} 
      <Contador
        manager={manager}
      />
      {/* Mostrar todas las cartas */}
      <Cards
        manager={manager}
        setManager={setManager}
      />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))