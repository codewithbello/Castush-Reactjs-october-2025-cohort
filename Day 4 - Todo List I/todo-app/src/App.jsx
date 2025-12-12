import React, { useState } from "react";
import Header from "./components/Header";
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleShowForm = () => {
    if (showForm === true) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const handleTodoChange = (event) => {
    event.preventDefault;
    setTodo(event.target.value);
  };

  const handleAdd = () => {
    console.log("Before", todos);
    if (todo) {
      const newTodo = {
        todo: todo,
        isComplete: false,
        timeStamp: new Date(),
      };

      setTodos([newTodo, ...todos]);
      console.log("After", todos);
      setTodo("");
    }
  };

  return (
    <div className="container">
      <main style={{ width: "50%" }}>
        {/* Header Section */}
        <Header handleShowForm={handleShowForm} />
        {/* Form*/}

        {showForm && (
          <div className="form">
            <input
              className="form_input"
              type="text"
              value={todo}
              placeholder="enter new task e.g., coding"
              onChange={(event) => handleTodoChange(event)}
            />
            <button
              onClick={handleAdd}
              className="btn"
              style={{ width: "100px" }}
            >
              Add
            </button>
          </div>
        )}

        {/* Todos */}

        {todos.length > 0 && (
          <div>
            {todos.map((item) => (
              <p>{item.todo}</p>
            ))}
          </div>
        )}

        {todos.length == 0 && <p>No todo</p>}
      </main>
    </div>
  );
};

export default App;
