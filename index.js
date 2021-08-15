// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const html = require('./src/teamProfile.html');

// Require classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =  require('./lib/Intern');


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
        name: 'officeNumber',
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
        name: 'officeNumber',
        message: "Intern's school:"
    }
]