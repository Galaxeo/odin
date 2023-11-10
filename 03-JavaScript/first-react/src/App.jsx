import { useState } from "react";
import "./App.css";

function ListItem({ color = "blue", fontSize = "14", animal }) {
  const styl = {
    color: color,
    fontSize: fontSize + "px",
  };
  return <li style={styl}>{animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? (
          <ListItem key={animal} animal={animal} color={"red"} fontSize={12} />
        ) : (
          <ListItem key={animal} animal={animal} />
        );
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <>
      <div>
        <h1>Animals: </h1>
        <ul>
          <List animals={animals} />
          {animalsList}
        </ul>
      </div>
    </>
  );
}

export default App;
