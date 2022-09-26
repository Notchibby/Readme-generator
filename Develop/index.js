// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'Project',
        message: 'What is title of your Project?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Give a description of your Project',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Provide a step by step guide on how to install your application',
      },

      {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions on how to use your application',
      },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then(data => {
    console.log(data)
    writeToFile('README.md', generateMarkdown(data))
})
}

// Function call to initialize app
init();
