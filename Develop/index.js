// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },

      {
        type: 'input',
        name: 'project',
        message: 'What is your projects name?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },

      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices:['None', 'MIT', 'GNUGPLv3'],
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },

      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
      },

      {
        type: 'input',
        name: 'Instruction',
        message: 'What does the user need to know about using the repo?',
      },

      {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
      },
      
];



// TODO: Create a function to write README file
function writeToFile(fileName, ... answers) {
    fs.writeFileSync(fileName, ... answers)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then(answers => {
    console.log(answers)
    writeToFile('README.md', generateMarkdown(answers))

})
}

// Function call to initialize app
init();
