let todo = {
    name:"coding",
    isComplete:false,
    timestamp: new Date()
}

let todos =[]
console.log(todo)


// Add todo to todos

todos.push(todo)
console.log('TODOS', todos)

todo = {
    name:"sleeping",
    isComplete:false,
    timestamp: new Date()
}

todos.push(todo)
console.log('TODOS', todos)

const setTodo = (newItem)=>{
todos = newItem
}

// setTodo("hello")
// console.log('TODOS', todos)

// Distruction Arrays

console.log('Arrays Distructuring')
console.log(...todos)

todo = {
    name:"travelling",
    isComplete:false,
    timestamp: new Date()
}
let newTodos = [todo,...todos]
console.log('NEW TODOS', newTodos)

setTodo(newTodos)
console.log('TODOS', todos)


todos.map((item, index)=>{

    console.log('---------------------------', index)
    console.log(item.name)
    console.log(item.isComplete)
    console.log(item.timestamp)

})



const search = todos.filter((item, index)=>index === 2)

console.log()
console.log("SEARCH", search)