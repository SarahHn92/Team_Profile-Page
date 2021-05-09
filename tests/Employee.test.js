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
        const worker = new Employee("Sarah", 28, "someone@email.com");

        expect(worker.name).toEqual("Sarah");
        expect(worker.id).toEqual(28);
        expect(worker.email).toEqual("someone@email.com");
    });
})