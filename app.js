const Manager = require(“./lib/Manager”);
const Engineer = require(“./lib/Engineer”);
const Intern = require(“./lib/Intern”);
const path = require(“path”);
const fs = require(“fs”);
const inquirer = require(“inquirer”);
const OUTPUT_DIR = path.resolve(__dirname, “output”)
const outputPath = path.join(OUTPUT_DIR, “team.html”);
const render = require(“./lib/htmlRenderer”);
inquirer.prompt ([
        {
        type: “input”,
        message: “What is your name?“,
        name: “name”
        },
        {
        type: “input”,
        message: “What is your role?“,
        name: “role”
        },
        {
        type: “input”,
        message: “What is your email?“,
        name: “email”
        },
        {
        type: “input”,
        message: “What is your id?“,
        name: “id”
        },
        {
        type: “input”,
        message: “What is your school?“,
        name: “school”
        },
        {
        type: “input”,
        message: “What is your Github?“,
        name: “github”
        },
        {
        type: “input”,
        message: “What is your office number?“,
        name: “officeNumber”
        }
    ])
    .then(function(response) {
        const employees = []
        if (response.role === “Manager”) {
            const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            employees.push(newManager)
        } else if (response.role === “Engineer”) {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
            employees.push(newEngineer)
        } else if (response.role === “Intern”) {
            const newIntern = new Intern(response.name, response.id, response.email, response.school)
            employees.push(newIntern)
        }
        fs.writeFile(outputPath, render(employees), () => console.log(“done!“));
    })





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
