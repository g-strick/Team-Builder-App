// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

// test
// const engineer = new Engineer("bob", 123, "bob@aol.com", "bobbycodes");
// console.log("engineer:", engineer);
