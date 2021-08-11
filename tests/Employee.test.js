// can instantiate employee instance (2ms)
// can set name via constructor arguments
// can set id via constructor arguments (1ms)
// can set email via constructor argument
// can get name via getName()
// can get id via getId()
// can get email via getEmail()
// getRole() should return "Employee" (1ms)

const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("can instantiate employee instance", () => {
        let employee = new Employee("Sarah", 28, "someone@email.com");

        expect(employee.name).toEqual('Sarah');
        expect(employee.id).toEqual('28');
        expect(employee.email).toEqual('someone@gmail.com');
    });

    it("can get name via getName()", () => {
        const name = 'Sarah';
        const employee = new Employee(name);

        expect(employee.getName()).toEqual(name);
    });

    it("can get ID via getID()", () => {
        const id = '28';
        const employee = new Employee(name);

        expect(employee.getID()).toEqual('Sarah', id);
    });

    it("can get email via getEmail()", () => {
        const email = 'someone@gmail.com';
        const employee = new Employee('Sarah', 28, email);

        expect(employee.getEmail()).toEqual(email);
    });
    
    it("getRole() will return 'Employee'", () => {
        const role = 'employee';
        const employee = new Employee('Sarah', 28, email, role);

        expect(employee.getRole()).toEqual(role); 
    });
})