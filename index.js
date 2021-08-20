const Team = require('./lib/Team');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
var team = new Team();

const addNewEmployee = () => {
    return inquirer
        .prompt([
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee do you want to add?',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmNewEmployee }) => confirmNewEmployee
        }
        ]).then(answers => {
            if (answers.confirmNewEmployee) {
              switch(answers.employeeType) {
                case 'Intern':
                    return team.addIntern();
                case 'Engineer':
                    return team.addEngineer();
              }
            }else{
                return false;
            }
        }).then((employeeAdded) => {
            if(employeeAdded == false){
                return team;
            }
            else{
                return addNewEmployee();
            }
        });
}

const buildTeam = () => {
    return inquirer
    .prompt({
        type: 'text',
        name: 'teamName',
        message: 'What is this team\'s name?'
    }).then(( teamName ) => {
        team.name = teamName;
        return team.addManager();
    });
}


buildTeam()
.then(addNewEmployee)
.then((myTeam) => {
    return generatePage(myTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
