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
        .then  
        
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
    // Write HTML 
    writeHtml() { 
        

    }

    
    
    
    
}; 

module.exports = Prompt;  