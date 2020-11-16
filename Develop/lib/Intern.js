// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

// test
const intern = new Intern("bob", 123, "bob@aol.com", "Harvard");
console.log("intern:", intern);

module.exports = Intern;
