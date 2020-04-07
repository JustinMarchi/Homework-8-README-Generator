const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What would you like your Project Title to be named?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "Install",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide examples of how your project could be used."
    }

];

function promptUser(){
    return inquirer.prompt(questions)
}

function GenerateREADME(answers){
    return `
    # Your Project Title

## Description 

Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 

Provide instructions and examples for use. Include screenshots as needed. 

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

`
}

function writeToFile(fileName, data) {
}

async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();

    }catch(err) {
        console.log(err);
        
    }
    

}

init();
