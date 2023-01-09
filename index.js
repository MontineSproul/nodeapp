// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];
//to make inquire prompt cleaner

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs write file goes here (takes js data and creates a literal file on comp)
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
  ])
  //required to run the code
  .then((response) => {
    console.log(response)
    const createREADME = generateMarkdown(response);
    console.log(createREADME);
  });
}

// Function call to initialize app
init();
