// A simple function that greets the user
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World"); // Outputs: Hello, World!
// Working with arrays: doubling each number
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers); // Outputs: Doubled numbers: [2, 4, 6, 8, 10]