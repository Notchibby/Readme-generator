// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadge = {
    None: '',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNUGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  };
  return licenseBadge[license]

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
const licenseLink = {
  None:'',
  MIT: '[MIT](https://opensource.org/licenses/MIT)',
  GNUGPLv3: '[GNU GPLv3](https://www.gnu.org/licenses/agpl-3.0)'
};
return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return 'Licenced under the ' + renderLicenseLink(license) + 'license.'
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({github, email, project, description, license, installation, tests, Instruction, contribution}) {
  return `# ${project} ${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Instructions](#instructions)
- [Tests](#tests)
- [Contributions](#contributions)
- [License](#license)

## Installation

${installation}


## Instructions
${Instruction}

## Tests

${tests}

## Contributions

${contribution}

## Questions

My other applications can be viewed at my github repository located at ${github}.
For more information contact me at ${email}.
 
## License
${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
