// Template String

const firstName = "Ahmad";
const lastName = "Dodo";

const fullName = `Mr ${firstName} ${lastName}`;
console.log(fullName);

const msg = `Mr ${firstName} ${lastName} is a very good muslim`;
console.log(msg);

const unitPrice = 5000;
const qty = 5;

const totalPrice = `Total: ${unitPrice * qty}`;
console.log(totalPrice);

// Ternary Operator
// - shorthand of if and else statement

let age = 16;

// if (age >= 18) {
//   console.log("Can vote");
// } else {
//   console.log("Can not vote");
// }

// Condition ? "if true" : "if not true"
console.log(age >= 18 ? "Can vote" : "Can not vote");

const price = 3000;
const isExpensive = price > 4500 ? "expensive" : "cheap";
console.log(isExpensive);
