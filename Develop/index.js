const inquirer = require('inquirer'); 
const fs = require('fs'); 
const Employee = require ('./lib/Employee'); 
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager'); 
const Choices = require('inquirer/lib/objects/choices');


class Prompt {
    // Manager prompt 
    beginManager() {
        inquirer
        .prompt ([
            {
                type: "input",
                name: "managerName", 
                message: "Who is the Team Manager name?", 
            },
            {
                type: "input", 
                name: "mangerId",
                message: "What is the Team Manager Id?"
            },
            {
                type: "input", 
                name: "mangerOfficeNo",
                message: "What is the Team Manager Office Number?"
            }, 
            {
                type: "input", 
                name: "mangerEmail",
                message: "What is the Team Manager Email?"
            }
        ])
        .then(({addAnotherEmployee}) => {
            this.addEmployee(addAnotherEmployee); 
        });
    };
    // Employee prompt

    addEmployee() {
        inquirer
        .prompt ([
            {
                type: "list",
                name: "employeeType", 
                message: "Choose the type of Employee",
                choices: [
                    {name: "Engineer"},
                    {name: "Intern" },
                ],
            }, 
        ])

    }; 

    addEngineer() {
        inquirer
        .prompt ([
            {
                type: "input",
                name: "engineerName", 
                message: "What is the Engineer's name?", 
            },
            {
                type: "input", 
                name: "engineerId",
                message: "What is the Engineer Id?"
            },
            {
                type: "input", 
                name: "engineerEmail",
                message: "What is the Engineer Email?"
                
            }, 
            {
                type: "input", 
                name: "engineerGitHub",
                message: "What is the Engineer GitHub?"
            }
        ])
        .then //Add to engineer to employee array 
    }

    addIntern() { 
        inquirer
        .prompt ([
            {
                type: "input",
                name: "internName", 
                message: "What is the Intern's name?", 
            },
            {
                type: "input", 
                name: "internId",
                message: "What is the Intern Id?"
            },
            {
                type: "input", 
                name: "internEmail",
                message: "What is the Intern Email?"
                
            }, 
            {
                type: "input", 
                name: "internSchool",
                message: "Which school does the Intern go to?"
            }
        ])
        .then //Add to Intern to employee array 
    }
    
    
    
    // Write HTML 
    writeHtml() { 
        
    }

    
    
    
    
}; 

module.exports = Prompt;  