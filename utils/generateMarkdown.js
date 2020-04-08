function generateMarkdown(answers) {
  return `
  # ${answers.ProjectTitle}

## Description 
${answers.ProjectDescription}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)


## Installation

${answers.Install}

## Usage 

${answers.Usage}

---

## Badges

`
;
}

module.exports = generateMarkdown;
