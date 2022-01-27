const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const choices = require("inquirer/lib/objects/choices");
const employees = []; 
console.log(employees); 

class Prompt {
  // Manager prompt
  beginManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Who is the Team Manager name?",
        },
        {
          type: "input",
          name: "mangerId",
          message: "What is the Team Manager Id?",
        },
        {
          type: "input",
          name: "mangerEmail",
          message: "What is the Team Manager Email?",
        },
        {
          type: "input",
          name: "mangerOfficeNo",
          message: "What is the Team Manager Office Number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNo);
        employees.push(manager)
        this.addEmployee();
    });
};
  // Employee prompt

  addEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "Choose the type of Employee",
          choices: ["Engineer", "Intern", "No"],
        },
      ])
      .then(answers => {
        if (answers.employeeType === 'Engineer') {
            this.addEngineer();
        } else if (answers.employeeType === 'Intern') {
            this.addIntern();
        } else {
           this.writeHtml(); 
        }
    });
};

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Engineer Id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineer Email?",
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "What is the Engineer GitHub?",
        },
        {
          type: "list", 
          name: "addOther", 
          message: "Add another employee", 
          choices: ["Yes", "No"]
        },
      ])
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerSchool);
        employees.push(engineer);
        console.log(answers);
        if (answers === 'yes') {
            this.addEmployee();
        } else {
            this.writeHtml(); 
            return;
        }
    })
};

  addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Intern Id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Intern Email?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "Which school does the Intern go to?",
        },
        {
          type: "list", 
          name: "addOther", 
          message: "Add another employee", 
          choices: ["Yes", "No"]
        },
      ])
      .then(answers => {
        const engineer = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employees.push(engineer);
        console.log(answers);
        if (answers === 'yes') {
            this.addEmployee();
        } else {
            this.writeHtml(); 
            return;
        }
    })
};

  // Write HTML
  writeHtml() {
    fs.writeFile('index.html', (err) => 
    err ? console.error(err) : console.log('Successful created index.html!')
    );
}}; 

module.exports = Prompt;