function createHelloWorld() {
  return function (...args) {
    return "Hello World";
  };
}
let res =  createHelloWorld();

console.log(res());
