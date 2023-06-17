// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //inquirer to prompt questions and collect answers
const fs = require('fs'); //fs to write the README.md
const generateMarkdown = require("./utils/generateMarkdown") //use this file in conjunction to generate the markdown text with the answers provided by user

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe this project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does one use this application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What License does this application have?',
        choices: ['', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'Apache license 2.0', 'Educational Community License v2.0' ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { //function pulls in parameters README.md and markdown
    fs.writeFile(fileName, data, (err) => {  //writeFile creates the README, catches errors, and confirms file created
        if (err) {
            console.error(err);
        } else {
            console.log('Responses written to file!');
        }
    });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer  //begin the process of inquirer to ask the questions
        .prompt(questions) // this calls the questions from the questions array above
        .then((answers) => {  //this pulls in the user's answers
            const markdown = generateMarkdown(answers); //sends the answers to generateMarkdown to generate the markdown
            writeToFile('README.md', markdown); //calls write to file function, names README file and passes the markdown over
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
