// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const html = require('./src/teamProfile.html');


const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =  require('./lib/Intern');

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