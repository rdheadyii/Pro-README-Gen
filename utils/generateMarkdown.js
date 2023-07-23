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
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
