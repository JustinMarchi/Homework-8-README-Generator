const api = require("./api");

function generateMarkdown(answers, user) {
  return `
  #${user.name}
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
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

`
;
}

module.exports = generateMarkdown;
