
// function that returns a license badge
function renderLicenseBadge(license) {
  let badge = "";

  if (license !== "None") {
    badge = "![Badge for License](https://shields.io/badge/license-${data.license}-blue.svg)";
  }
  return badge;
}

// function for license link
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      link = "https://mit-license.org/";
      break;

    case "GPL":
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;

    case "Apache":
      link = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    
    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    default: 
      link = "";
      break;
  }
}

// function for the license section of README
function renderLicenseSection(license) {
  let lSect = "";

  if(license !== "None") {
    lSect +=`## License`;
    lSect += "For more information on this license, please visit " + renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.email}
  https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
