// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 if (license === 'NONE') {
  return "";
 } else {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE') {
    return "";
   } else {
    return `### [License](#license)`;
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return "";
  } else {
    return `## License
This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)} 
## Description 
${data.description}
## Table of Contents
### [Description](#description)
### [Installation](#installation)
### [Usage](#usage)
${renderLicenseLink(data.license)}
### [Contributing](#contributing)
### [Tests](#tests)
### [Questions](#questions)
${data.tableOfContents}
## Installation
${data.installInstructions}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions?
Github: ${data.questions1}
Email: ${data.questions2}

`;
}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
module.exports = generateMarkdown;
