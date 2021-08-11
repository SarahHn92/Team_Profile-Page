const Engineer = require('../lib/Engineer');

describe(Engineer, () => {
    it("can set GitHub via constructor argument", () => {
        const githubName = 'SarahHn92';
        const engineer = new Engineer('Sarah', 28, 'someone@gmail.com', githubName);

        expect(engineer.githubName).toEqual(githubName);
    });

    it("should return 'Engineer' when getRole() is called", () => {
        const role = 'Engineer';
        const engineer = new Engineer('Sarah', 28, 'someone@gmail.com', role);

        expect(engineer.getRole()).toEqual(role);
    });

    it("can get GitHub name via getGitHubName()", () => {
        const githubName = 'SarahHn92';
        const engineer = new Engineer('Sarah', 28, 'someone@gmail.com', githubName);

        expect(engineer.getGitHubName()).toEqual(githubName);
    })
});

//  can set GitHub account via constructor (4ms)
// getRole() should return "Engineer"
// can get GitHub username via getGithub() (1ms)