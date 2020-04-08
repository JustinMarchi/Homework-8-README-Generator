const api = require("./api");

function generateMarkdown(answers, user) {
  return `

  #${user.avatar_url}

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
