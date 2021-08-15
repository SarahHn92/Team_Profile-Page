// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const html = require('./src/teamProfile.js');

// Require classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =  require('./lib/Intern');

// Empty array for team members
let employees = [];

// List prompt for role choices
const chooseRoles = [
    {
        type: 'list',
        name: 'role',
        message: "Choose team member's role:",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Team build completed.'
        ]
    }
]


// Prompts for manager role
const managerRole = [
    {
        type: 'input',
        name: 'name',
        message: "Manager's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Manager's ID (number):"
    },
    {
        type: 'type',
        name: 'email',
        message: "Manager's email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number:"
    }
]

// Prompts for engineer role
const engineerRole = [
    {
        type: 'input',
        name: 'name',
        message: "Engineer's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Engineer's ID (number):"
    },
    {
        type: 'type',
        name: 'email',
        message: "Engineer's email:"
    },
    {
        type: 'input',
        name: 'githubUser',
        message: "Engineer's GitHub username:"
    }
]

// Prompts for Intern role
const internRole = [
    {
        type: 'input',
        name: 'name',
        message: "Intern's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern's ID (number):"
    },
    {
        type: 'type',
        name: 'email',
        message: "Intern's email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Intern's school:"
    }
]

// Function that takes choices and input data and pushes to employee array
function newEmployee() {
    inquirer.prompt(chooseRoles).then((answers) => {
        switch(answers.role) {
            case 'Manager':
                inquirer.prompt(managerRole).then((answers) => {
                    let manager = new Manager(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.officeNumber
                    );
                    employees.push(manager);
                    newEmployee();
                })
                break;
            case 'Engineer':
                inquirer.prompt(engineerRole).then((answers) => {
                    let engineer = new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.githubUser
                    );
                    employees.push(engineer);
                    newEmployee();
                })
                break;
            case 'Intern':
                inquirer.prompt(internRole).then((answers) => {
                    let intern = new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.school
                    );
                    employees.push(intern);
                    newEmployee();
                })
                break;
            case 'Team build completed.':
                const writeFile = fs.writeFile('dist/index.html', html(employees), (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
                console.log(employees);
                return employees;
        }
    });
};

async function init() {
    newEmployee();
}
 init();