// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //function to write the badge text
  if (license === "") {
    return "";
  } else {
    const licenseBadge = `![License Badge](https://img.shields.io/badge/license-${license}-green.svg)`; //writes the text and alt text for the image
    return licenseBadge; //passes the text on formatted for template literal
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) { //learned how to use switch statements and chose it for readability
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla Public License 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
    case 'Open Software License 3.0':
      return 'https://opensource.org/licenses/OSL-3.0';
    case 'Apache license 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'Educational Community License v2.0':
      return 'https://opensource.org/licenses/ECL-2.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);

    return `## License
${license}

Please refer to link below for further licensing information.

${licenseLink}

${licenseBadge}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

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

${renderLicenseSection(data.license)}

## Questions

Reach me with additional questions at <https://github.com/${data.github}>. 
You can email me at <${data.email}>.
`;
};

module.exports = generateMarkdown;



