//  group array element on the basic of age property

// input
const people = [
  {
    name: "A",
    age: "12",
  },
  {
    name: "B",
    age: "12",
  },
  {
    name: "C",
    age: "13",
  },
  {
    name: "D",
    age: "10",
  },
];

// Sort the array based on the 'age' property
// people.sort((a, b) => a.age - b.age);

// console.log(people);

// Sort the array based on the 'age' property
people.sort((a, b) => a.age - b.age);

people.forEach((person, index) => {
  person.index = index;
});
// Remove the 'index' property after sorting, if needed
// people.forEach((person) => {
//   delete person.index;
// });
const sortedPeople = people.map(({ index, ...rest }) => ({ index, ...rest }));

console.log(sortedPeople);

// console.log(people);

// output
const result = [
  {
    name: "D",
    age: "10",
  },
  {
    name: "A",
    age: "12",
  },
  {
    name: "B",
    age: "12",
  },
  {
    name: "C",
    age: "13",
  },
];
