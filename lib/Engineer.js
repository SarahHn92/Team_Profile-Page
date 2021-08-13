    // ACCEPTANCE CRITERIA
    // In addition to Employee's properties and methods, Engineer will also have the following:
        // github—GitHub username
        // getGithub()
        // getRole()—overridden to return 'Engineer'

const Employee = require("./Employee");

    
class Engineer extends Employee {
    constructor (name, id, email, githubUser) {
        // getRole()—overridden to return 'Engineer'
        super (name, id, email, 'Engineer');
        this.githubUser = githubUser;
    }

    // getGithub()
    getGitHub() {
        return this.githubUser;
    }
}

module.exports = Engineer;