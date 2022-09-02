import './App.css';
import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"

export default function App() {
  return (
    <div className="App" key="app">
      <Header />
      <Body />
    </div>
  );
}
