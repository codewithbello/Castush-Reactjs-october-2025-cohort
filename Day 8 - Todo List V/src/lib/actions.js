const storeKey = "todos";

export function saveTodo(todo) {
  let updatedTodos = [];

  // Create a time stamp
  const timeStamp = new Date().toLocaleString();

  // Create new todo item
  const newTodo = {
    todo: todo,
    isComplete: false,
    timeStamp: timeStamp,
  };

  // Get the existing stored todos
  const todos = localStorage.getItem(storeKey);

  if (!todos) {
    updatedTodos = [newTodo];
    // updatedTodos = updatedTodos.push(newTodo))
  } else {
    // Convert the todos from string to object array
    const todosObj = JSON.parse(todos);
    // Concatenate or join the newTodo with the previous todo (i.e., todosObj)
    updatedTodos = [newTodo, ...todosObj];
  }

  //Save the updated todos in the local storage
  localStorage.setItem(storeKey, JSON.stringify(updatedTodos));
  return updatedTodos;
}

export const getAllTodos = () => {
  let todosObj = [];

  // Get the existing stored todos
  const todos = localStorage.getItem(storeKey);
  console.log("GetTodos", todos);

  if (todos) {
    // Convert the todos from string to object array
    todosObj = JSON.parse(todos);
  }
  return todosObj;
};

// Updating

// Deleting
