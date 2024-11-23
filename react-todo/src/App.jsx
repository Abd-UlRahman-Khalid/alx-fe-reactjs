import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("Todo App");

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoList />
    </div>
  );
};

export default App;
