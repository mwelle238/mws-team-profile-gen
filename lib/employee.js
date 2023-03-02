class Employee {
    constructor(name, id, email){       
        this.name = name;
        this.id = id;
        this.email = email;
        
        if (!this.name) {
            throw new Error("Expected 3 parameters, none received");
        } else if (!this.id){
            throw new Error("Expected 3 parameters, only received 1");
        } else if (!this.email){
            throw new Error("Expected 3 parameters, only received 2");
        }
    }


    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }

}

module.exports = Employee;