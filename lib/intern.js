const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        if (!name) {
            throw new Error("Expected 4 parameters, none received");
        } else if (!id){
            throw new Error("Expected 4 parameters, only received 1");
        } else if (!email){
            throw new Error("Expected 4 parameters, only received 2");
        } else if (!school){
            throw new Error("Expected 4 parameters, only received 3");
        }
        
        super(name, id, email);
        this.school = school;
    }


    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;