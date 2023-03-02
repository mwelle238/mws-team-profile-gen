const Employee = require('../lib/employee');

const name = "Mike";
const id = 7;
const email = 'example@domain.com'

describe("Employee", () => {
    describe("Initialization", () => {
        //positive test
        it("should create a new employee with valid Name, ID and Email", () => {
            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

        // //exception tests
        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Employee();
            const err = new Error( "Expected 3 parameters, none received");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Employee("Name");
            const err = new Error( "Expected 3 parameters, only received 1");
            
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided correct parameters", () => {
            const cb = () => new Employee("Name", 7);
            const err = new Error( "Expected 3 parameters, only received 2");
            
            expect(cb).toThrowError(err);
        });
    });
});