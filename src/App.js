import './App.css';
import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import AddHero from "./components/FirebaseHeroData"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <AddHero />
    </div>
  );
}
