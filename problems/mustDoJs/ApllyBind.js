const person = {
  name: "John",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  },
};

const anotherPerson = {
  name: "Jane",
};

// Using call
person.greet.call(anotherPerson, "Hello", "!");
// Output: Hello, Jane!

// Using apply
person.greet.apply(anotherPerson, ["Hi", "!!"]);
// Output: Hi, Jane!!

// Using bind
const greetHola = person.greet.bind(anotherPerson, "Hola");
greetHola("!!");
// Output: Hola, Jane!!
