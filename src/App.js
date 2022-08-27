import './App.css';
import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import AddHero from "./components/AddHero"
import data from "./data"


export default function App() {
  const [heroes, setHeroes] = React.useState(data)

  const [showAll, setShowAll] = React.useState(false)

	function toggleAll() {
    setHeroes(prevHeroes => {
      return (
        prevHeroes.map(prev => {
          return {...prev, on: !showAll}
        })
      )
    })
    setShowAll(prevShowAll => !prevShowAll)
	}

  return (
    <div className="App">
      <Header shown={showAll} function={toggleAll} />
      <Body heroes={heroes} setHeroes={setHeroes} />
      <AddHero setHeroes={setHeroes} />
    </div>
  );
}
