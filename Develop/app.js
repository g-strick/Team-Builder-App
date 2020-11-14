const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
  {
    type: "input",
    message: "What is your manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your manager's id?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is your manager's phone number?",
    name: "managerPhone",
  },
  {
    type: "input",
    message: "What is your 1st engineer's name?",
    name: "engineerName1",
  },
  {
    type: "input",
    message: "What is your 1st engineer's id?",
    name: "engineerId1",
  },
  {
    type: "input",
    message: "What is your 1st engineer's email?",
    name: "engineerEmail1",
  },
  {
    type: "input",
    message: "What is your 1st engineer's github username?",
    name: "engineerGithub1",
  },
  {
    type: "input",
    message: "What is your 2nd engineer's name?",
    name: "engineerName2",
  },
  {
    type: "input",
    message: "What is your 2nd engineer's id?",
    name: "engineerId2",
  },
  {
    type: "input",
    message: "What is your 2nd engineer's email?",
    name: "engineerEmail2",
  },
  {
    type: "input",
    message: "What is your 2nd engineer's github username?",
    name: "engineerGithub2",
  },
  {
    type: "input",
    message: "What is your 3rd engineer's name?",
    name: "engineerName3",
  },
  {
    type: "input",
    message: "What is your 3rd engineer's id?",
    name: "engineerId3",
  },
  {
    type: "input",
    message: "What is your 3rd engineer's email?",
    name: "engineerEmail3",
  },
  {
    type: "input",
    message: "What is your 3rd engineer's github username?",
    name: "engineerGithub3",
  },
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "internSchool",
  },
]);
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```