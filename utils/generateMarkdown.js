//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 if (license === 'NONE') {
  return "";
 } else {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
 }
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE') {
    return "";
   } else {
    return `### [License](#license)`;
   }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return "";
  } else {
    return `## License
This project is licensed under the ${license} license.`;
  }
}

//function to generate markdown for README
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
You can find me on Github at [https://github.com/${data.user}](https://github.com/${data.user})
or shoot me an Email at: [${data.email}](${data.email})

`;
}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
module.exports = generateMarkdown;
