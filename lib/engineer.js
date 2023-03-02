const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        if (!name) {
            throw new Error("Expected 4 parameters, none received");
        } else if (!id){
            throw new Error("Expected 4 parameters, only received 1");
        } else if (!email){
            throw new Error("Expected 4 parameters, only received 2");
        } else if (!github){
            throw new Error("Expected 4 parameters, only received 3");
        }
        
        super(name, id, email);
        this.github = github;
    }


    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;