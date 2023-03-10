const Intern = require('../lib/intern');

const name = "Mike";
const id = 7;
const email = 'example@domain.com';
const school = 'UCD';
const role = "Intern";

describe("Intern", () => {
    describe("Initialization", () => {
        //positive test
        it("should create a new intern with valid Name, ID, Email and Github username", () => {
            const intern = new Intern(name, id, email, school);

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });

        // //exception tests
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Intern();
            const err = new Error( "Expected 4 parameters, none received");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Intern(name);
            const err = new Error( "Expected 4 parameters, only received 1");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Intern(name, id);
            const err = new Error( "Expected 4 parameters, only received 2");
            
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Intern(name, id, email);
            const err = new Error( "Expected 4 parameters, only received 3");
            
            expect(cb).toThrowError(err);
        });
    });
    describe("Accessors", () => {
        // positive test
        it("should return the correct variables", () => {
            const employee = new Intern(name, id, email, school);

            expect(employee.getName()).toEqual(name);
            expect(employee.getID()).toEqual(id);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getSchool()).toEqual(school);
            expect(employee.getRole()).toEqual(role);
        });

        // Exception tests (I don't know what exceptions there could be)
    })
});