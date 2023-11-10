import { useState } from "react";
import "./App.css";

function ListItem({ color = "blue", fontSize = "14", animal }) {
  const styl = {
    color: color,
    fontSize: fontSize + "px",
  };
  return <li style={styl}>{animal}</li>;
}
function Input(props) {
  const [value, setValue] = useState("");
  return <input type="text" value={value}></input>;
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
function Person({ first, last, age }) {
  const [person, setPerson] = useState({ first: first, last: last, age: age });

  // BAD - Don't do this!
  const handleIncreaseAge1 = () => {
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  };

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const setFirst = (first) => {
    const newPerson = { ...person, first: first };
    setPerson(newPerson);
  };
  const setLast = (last) => {
    const newPerson = { ...person, last: last };
    setPerson(newPerson);
  };
  // Now reflects on screen from input boxes
  return (
    <>
      <h1>{person.first + " " + person.last}</h1>
      <input
        type="text"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
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
          <Person first="justin" last="cheok" age={22} />
        </ul>
      </div>
    </>
  );
}

export default App;
