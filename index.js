// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
