const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("can instantiate employee instance", () => {
        let employee = new Employee("Sarah", 28, "someone@gmail.com");

        expect(employee.name).toEqual('Sarah');
        expect(employee.id).toEqual(28);
        expect(employee.email).toEqual('someone@gmail.com');
    });

    it("can get name via getName()", () => {
        const name = 'Sarah';
        const employee = new Employee(name);

        expect(employee.getName()).toEqual(name);
    });

    it("can get ID via getID()", () => {
        const id = 28;
        const employee = new Employee('Sarah', id);

        expect(employee.getID()).toEqual(id);
    });

    it("can get email via getEmail()", () => {
        const email = 'someone@gmail.com';
        const employee = new Employee('Sarah', 28, email);

        expect(employee.getEmail()).toEqual(email);
    });
    
    it("getRole() will return 'Employee'", () => {
        const role = 'intern';
        const employee = new Employee('Sarah', 28, 'someone@gmail.com', role);

        expect(employee.getRole()).toEqual(role); 
    });

    it("can set name via constructor arguments", () => {
        const name = 'Sarah';
        const employee = new Employee(name);

        expect(employee.name).toEqual(name);
    });

    it("can set id via constructor arguments", () => {
        const id = 28;
        const employee = new Employee('Sarah', id);

        expect(employee.id).toEqual(id);
    });
})