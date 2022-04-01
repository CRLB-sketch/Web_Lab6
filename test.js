// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function Title(){
//     return (
//         <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
//     )
//   }
  
//   let theCount = 0;
//   let temps = 0;
//   let cardOne = 0;
//   let cardTwo = 0;
  
//   const Card = ({ ship, theImg }) => {
//     const [flipped, setFlipped] = React.useState(false);
//     const [ready, setReady] = React.useState(false);
    
//     function change(){
//       if(flipped == false){
//         setFlipped(!flipped)
//         theCount++
//         temps++
  
//         if(temps == 1){
//           cardOne = ship
//         }
//         if(temps == 2){
//           cardTwo = ship
//         }
  
//         if(temps == 2 && cardOne == cardTwo){
//           // console.log("Si coinciden")
//           setReady(true)
//           temps = 0
//         }
//         if(temps == 2 && cardOne != cardTwo){
//           // console.log("No coinciden")
//           temps = 0
//         }
//       }
//     }
  
//     return (
//       <div className="box a" onClick={change}>
//         {!flipped && <img className="the-image" src="img/card.png"></img>}
//         {flipped && <img className="the-image" src={theImg}></img>}
//       </div>
//     )
//   }
  
//   const defaultCards = [
//     {
//       ship: 1,
//       theImg: "img/ship1_m.png",
//     },
//     {
//       ship: 1,
//       theImg: "img/ship1_w.png",
//     },
//     {
//       ship: 2,
//       theImg: "img/ship2_m.png",
//     },
//     {
//       ship: 2,
//       theImg: "img/ship2_w.png",
//     },
//     {
//       ship: 3,
//       theImg: "img/ship3_m.png",
//     },
//     {
//       ship: 3,
//       theImg: "img/ship3_w.png",
//     },
//     {
//       ship: 4,
//       theImg: "img/ship4_m.png",
//     },
//     {
//       ship: 4,
//       theImg: "img/ship4_w.png",
//     },
//     {
//       ship: 5,
//       theImg: "img/ship5_m.png",
//     },
//     {
//       ship: 5,
//       theImg: "img/ship5_w.png",
//     }
//   ]
  
//   function Cards(){
  
//     const [cards, setCards] = React.useState(defaultCards)
    
//     return (
//       <div className="the-grid">
//         {cards.map((card) => <Card key={`${card.ship}-${card.theImg}`} {...card} />)}
//       </div>
//     )
//   }
  
  
//   function Contador(){
//     const[contador, setContador] = React.useState(0)
    
//     const frame = React.useCallback(() => {
//       setContador(theCount)
//       requestAnimationFrame(frame)
//     }, [])
    
//     React.useEffect(() => {
//       requestAnimationFrame(frame)
//     }, [])
  
//     return (
//       <div>
//         <h2>Movimientos tomados: {contador}</h2>
//       </div>
//     )
//   }
  
//   function App(){  
//     return (
//       <div>
//         <Title/>
//         <Contador/>
//         {/* <TestingT/>*/}
//         <Cards/>
//       </div>
//     )
//   }
  
//   ReactDOM.render(<App/>, document.getElementById("root"))

// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function Title(){
//     return (
//         <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
//     )
//   }
  
//   const Card = ({ ship, theImg, contador, setContador }) => {
//     const [flipped, setFlipped] = React.useState(false);
//     const [ready, setReady] = React.useState(false);
    
//     function change(){
//       if(flipped == false){
//         setFlipped(!flipped)
//         setContador(contador + 1)
//       }
//     }
  
//     return (
//       <div className="box a" onClick={change}>
//         {!flipped && <img className="the-image" src="img/card.png"></img>}
//         {flipped && <img className="the-image" src={theImg}></img>}
//       </div>
//     )
//   }
  
//   const defaultCards = [
//     {
//       ship: 1,
//       theImg: "img/ship1_m.png",
//     },
//     {
//       ship: 1,
//       theImg: "img/ship1_w.png",
//     },
//     {
//       ship: 2,
//       theImg: "img/ship2_m.png",
//     },
//     {
//       ship: 2,
//       theImg: "img/ship2_w.png",
//     },
//     {
//       ship: 3,
//       theImg: "img/ship3_m.png",
//     },
//     {
//       ship: 3,
//       theImg: "img/ship3_w.png",
//     },
//     {
//       ship: 4,
//       theImg: "img/ship4_m.png",
//     },
//     {
//       ship: 4,
//       theImg: "img/ship4_w.png",
//     },
//     {
//       ship: 5,
//       theImg: "img/ship5_m.png",
//     },
//     {
//       ship: 5,
//       theImg: "img/ship5_w.png",
//     }
//   ]
  
//   function Cards({contador, setContador}){
  
//     const [cards, setCards] = React.useState(defaultCards)
    
//     return (
//       <div className="the-grid">
//         {cards.map((card) => <Card 
//           ship={card.ship}
//           theImg={card.theImg}
//           contador={contador}
//           setContador={setContador}
//         />
//       )}
//       </div>
//     )
//   }
  
  
//   function Contador({contador}){  
//     return (
//       <div>
//         <h2>Movimientos tomados: {contador}</h2>
//       </div>
//     )
//   }
  
//   function App(){  
  
//     const[contador, setContador] = React.useState(0)
    
//     return (
//       <div>
//         {/* Titulo del juego de memoria */}
//         <Title/>
//         {/* Contador en general */}
//         <Contador
//           contador={contador}
//         />
//         {/* Mostrar todas las cartas */}
//         <Cards
//           contador={contador}
//           setContador={setContador}
//         />
//       </div>
//     )
//   }
  
//   ReactDOM.render(<App/>, document.getElementById("root"))

// ! ###################################################################
function Title(){
    return (
        <h1 className="title">Memory Game Of Love (Otaku Version)</h1>
    )
  }
  
  const Card = ({ ship, theImg, contador, setContador, setChecker }) => {
    const [flipped, setFlipped] = React.useState(false);
    const [ready, setReady] = React.useState(false);
    
    function change(){
      if(flipped == false){
        setFlipped(!flipped)
        setContador(contador + 1)
  
        if(contador % 2 == 0){
          setChecker({ship1:ship})
        }
        else{
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
  
  function Cards({contador, setContador, setChecker}){
  
    const [cards, setCards] = React.useState(defaultCards)
    
    return (
      <div className="the-grid">
        {cards.map((card) => <Card 
          ship={card.ship}
          theImg={card.theImg}
          contador={contador}
          setContador={setContador}
          setChecker={setChecker}
        />
      )}
      </div>
    )
  }
  
  
  function Contador({contador, checker}){  
    return (
      <div>
        <h2>Movimientos tomados: {contador}</h2>
        <h2>Revisar parejas: {checker.ship1} Y {checker.ship2}</h2>
      </div>
    )
  }
  
  function App(){  
    
    const[contador, setContador] = React.useState(0)
    const[checker, setChecker] = React.useState({
      ship1 : 0,
      ship2 : 0
    })
    
    return (
      <div>
        {/* Titulo del juego de memoria */}
        <Title/>
        {/* Contador en general */}
        <Contador
          contador={contador}
          checker={checker}
        />
        {/* Mostrar todas las cartas */}
        <Cards
          contador={contador}
          setContador={setContador}
          setChecker={setChecker}
        />
      </div>
    )
  }
  
  ReactDOM.render(<App/>, document.getElementById("root"))