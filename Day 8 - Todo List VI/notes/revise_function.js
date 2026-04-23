let todos = [];

const setTodos = (newTodos) => {
  todos = newTodos;
};
const handleTodos = (todo) => {
  const newTodos = [todo, ...todos];
  setTodos(newTodos);
};

//---------------------------
const todo1 = {
  todo: "Coding",
  isComplete: false,
  timeStamp: new Date().toLocaleString(),
};

handleTodos(todo1);
console.log(todos);
//---------------------------

//---------------------------
const todo2 = {
  todo: "Sleeping",
  isComplete: false,
  timeStamp: new Date().toLocaleString(),
};

handleTodos(todo2);
console.log(todos);
//---------------------------

// Search
let todoIndex = 0;

let search = todos.filter((item, index) => index == todoIndex);
console.log("Search", search);
let currentTodo = search[0];
console.log("currentTodo", currentTodo);

console.log("currentTodo.isComplete->before", currentTodo.isComplete);

if (currentTodo.isComplete) {
  currentTodo.isComplete = false;
} else {
  currentTodo.isComplete = true;
}

console.log("currentTodo.isComplete->after", currentTodo.isComplete);

console.log(todos);
