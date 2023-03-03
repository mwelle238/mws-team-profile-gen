// declare required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer'); 
// declare variables
const filename = './dist/team.html';
let teamManager;
let teamName;
let teamEngineers = [];
let teamInterns = [];
let HTML = [];
// add team member functions - add manager is called in init, will call addXXXX recursively until Done Adding Members is selected
async function addManager(){
    const mgr = await inquirer.prompt(Manager.getPrompts());
    teamManager = new Manager(mgr.name, mgr.id, mgr.email, mgr.office);
    teamName = mgr.teamName;
    addNext(mgr.next);
}
async function addEngineer(){
    const eng = await inquirer.prompt(Engineer.getPrompts());
    teamEngineers.push(new Engineer(eng.name, eng.id, eng.email, eng.github));
    addNext(eng.next);
}
async function addIntern(){
    const int = await inquirer.prompt(Intern.getPrompts());
    teamInterns.push(new Intern(int.name, int.id, int.email, int.school));
    addNext(int.next);
}
async function addNext(selection){
    switch (selection) {
        case 'New Engineer': addEngineer(); return;
        case 'New Intern': addIntern(); return;
        default: createHTML();
    }
}
// HTML generation
function generateManagerSectionHTML(mgr){
    HTML.push(`    <section class="row justify-content-around" id="manager-container">
        <div class="col-12 col-sm-8 col-md-6 mb-3">
            <div class="card employee-card manager-card text-dark">
                <h2 class="card-header bg-warning text-center">${mgr.getName()}</h2>
                <h3 class="text-primary">${mgr.getRole()}</h3>
                <p class="card-text col-12 h6">ID: ${mgr.getID()}
                    <br>Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a>
                    <br>Office Number: ${mgr.getOffice()}
                </p>
            </div>
        </div>
    </section>
`);
}
function generateEngineerSectionHTML(engArray){
    HTML.push(`    <section class="row justify-content-around" id="engineer-container">`);
    for (let i=0; i<engArray.length; i++){
        HTML.push(generateEngineerCardHTML(engArray[i]));
    }
    HTML.push(`    </section>\n`);
}
function generateInternSectionHTML(intArray){
    HTML.push(`    <section class="row justify-content-around" id="intern-container">`);
    for (let i=0; i<intArray.length; i++){
        HTML.push(generateInternCardHTML(intArray[i]));
    }
    HTML.push(`    </section>\n`);
}
function generateEngineerCardHTML(eng){
    return`        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
            <div class="card employee-card engineer-card text-dark">
                <h2 class="card-header bg-warning text-center">${eng.getName()}</h2>
                <h3 class="text-primary">${eng.getRole()}</h3>
                <p class="card-text col-12 h6">ID: ${eng.getID()}
                    <br>Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a>
                    <br>GitHub: <a href="https://github.com/${eng.getGithub()}" target="_blank" rel="noopener norefferer">${eng.getGithub()}</a>
                </p>
            </div>
        </div>`;
}
function generateInternCardHTML(int){
    return`        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
            <div class="card employee-card engineer-card text-dark">
                <h2 class="card-header bg-warning text-center">${int.getName()}</h2>
                <h3 class="text-primary">${int.getRole()}</h3>
                <p class="card-text col-12 h6">ID: ${int.getID()}
                    <br>Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a>
                    <br>School: ${int.getSchool()}
                </p>
            </div>
        </div>`;
}
function generateHeaderHTML(){
    HTML.push(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body class="container-fluid bg-dark text-light">
    <header class="row text-center container-fluid">
        <h1>${teamName}</h1>
    </header>`);
}
function generateFooterHTML(){
    HTML.push(`</body>
</html>`);
}
// Function to create the html file
function createHTML(){
    generateHeaderHTML();
    generateManagerSectionHTML(teamManager);
    generateEngineerSectionHTML(teamEngineers);
    generateInternSectionHTML(teamInterns);
    generateFooterHTML();
    fs.writeFile(filename, HTML.join('\n'), (err) =>
        err ? console.error(err) : console.log(`${filename} has been created`));    
}
// Function to run script
async function init(){
    console.log("Fill out your team of Manager, Engineers and Interns");
    addManager();
}
// call function to run the script
init();
