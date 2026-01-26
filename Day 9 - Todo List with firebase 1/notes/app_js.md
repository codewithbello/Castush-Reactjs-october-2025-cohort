// const handleShowForm = () => {
// if (showForm === true) {
// setShowForm(false);
// } else {
// setShowForm(true);
// }
// };

// const updateTodo = () => {
// const search = todos.filter((item, index) => index == todoIndex);
// const currentTodo = search[0];
// // Change the todo value
// currentTodo.todo = todo;
// setTodo("");
// setTodoIndex("");
// };
// const handleEdit = (index) => {
// setTodoIndex(String(index));
// // console.log('Edit btn pressed')
// };

// const handleTodoChange = (event) => {
// event.preventDefault;
// setTodo(event.target.value);
// };

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

// const handleAdd = () => {
// // console.log("Before", todos);
// if (todo) {
// const newTodo = {
// todo: todo,
// isComplete: false,
// timeStamp: new Date(),
// };

// setTodos([newTodo, ...todos]);
// // console.log("After", todos);
// setTodo("");
// }
// };

// // Side Effect hook that automatically fires each time the todoIndex changes
// useEffect(() => {
// console.log("todoIndex changes");
// if (todoIndex.length > 0) {
// const search = todos.filter((item, index) => index == todoIndex);
// console.log("Search", search);
// setTodo(search[0].todo);
// }
// }, [todoIndex, todos]);

// // Delete Handler Function

// const handleDelete = (index) => {
// /\*
// Algorithm

// 1. to get the index of the todo
// 2. implement the filter out the index from the todos
// 3. setTodos with the new filtered data
// \*/
// //1. Get the index
// // alert(index);
// // console.log(index);

// //2.Filter out the index
// // This gives all todo except the selected index
// const newTodos = todos.filter((item, idx) => idx !== index);
// console.log("Delete: New Todos", newTodos);

// //3. Update the todos using setTodos
// setTodos(newTodos);
// };
