// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //function to write the badge text
  const licenseBadge = `![License Badge](https://img.shields.io/badge/license-${license}-green.svg)`; //writes the text and alt text for the image
  return licenseBadge; //passes the text on formatted for template literal
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  console.log(licenseBadge);
  
  return `# ${data.title}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [License](#License)
7. [Questions](#Questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${data.license}
${licenseBadge}

## Questions

Reach me with additional questions at <https://github.com/${data.github}>. 
You can email me at <${data.email}>.
`;
};

module.exports = generateMarkdown;



