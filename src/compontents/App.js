import React from "react";

// COMPONETS
import Form from "./Form";
import ThingsDone from "./ThingsDone";
import ToDoList from "./ToDoList";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ThingsDone />
      <Form />
    </div>
  );
}

export default App;
