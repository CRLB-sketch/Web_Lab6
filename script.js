/*****************************************************************************************
* Universidad del Valle de Guatemala
* Sistemas y Tecnologías Web - Sección 10
*
* Laboratorio 6 - React
* 
* ! script : Donde se llevará a cabo todo el código de React para el juego de memoria
*
* @author   Cristian Fernando Laynez Bachez - 201281
* @date     16-Marzo-2022
****************************************************************************************/

const Title = () => {
  return (
      <h1 className="title">Memory Game Of Finding Love (Otaku Version)</h1>
  )
}

const Controller = ({manager}) => {  
  return (
    <div>
      <h2>Movements taked: {manager.counter}</h2>      
    </div>
  )
}

const Card = ({ card, manager, setManager, flipped }) => {
    
  const change = () => {
    (manager.selected1 === null) ? setManager({ counter: manager.counter+1, selected1: card, selected2: manager.selected2}) 
      : setManager({ counter: manager.counter+1, selected1: manager.selected1, selected2: card})
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : "backed"}>
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

const Cards = ({manager, setManager}) => {
  
  const insertCardsRandom = (theCards) => {
    const cardsRandom = [...theCards]
    for (var i = cardsRandom.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardsRandom[i];
        cardsRandom[i] = cardsRandom[j];
        cardsRandom[j] = temp;
    }        
    return cardsRandom
  }

  const [cards, setCards] = React.useState(insertCardsRandom(defaultCards))
  const [total, setTotal] = React.useState(0)  
    
  // Para esta seccion se llevará a cabo la verificación de cartas
  React.useEffect(() => {
    if(manager.selected1 && manager.selected2){
      if(manager.selected1.ship === manager.selected2.ship){
        setCards(beforeCards => {
          return beforeCards.map(card => {            
            return (card.ship === manager.selected1.ship) ? {... card, done: true} : card
          })
        })
        setManager({ counter: manager.counter, selected1: null, selected2: null,})
        setTotal(total + 2)
      }
      else{
        setTimeout(() => {
          setManager({ counter: manager.counter, selected1: null, selected2: null,})
        }, 1000)        
      }
    }
    
  }, [manager.selected1, manager.selected2])
      
  return (
    <div>
      <div>        
        { (total === cards.length) && <h2>GANASTE :D</h2> }
      </div>
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
    </div>
  )
}

const App = () => {  
  
  const[manager, setManager] = React.useState({
    counter: 0,
    selected1 : null,
    selected2 : null,
  })
  
  return (
    <div>
      {/* Titulo del juego de memoria */}
      <Title/>
      {/* Controller en general */} 
      <Controller
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