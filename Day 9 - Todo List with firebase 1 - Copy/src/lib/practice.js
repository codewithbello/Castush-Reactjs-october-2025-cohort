import { saveTodo, getAllTodos } from "./actions.js";
let todo = {
  name: "coding",
  isComplete: false,
  timestamp: new Date(),
};

const result = saveTodo(todo);
console.log(result);
