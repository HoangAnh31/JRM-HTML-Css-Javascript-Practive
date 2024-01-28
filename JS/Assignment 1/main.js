/*
Built-in functions
alert()
console.log()
console.error()
console.warn()
prompt()
confirm()
setInterval()
setTimeout()
*/
const alertText = () => {
  alert("Doing homework");
};
//alertText();

console.log("console.log");

console.error("console.error");

console.warn("console.warn");

let namePrompt = prompt("Input your name");
console.log(namePrompt);

var hasTicket = confirm("Have you booked the ticket?");
console.log(hasTicket);

setInterval(() => console.log("setInterval for 1s"), 1000);

setTimeout(() => {
  console.log("setTimeout for 5s");
}, 5000);
