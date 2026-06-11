const person = {
  id: 1,
  firstname: "Ali",
  surname: "Dodo",
  age: 18,
  address: "Ilorin",
  password: "pass123",
};

// console.log(person.surname);
// console.log(person["age"]);

// Destructuring
const { id, address } = person;
// console.log(id);

const { password, ...others } = person;

// console.log(others);

// Objects in an array

const students = [
  {
    id: 1,
    firstname: "Ali",
    surname: "Dodo",
    age: 18,
    address: "Ilorin",
    password: "pass123",
  },
  {
    id: 2,
    firstname: "Ahmad",
    surname: "Shehu",
    age: 18,
    address: "Ilorin",
    password: "pass124",
  },
  {
    id: 3,
    firstname: "Akeem",
    surname: "Sulyman",
    age: 18,
    address: "Lagos",
    password: "pass125",
  },
];

const selected = students[1];
// console.log(selected);

// console.log(selected.surname);

// Find Method --> find return only 1 object if found

// Let us find the student with Lagos address
const found1 = students.find((item) => {
  return item.address === "Lagos";
});

// console.log(found1)

const found2 = students.find((item) => item.address === "Lagos");
// console.log(found2);

const found3 = students.find((item) => item.address === "Ilorin");
// console.log(found3);

// console.log(found3.id);

// Filter

const filtered1 = students.filter((item) => {
  return item.address === "Ilorin";
});

// console.log(filtered1);

// console.log(filtered1[1].firstname);

const filtered2 = students.filter((item) => item.address === "Lagos");

// console.log(filtered2);

// console.log(filtered1[2].firstname);

//
const msg = "Alhamdulillahi, we are a Muslim\nAllah is the Greatest";
// console.log(msg);

//  Map
const demo1 = students.map((item) => {
  const surname = item.surname;
  const firstname = item.firstname;
  const name = surname + " " + firstname;
  return name;
});

// console.log(demo1);

const demo2 = students.map((item) => item.surname + " " + item.firstname);
// console.log(demo2);

const demo3 = students.map((person) => {
  const surname = person.surname;
  const firstname = person.firstname;
  const name = surname + " " + firstname;
  //   const info = `Dear Mr ${name}, \n Your age is ${person.age} \n and you are from ${person.address}`;
  const info =
    "Dear Mr " +
    name +
    ",\n Your age is " +
    person.age +
    "\n and you are from " +
    person.address;
  return info;
});

console.log(demo3);
