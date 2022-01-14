const fs = require('fs');
const path = require('path');
const targetFolder = path.resolve(__dirname, 'Dist'); //get to that folder
const filePath = path.join(targetFolder, 'team.html');
const Renderer = require('./Utils/htmlRenderer');

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];
function mainMenu(){
    inquirer.prompt({ //returns a promise
        type: "list",
        name: "EMPtype",
        message: "What type of employee would you like to add?",
        choices: [
            'Manager', 
            'Engineer', 
            'Intern',
            'Exit'
        ]
    }).then(function(answer){
        if(answer.EMPtype === 'Manager'){
            addManager();
        };
        if(answer.EMPtype === 'Engineer'){
            addEngineer();
        };
        if(answer.EMPtype === 'Intern'){
            addIntern();
        };
        if(answer.EMPtype === 'Exit'){
            if(!fs.existsSync(targetFolder)){
                fs.mkdirSync(targetFolder)
            }fs.writeFileSync(filePath, Renderer(team), 'utf-8')
            
        };
    })
}
function addManager(){
    inquirer.prompt([
        {type: 'input', name: 'manName', message:'What is your manager name'},
        {type: 'input', name: 'manId', message:'What is your manager id'},
        {type: 'input', name: 'manEmail', message:'What is your manager email?'},
        {type: 'input', name: 'manOfficeNumber', message:'What is your manager Office Number?'},
    ]).then(function(answer){
        console.log(answer);
        const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.manOfficeNumber);
        team.push(manager);
        mainMenu();
    })
};
function addEngineer(){
    inquirer.prompt([
        {type: 'input', name: 'engName', message:'What is your Engineer name'},
        {type: 'input', name: 'engId', message:'What is your Engineer id'},
        {type: 'input', name: 'engEmail', message:'What is your Engineer email?'},
        {type: 'input', name: 'engGithub', message:'What is your Engineer Github?'},
    ]).then(function(answer){
        console.log(answer);
        const engineer = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.engGithub);
        team.push(engineer);
        mainMenu();
    })
};
function addIntern(){
    inquirer.prompt([
        {type: 'input', name: 'intName', message:'What is your Intern name'},
        {type: 'input', name: 'intId', message:'What is your Intern id'},
        {type: 'input', name: 'intEmail', message:'What is your Intern email?'},
        {type: 'input', name: 'intSchool', message:'What is your School?'},
    ]).then(function(answer){
        console.log(answer);
        const intern = new Intern(answer.intName, answer.intId, answer.intEmail, answer.intSchool);
        team.push(intern);
        mainMenu();
    })
};
mainMenu();