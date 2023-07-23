// imported packages needed 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// questions array for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: "input",
        message: "Write the description of the project.",
        name: 'description'
    },
    {
        type: "input",
        message: "Table of Contents",
        name: 'table of contents'
    },
    {
        type: "input",
        message: "What are the installation instructions for the project?",
        name: 'installation'
    },
    {
        type: "input",
        message: "What is the usage insturctions for the project?",
        name: 'usage'
    },
    {
        type: "rawlist",
        message: "What license are you using?",
        choices: ["MIT", "GPL", "Apache", "BSD", "None"],
        name: 'license'
    },
    {
        type: "input",
        message: "Who else contributed to thie project?",
        name: 'contributors'
    },
    {
        type: "input",
        message: "What command will be used for running tests?",
        name: 'tests'
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: 'username'
    },
    {
        type: "input",
        message: "What is your email?",
        name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("readme.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();