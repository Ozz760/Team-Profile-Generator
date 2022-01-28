const inquirer = require("inquirer");
const fs = require("fs");

const managerTemp = require('../src/ManagerTemp');
const engineerTemp = require('../src/EngineerTemp');
const internTemp = require('../src/InternTemp');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")


class Prompt {
  constructor() {
    this.manager = [];
    this.engineer = []; 
    this.intern = []; 
  }

  buildTeam() {
    this.beginManager();
  }
  
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
      .then(({managerName, managerId, managerEmail, managerOfficeNo}) => {
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNo);
        this.manager.push(manager)
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
      .then(({employeeType}) => {
        if (employeeType === 'Engineer') {
            this.addEngineer();
        } else if (employeeType === 'Intern') {
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
        
      ])
      .then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        this.engineer.push(engineer);
        this.addEmployee();
        
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
      ])
      .then(({internName, internId, internEmail, internSchool}) => {
        const intern = new Intern(internName, internId, internEmail, internSchool);
        this.intern.push(intern);
        this.addEmployee();
        
    })
};

  // Write HTML
  writeHtml() {
    const team = template(this.manager, this.engineer, this.intern);
        fs.writeFile('index.html', team, (err) =>
            err ? console.error(err) : console.log('Successfully Generated HTML!')
        )};
};

module.exports = Prompt;