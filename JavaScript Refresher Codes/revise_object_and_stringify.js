const car = {
  brand: "Toyota",
  model: "Camry 2025",
  year: 2025,
  doors: 4,
};

console.log(car);
console.log(typeof car);

// Accesing an object

// Method 1
console.log("Brand->", car.brand);
//Method 2
console.log("Model->", car["model"]);
//Method 3 m- Destructuring

const { doors } = car;
console.log("Doors->", doors);

// we can get all of the object keys/or properties

const person = {
  name: "Ahmad Shehu",
  age: 16,
  location: "Ilorin",
  skills: ["JavaScript", "ReactJs", "FireBase"],
};

const { name, age, location, skills } = person;
console.log("Skills=", skills);

//Example 3

const company = {
  coy_name: "Castush Integrated Limited",
  size: 5,
  email: "hello@castush.com.ng",
  city: "Ilorin",
};

const { coy_name, size, ...others } = company;

console.log("Company Name is", coy_name);
console.log("Other Company Details:", others);

// String
first_name = "Ahmad";
console.log(first_name);
console.log(typeof first_name);

// OBJECT STRINGIFY
const car_str = JSON.stringify(car);
console.log("car_string:", car_str);
console.log("car_string TYPE:", typeof car_str);

// Convert back to an Object

const car_back_to_obj = JSON.parse(car_str);
console.log("Car to OBJ", car_back_to_obj);
console.log(typeof car_back_to_obj);
console.log(car_back_to_obj.brand);

// Example with todos

const todos = [
  {
    todo: "Coding",
    isComplete: false,
    timeStamp: new Date().toLocaleTimeString(),
  },
  {
    todo: "Sleeping",
    isComplete: false,
    timeStamp: new Date().toLocaleTimeString(),
  },
  {
    todo: "Learn firebase",
    isComplete: false,
    timeStamp: new Date().toLocaleTimeString(),
  },
  {
    todo: "learn storage persistent",
    isComplete: false,
    timeStamp: new Date().toLocaleTimeString(),
  },
];

console.log(todos);
// Print to appear the same with it is on the code
console.log(JSON.stringify(todos, null, 2));

// Let us STRINGIFY TODOS

const todos_string = JSON.stringify(todos);
console.log(todos_string);

console.log("Display", todos_string[0]);

const myName = "Ahmad Shehu";
console.log("Name Index", myName[2]);

// Note: for us to access the item of the tods_string, we need to parse the JSON to an array object

const todos_string_back_to_an_array = JSON.parse(todos_string);

console.log(todos_string_back_to_an_array[2]);
