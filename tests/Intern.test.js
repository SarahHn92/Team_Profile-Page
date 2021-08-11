const Intern = require('../lib/Intern');

describe(Intern, () => {
    it("can set school via constructor argument", () => {
        const school = 'USYD';
        const intern = new Intern('Sarah', 28, 'someone@gmail.com', school);

        expect(intern.school).toEqual(school);
    });

    it("should return 'Intern' when getRole() is called", () => {
        const role = 'Intern';
        const intern = new Intern('Sarah', 28, 'someone@gmail.com', role);

        expect(intern.getRole()).toEqual(role);
    });

    it("can get school via getSchool()", () => {
        const school = 'USYD';
        const intern = new Intern('Sarah', 28, 'someone@gmail.com', school);

        expect(intern.getSchool()).toEqual(school);
    })
});
