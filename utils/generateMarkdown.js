const api = require("./api");

function generateMarkdown(answers, user) {
  return `
  ![](${user.avatar_url})
  # ${user.name}
  ### [E-mail Me Here!](${user.email})
---
  # ${answers.ProjectTitle}

---
## Description 
${answers.ProjectDescription}
---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)

---
## Installation

${answers.Install}

---
## Usage 

${answers.Usage}

---
## License

${answers.License}

---
## Credits

${answers.Contributors}

---
## Badges
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

`
;
}

module.exports = generateMarkdown;
