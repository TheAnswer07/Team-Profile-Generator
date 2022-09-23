const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/Renderer");


let employeeArray = [];

const ended = () => {
    let teamHtml = render(employeeArray);
    fse.outputFile('output/team.html', teamHtml)
    .then(() => {
        console.log("File successfully saved!");
    })
    .catch(err => {
        console.error(err);
    });
}

const questContinue = () => {
    inquirer.prompt([{
        message: "Would you like to add more team members?",
        type: "list",
        choices: ["yes", "no"],
        name: "yesOrNo"
    }])
    .then(yesOrNo => {
        if (yesOrNo.yesOrNo === "yes") {
            engineerOrIntern();
        } else {
            ended();
        }
    })
}

const engineerOrIntern = () => {
    inquirer.prompt([{
        message: "Would you like to add an intern or an engineer?",
        type: "list",
        choices: ["Engineer", "Intern"],
        name: "engOrInt"
    }])
    .then(answer => {
        console.log(answer);
        if(answer.engOrInt === "Engineer") {
            inquirer.prompt([
                {
                    message: "What is the name of the Engineer?",
                    type: "input",
                    name: "name"
                },
                {
                    message: "What is the id of the Engineer?",
                    type: "input",
                    name: "id"
                },
                {
                    message: "What is the email of the Engineer?",
                    type: "input",
                    name: "email"
                },
                {
                    message: "What is the github profile link of the Engineer?",
                    type: "input",
                    name: "github"
                }
                
            ])
            .then(engineer => {
                console.log(engineer);
                let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
                employeeArray.push(newEngineer);
                console.log(employeeArray);
                questContinue();
            }) 
        } else if (answer.engOrInt === "Intern") {
            inquirer.prompt([
                {
                    message: "What is the name of the Intern?",
                    type: "input",
                    name: "name"
                },
                {
                    message: "What is the id of the Intern?",
                    type: "input",
                    name: "id"
                },
                {
                    message: "What is the email of the Intern?",
                    type: "input",
                    name: "email"
                },
                {
                    message: "What is the School of the Engineer?",
                    type: "input",
                    name: "school"
                }
            ])
            .then(intern => {
                let newIntern = new Intern(intern.name, intern.id, intern.email, intern.school)
                employeeArray.push(newIntern);
                console.log(employeeArray);
                questContinue();
            })
        }
    })
}


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
    engineerOrIntern();
})

