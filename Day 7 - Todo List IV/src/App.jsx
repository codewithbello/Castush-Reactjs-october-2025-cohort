import React, { useState, useEffect } from "react";
import Header from "./components/Header";

// aistudio.google.com/live
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState("");

  const handleShowForm = () => {
    if (showForm === true) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const updateTodo = () => {
    const search = todos.filter((item, index) => index == todoIndex);
    const currentTodo = search[0];
    // Change the todo value
    currentTodo.todo = todo;
    setTodo("");
    setTodoIndex("");
  };
  const handleEdit = (index) => {
    setTodoIndex(String(index));
    // console.log('Edit btn pressed')
  };

  const handleTodoChange = (event) => {
    event.preventDefault;
    setTodo(event.target.value);
  };

  const handleIsComplete = (event, checkboxIndex) => {
    event.preventDefault;
    console.log("Iscomplete", event.target.value, checkboxIndex);
    const search = todos.filter((item, index) => index == checkboxIndex);
    console.log("handleIscomplete:search-before", search);
    let currentTodo = search[0];
    // Change the todo value

    if (currentTodo.isComplete) {
      currentTodo.isComplete = false;
    } else {
      currentTodo.isComplete = true;
    }

    console.log("handleIscomplete:search-after", currentTodo);

    const remainingTodos = todos.filter(
      (item, index) => index !== checkboxIndex
    );
    setTodos([currentTodo, ...remainingTodos]);
  };

  const handleAdd = () => {
    // console.log("Before", todos);
    if (todo) {
      const newTodo = {
        todo: todo,
        isComplete: false,
        timeStamp: new Date(),
      };

      setTodos([newTodo, ...todos]);
      // console.log("After", todos);
      setTodo("");
    }
  };

  // Side Effect hook that automatically fires each time the todoIndex changes
  useEffect(() => {
    console.log("todoIndex changes");
    if (todoIndex.length > 0) {
      const search = todos.filter((item, index) => index == todoIndex);
      console.log("Search", search);
      setTodo(search[0].todo);
    }
  }, [todoIndex, todos]);

  // Delete Handler Function

  const handleDelete = (index) => {
    /*
    Algorithm

    1. to get the index of the todo
    2. implement the filter out the index from the todos
    3. setTodos with the new filtered data
    */
    //1. Get the index
    // alert(index);
    // console.log(index);

    //2.Filter out the index
    // This gives all todo except the selected index
    const newTodos = todos.filter((item, idx) => idx !== index);
    console.log("Delete: New Todos", newTodos);

    //3. Update the todos using setTodos
    setTodos(newTodos);
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
                    <p style={{ color: "gray" }}>
                      {item.timeStamp.toLocaleTimeString()}
                    </p>
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
