function Title(){
  return (
      <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
  )
}

const Card = ({ ship, theImg, doneFlipped, manager, setManager }) => {
  const [flipped, setFlipped] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  
  function change(){
    if(flipped == false){
      setFlipped(!flipped)
      setManager({ contador: manager.contador + 1, ship1: manager.ship1, ship2: manager.ship2, temps: manager.temps + 1})
      
      if(manager.temps == -1){
        setManager({ contador: manager.contador+1, ship1: ship, ship2: manager.ship2, temps: manager.temps+1})
      }
                            
      if(manager.temps % 2 == 0 ){
        setManager({ contador: manager.contador+1, ship1: manager.ship1, ship2: ship, temps: -1})
      }
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
  { ship: 1, theImg: "img/ship1_m.png", flipped: false },
  { ship: 1, theImg: "img/ship1_w.png", flipped: false },
  { ship: 2, theImg: "img/ship2_m.png", flipped: false },
  { ship: 2, theImg: "img/ship2_w.png", flipped: false },
  { ship: 3, theImg: "img/ship3_m.png", flipped: false },
  { ship: 3, theImg: "img/ship3_w.png", flipped: false },
  { ship: 4, theImg: "img/ship4_m.png", flipped: false },
  { ship: 4, theImg: "img/ship4_w.png", flipped: false },
  { ship: 5, theImg: "img/ship5_m.png", flipped: false },
  { ship: 5, theImg: "img/ship5_w.png", flipped: false },
  { ship: 6, theImg: "img/ship6_m.png", flipped: false },
  { ship: 6, theImg: "img/ship6_w.png", flipped: false },
  { ship: 7, theImg: "img/ship7_m.png", flipped: false },
  { ship: 7, theImg: "img/ship7_w.png", flipped: false },
  { ship: 8, theImg: "img/ship8_m.png", flipped: false },
  { ship: 8, theImg: "img/ship8_w.png", flipped: false },
]

function Cards({manager, setManager}){

  const [cards, setCards] = React.useState(defaultCards)

  if(manager.temps == -1 ){
    if(manager.ship1 === manager.ship2){
      console.log("SI SON UWU")
    }
    else{
      console.log("NO SON >:v")
    }
  }
  
  return (
    <div className="the-grid">
      {cards.map((card) => <Card 
        ship={card.ship}
        theImg={card.theImg}
        doneFlipped={card.flipped}
        manager={manager}
        setManager={setManager}
      />
    )}
    </div>
  )
}


function Contador({manager}){  
  return (
    <div>
      <h2>Movimientos tomados: {manager.contador}</h2>
      {/* <h2>Prueba temps: {manager.temps}</h2> */}
      <h2>Revisar parejas: {manager.ship1} Y {manager.ship2}</h2>
    </div>
  )
}

function App(){  
  
  const[manager, setManager] = React.useState({
    contador: 0,
    ship1 : 0,
    ship2 : 0,
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