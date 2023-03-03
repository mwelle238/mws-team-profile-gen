const Manager = require('../lib/manager');

const name = "Mike";
const id = 7;
const email = 'example@domain.com';
const office = 101;
const role = 'Manager';

describe("Manager", () => {
    describe("Initialization", () => {
        //positive test
        it("should create a new manager with valid Name, ID, Email and Github username", () => {
            const manager = new Manager(name, id, email, office);

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.office).toEqual(office);
        });

        // //exception tests
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Manager();
            const err = new Error( "Expected 4 parameters, none received");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Manager(name);
            const err = new Error( "Expected 4 parameters, only received 1");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Manager(name, id);
            const err = new Error( "Expected 4 parameters, only received 2");
            
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Manager(name, id, email);
            const err = new Error( "Expected 4 parameters, only received 3");
            
            expect(cb).toThrowError(err);
        });
    });
    describe("Accessors", () => {
        // positive test
        it("should return the correct variables", () => {
            const employee = new Manager(name, id, email, office);

            expect(employee.getName()).toEqual(name);
            expect(employee.getID()).toEqual(id);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getOffice()).toEqual(office);
            expect(employee.getRole()).toEqual(role);
        });

        // Exception tests (I don't know what exceptions there could be)
    })
});