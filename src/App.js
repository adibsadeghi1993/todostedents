import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./compoents/Form";
import TodoList from "./compoents/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [select, setSelect] = useState("all");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFiltredTodos] = useState([]);
  console.log({todos});
  console.log({filteredTodos})

  const filteredFunction = () => {
    switch (select) {
      case "all":
        setFiltredTodos(todos);

        break;
      case "completed":
        setFiltredTodos(todos.filter(item=>item.completed));

        break;
      case "uncompleted":
        setFiltredTodos(todos.filter(item=>!item.completed));

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    filteredFunction();
    console.log("useeffect run");
  }, [select,todos]);

  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        setSelect={setSelect}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
