const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

class Team {
    constructor(){
        this.name = '';
        this.engineers = [];
        this.interns = [];
        this.managers = [];
    }

    getTeamName(){
        return this.name;
    }

    addManager() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the manager\'s name?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the their email?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the their employee id?'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'What is their office number?'
            }
        ]).then((employeeAdded) => {
            this.managers.push(new Manager(employeeAdded.name, employeeAdded.email, employeeAdded.id, employeeAdded.officeNumber));
            return this;
        });
    }

    addEngineer() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the engineer\'s name?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the their email?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the their employee id?'
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is their github username?'
            }
        ]).then((employeeAdded) => {
            this.engineers.push(new Engineer(employeeAdded.name, employeeAdded.email, employeeAdded.id, employeeAdded.github));
            return this;
        });
    }

    addIntern() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the intern\'s name?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee id?'
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school are they atttending?'
            }
        ]).then((employeeAdded) => {
            this.interns.push(new Intern(employeeAdded.name, employeeAdded.email, employeeAdded.id, employeeAdded.school));
            return this;
        });
    }
}

module.exports = Team;