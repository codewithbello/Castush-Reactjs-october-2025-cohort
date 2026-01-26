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
export function updateTodo(todo, todoIndex) {
  //Get the existing stored todos
  const todos = localStorage.getItem(storeKey);

  // Convert the todos from string to object array
  const todosObj = JSON.parse(todos);
  console.log("Update:All existing todos", todosObj);

  const search = todosObj.filter((item, index) => index == todoIndex);
  console.log("Update:Searched Todo", search);
  const currentTodo = search[0];
  currentTodo.todo = todo;
  console.log("Update:currentTodo Todo", currentTodo);

  // Convert to JSON string
  const todosString = JSON.stringify(todosObj);

  //Save the updated todos in the local storage
  localStorage.setItem(storeKey, todosString);
}

// IsComplete

export function completeTodos(checkboxIndex) {
  //Get the existing stored todos
  const todos = localStorage.getItem(storeKey);

  // Convert the todos from string to object array
  const todosObj = JSON.parse(todos);
  console.log("isComplete:All existing todos", todosObj);

  const search = todosObj.filter((item, index) => index == checkboxIndex);
  console.log("isComplete:Searched Todo", search);
  const currentTodo = search[0];

  if (currentTodo.isComplete) {
    currentTodo.isComplete = false;
  } else {
    currentTodo.isComplete = true;
  }

  console.log("isComplete:currentTodo Todo", currentTodo);

  // Convert to JSON string
  const todosString = JSON.stringify(todosObj);

  //Save the updated todos in the local storage
  localStorage.setItem(storeKey, todosString);
}

// const handleIsComplete = (event, checkboxIndex) => {
// event.preventDefault;
// console.log("Iscomplete", event.target.value, checkboxIndex);
// const search = todos.filter((item, index) => index == checkboxIndex);
// console.log("handleIscomplete:search-before", search);
// let currentTodo = search[0];
// // Change the todo value

// if (currentTodo.isComplete) {
// currentTodo.isComplete = false;
// } else {
// currentTodo.isComplete = true;
// }

// console.log("handleIscomplete:search-after", currentTodo);

// const remainingTodos = todos.filter(
// (item, index) => index !== checkboxIndex
// );
// setTodos([currentTodo, ...remainingTodos]);
// };
// Deleting
