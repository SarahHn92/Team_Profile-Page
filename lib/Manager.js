// ACCEPTANCE CRITERIA
// In addition to Employee's properties and methods, Manager will also have the following:
    // officeNumber
    // getRole()—overridden to return 'Manager' 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // getRole()—overridden to return 'Manager' 
        super (name, id, email, 'Manager');
        this.officeNumber = officeNumber
    }

    // officeNumber
    getOffice() {
        return this.officeNumber
    }
}


module.exports = Manager;