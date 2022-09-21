const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/Renderer");


let employeeArray = [];

inquirer.prompt([
    {
        message: "What is the name of the Manager of this team?",
        type: "input",
        name: "name"
    },
    {
        message: "What is the id of the Manager of this team?",
        type: "input",
        name: "id"
    },
    {
        message: "What is the email of the Manager of this team?",
        type: "input",
        name: "email"
    },
    {
        message: "What is the office number of the Manager of this team?",
        type: "input",
        name: "officeNumber"
    }
])
.then(manager => {
    console.log(manager);
    let newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
    employeeArray.push(newManager);
    console.log(employeeArray);
});