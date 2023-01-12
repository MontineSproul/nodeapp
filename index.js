// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
//to make inquire prompt cleaner

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs write file goes here (takes js data and creates a literal file on comp)
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    //inquirer prompt (questions)
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
      },
    {
      type: 'input',
      message: 'How do you install the app?',
      name: 'installInstructions',
      
    },
    {
        type: 'input',
        message: 'What is the app used for?/Who would use this app?',
        name: 'usage',
      },
      {
        //list of license options
        type: 'checkbox',
        message: 'License:',
        name: 'license',
        choices: ["BSD_3", "MIT", "GPL_3.0", "NONE"]
      },
      {
        type: 'input',
        message: 'Contributors:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests Instructions:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Enter Github user name:',
        name: 'questions1',
      },
      {
        type: 'input',
        message: 'Enter email address:',
        name: 'questions2',
      }
  ])
  // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  //required to run the code
  .then((response) => {
    console.log(response)
    const createREADME = generateMarkdown(response);
    console.log(createREADME);
    writeToFile('README.md', createREADME);
//  this is the same thing as line 42 
//    fs.writeFile('README.md', createREADME, (err) =>
//     err ? console.error(err) : console.log('Success!')
//   );
  });
}

// Function call to initialize app
init();
