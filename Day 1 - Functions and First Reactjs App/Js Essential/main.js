/* Variables*/

// Declartion of variables: var/let/const
// Variable declaration is done once

var course = "Reactjs";
let favouriteFood = "Amala";
const product = "laptop";

// "=" is called assignment operate not equals in mathematics

console.log(favouriteFood);

// Variable declared with const remains unchanged

//Variables declared with either var or let can be reassigned

favouriteFood = "Beans and dodo";
console.log(favouriteFood);

course = "Nextjs";
console.log(course);

/*---------------------------------------
        FUNCTION
---------------------------------------*/

//Old way:

function greet() {
  console.log("hello 👋");
}

//Calling a function/ or executing function

greet();

//Arrow Function
const greetWithArrow = () => {
  console.log("Arrow function says Hi 👋");
};

greetWithArrow();

//Parameter (params) and Arguments (props)

// num1 and num2 are called parameters
function addNum(num1, num2) {
  ans = num1 + num2;
  console.log(ans);
}

addNum(2, 4);

const babajebu = (amount, multiplier) => {
  const ROI = amount * multiplier;
  console.log(ROI);
};

babajebu(2000, 2);

// Function that returns something

function nameFmt(firstname, lastname) {
  const fullname = firstname.toUpperCase() + " " + lastname.toUpperCase();
  return fullname;
}

const name = nameFmt("sponge", "bob");

console.log(name);
