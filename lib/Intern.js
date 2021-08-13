 // ACCEPTANCE CRITERIA 
// In addition to Employee's properties and methods, Intern will also have the following:
    // school
    // getSchool()
    // getRole()—overridden to return 'Intern'

const Employee = require("./Employee");

            

class Intern extends Employee {
    constructor (name, id, email, school) {
        // getRole()—overridden to return 'Intern'
        super (name, id, email, "Intern");
        this.school = school;
    }

    // getSchool()
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;