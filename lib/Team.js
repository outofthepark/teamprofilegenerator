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
                message: 'What is the manager\'s name?',
                validate: name => {
                    if (name) {
                      return true;
                    } else {
                      console.log('Please enter a name!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the their email?',
                validate: email => {
                    if (email) {
                      return true;
                    } else {
                      console.log('Please enter an email!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the their employee id?',
                validate: id => {
                    if (id) {
                      return true;
                    } else {
                      console.log('Please enter an id!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'What is their office number?',
                validate: officeNumber => {
                    if (officeNumber) {
                      return true;
                    } else {
                      console.log('Please enter an office number!');
                      return false;
                    }
                }
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
                message: 'What is the engineer\'s name?',
                validate: name => {
                    if (name) {
                      return true;
                    } else {
                      console.log('Please enter a name!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the their email?',
                validate: email => {
                    if (email) {
                      return true;
                    } else {
                      console.log('Please enter an email!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the their employee id?',
                validate: id => {
                    if (id) {
                      return true;
                    } else {
                      console.log('Please enter an id!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is their github username?',
                validate: github => {
                    if (github) {
                      return true;
                    } else {
                      console.log('Please enter a github username!');
                      return false;
                    }
                }
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
                message: 'What is the intern\'s name?',
                validate: name => {
                    if (name) {
                      return true;
                    } else {
                      console.log('Please enter a name!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?',
                validate: email => {
                    if (email) {
                      return true;
                    } else {
                      console.log('Please enter an email!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee id?',
                validate: id => {
                    if (id) {
                      return true;
                    } else {
                      console.log('Please enter an id!');
                      return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school are they atttending?',
                validate: school => {
                    if (school) {
                      return true;
                    } else {
                      console.log('Please enter a school!');
                      return false;
                    }
                }
            }
        ]).then((employeeAdded) => {
            this.interns.push(new Intern(employeeAdded.name, employeeAdded.email, employeeAdded.id, employeeAdded.school));
            return this;
        });
    }
}

module.exports = Team;