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


    getOffice(){
        return this.office;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;