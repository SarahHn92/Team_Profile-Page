    
    // ACCEPTANCE CRITERIA   
    // The first class is an Employee parent class 
    // with the following properties and methods:
    //    name
    //    id
    //    email
    //    getName()
    //    getId()
    //    getEmail()
    //    getRole()—returns 'Employee'

//constructor
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }  

    getemail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}


module.exports = Employee;