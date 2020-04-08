const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


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


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers);
        writeToFile("newREADMe.txt", readMe);
    }catch(err) {
        console.log(err);
        
    }
    

}

init();
