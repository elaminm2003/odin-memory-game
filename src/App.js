import React, {useState} from "react"
import PlayerCards from './components/PlayerCards'
import './styles.css'

function App() {
  // const salah = require(`./assets/salah.jpeg`)
  const [fullList, setName] = useState([
    {name: "Salah", img: "/assets/salah.jpeg", clicked: false},
    {name: 'Messi', img: "/assets/messi.jpeg", clicked: false},
    {name: 'Ronaldo', img: "/assets/ronaldo.jpeg", clicked: false},
    {name: 'Abu Trika', img: "/assets/abutrika.jpeg", clicked: false},
    {name: 'De Bruyne', img: "/assets/deBruyne.jpeg", clicked: false}, 
    {name: 'Haaland', img: "/assets/haaland.jpeg", clicked: false},
    {name: 'Mbappe', img: "/assets/mbappe.jpeg", clicked: false},
    {name: 'Modric', img: "/assets/modric.jpeg", clicked: false},
    {name: 'Ramos', img: "/assets/ramos.jpeg", clicked: false},
    {name: 'Van Dijk', img: "/assets/vandijk.jpeg", clicked: false},
  ])
  

  
  return (
    <div>
      <h1>Soccer Memory</h1>
      {/* <img src={fullList[0].img} alt="salah"></img> */}
      <div>
        <PlayerCards fullList={fullList}/>
      </div>
    </div>
    
  );
}

export default App;
