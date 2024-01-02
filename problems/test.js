class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getDetails() {
    return `name:${this.name},id:${this.id}`;
  }
}
let student = new Student("mozammil", 22);

console.log(student.getDetails());
