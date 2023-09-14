import React, { Fragment } from "react";
import InputTodo from "./components/inputTodo";
import "./App.css";
import ListTodos from "./components/listTodo";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
