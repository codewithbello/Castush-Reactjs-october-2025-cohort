import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { saveTodo, getAllTodos } from "./lib/actions";
// aistudio.google.com/live
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState("");

  const handleTodoChange = (event) => {
    event.preventDefault;
    setTodo(event.target.value);
  };

  const handleShowForm = () => {
    if (showForm === true) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  useEffect(() => {
    const result = getAllTodos();
    setTodos(result);
  }, []);

  const handleAdd = () => {
    if (!todo) {
      return;
    }

    const result = saveTodo(todo);
    if (result) {
      setTodos(result);
      setTodo("");
    }
  };

  const handleDelete = () => {};

  const handleEdit = () => {};

  const handleIsComplete = () => {};

  const updateTodo = () => {};

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
              onClick={todoIndex.length > 0 ? updateTodo : handleAdd}
              className="btn"
              style={{ width: "100px" }}
            >
              {todoIndex.length > 0 ? "Update" : "Add"}
            </button>
          </div>
        )}

        {/* Todos */}

        {todos.length > 0 && (
          <div>
            {todos.map((item, index) => (
              <div key={index} className="todo">
                <div className="todo-detail-container">
                  <input
                    type="checkbox"
                    name="isComplete"
                    checked={item.isComplete ? true : false}
                    value={item.isComplete}
                    onChange={(event) => handleIsComplete(event, index)}
                  ></input>

                  <div className="todo-details">
                    <p
                      style={{
                        textDecoration: item.isComplete
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.todo}
                    </p>
                    <p style={{ color: "gray" }}>{item.timeStamp}</p>
                  </div>
                </div>
                <div className="todo-action-btns">
                  <button className="btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {todos.length == 0 && <p>No todo</p>}
      </main>
    </div>
  );
};

export default App;
