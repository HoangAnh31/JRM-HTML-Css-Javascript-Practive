// Work with function
// Function declaration
function Hello() {
  console.log("Hello World");
}
// Function expression
const Hello1 = function () {
  console.log("Hello World");
};
// Arrow function
const Hello2 = () => {
  console.log("Hello World");
};
// Function with parameters
function Hello3(name) {
  console.log(`Hello ${name}`);
}
const Hello4 = function (name) {
  console.log(`Hello ${name}`);
};
const Hello5 = (name) => {
  console.log(`Hello ${name}`);
};
// Function with return value
function Hello6() {
  return "Hello World";
}
const Hello7 = function () {
  return "Hello World";
};
const Hello8 = () => {
  return "Hello World";
};
// Call the function
Hello();
const result = Hello6();
console.log(result);

//Now, let's create a function that takes two parameters and returns the sum of those parameters.
const total = (number1, number2) => console.log(number1 + number2);
total(5, 6);
