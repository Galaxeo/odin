import { useState } from 'react'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <ListItem key={animal} animal={animal} /> : null;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <div>
        <h1>Animals: </h1>
        <ul>
          <List animals={animals} />
        </ul>
      </div>
    </>
  )
}

export default App
