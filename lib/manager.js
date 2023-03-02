const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        if (!name) {
            throw new Error("Expected 4 parameters, none received");
        } else if (!id){
            throw new Error("Expected 4 parameters, only received 1");
        } else if (!email){
            throw new Error("Expected 4 parameters, only received 2");
        } else if (!office){
            throw new Error("Expected 4 parameters, only received 3");
        }

        super(name, id, email);
        this.office = office;
    }
    static getPrompts(){
        let prompts = super.getPrompts();
        const prompt = { type: "input", message: "Office Number: ", name: 'office'};
        const namePrompt = { type: "input", message: "Name your team:", name: 'teamName'};
        const next = { type: 'list', message: "Add Another Team Member?", name: 'next', choices: ["New Engineer", "New Intern", "Done Adding Members"]};
        prompts.push(prompt);
        prompts.push(next);
        prompts.splice(0,0, namePrompt);
        //console.log(prompts);
        return prompts; 
    }

    getOffice(){
        return this.office;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;