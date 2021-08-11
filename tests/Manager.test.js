const Manager = require('../lib/Manager');

describe(Manager, () => {
    it("can set office number via constructor argument", () => {
        const officeNumber = 5;
        const manager = new Manager('Sarah', 28, 'someone@gmail.com', officeNumber);

        expect(manager.officeNumber).toEqual(officeNumber);
    });

    it("should return 'Manager' when getRole() is called", () => {
        const role = 'Manager';
        const manager = new Manager('Sarah', 28, 'someone@gmail.com', role);

        expect(manager.getRole()).toEqual(role);
    });

    it("can get office number via getOffice()", () => {
        const officeNumber = 5;
        const manager = new Manager('Sarah', 28, 'someone@gmail.com', officeNumber);

        expect(manager.getOffice()).toEqual(officeNumber);
    })
});