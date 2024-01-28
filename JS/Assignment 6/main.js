// Work with object
// Create an object with 3 properties (key-value pairs).
const emailKey = "email";
const person = {
  name: "Sara",
  age: 25,
  city: "Stockholm",
  [emailKey]: "abc@gmail.com",
};
//delete person.age;

// Now, let's add a new property to the object.
person.skills = "HTML, css, JS";

// Now, let's add a function to the object.
person.printInfor = (obj) => {
  console.log(`Print info`);
};

console.log(person.printInfor());
