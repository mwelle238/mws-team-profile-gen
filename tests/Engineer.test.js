const Engineer = require('../lib/engineer');

const name = "Mike";
const id = 7;
const email = 'example@domain.com';
const github = 'git123';
const role = 'Engineer';

describe("Engineer", () => {
    describe("Initialization", () => {
        //positive test
        it("should create a new engineer with valid Name, ID, Email and Github username", () => {
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });

        // //exception tests
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Engineer();
            const err = new Error( "Expected 4 parameters, none received");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Engineer(name);
            const err = new Error( "Expected 4 parameters, only received 1");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Engineer(name, id);
            const err = new Error( "Expected 4 parameters, only received 2");
            
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Engineer(name, id, email);
            const err = new Error( "Expected 4 parameters, only received 3");
            
            expect(cb).toThrowError(err);
        });
    });
    describe("Accessors", () => {
        // positive test
        it("should return the correct variables", () => {
            const employee = new Engineer(name, id, email, github);

            expect(employee.getName()).toEqual(name);
            expect(employee.getID()).toEqual(id);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getGithub()).toEqual(github);
            expect(employee.getRole()).toEqual(role);
        });

        // Exception tests (I don't know what exceptions there could be)
    })
});