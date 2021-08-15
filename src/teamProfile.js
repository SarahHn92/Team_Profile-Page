// HTML template
const html = (employees) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<style>
    .card-columns {
        column-count: 3;
    }
    .fas {
        margin-right: 0.5em;
    }
</style>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 text-center">Our Team Profile</h1>
        </div>
    </div>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
            ${employeeDataOutput(employees)}
        </div>
    </section>
    </body>
</html>
    `;
}

// Generating cards with employee information based on input data
function employeeDataOutput(employees) {
    let teamHTML = "";
    for (employee of employees) {
        switch (employee.getRole()) {
            case 'Manager':
                teamHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                        </div>
                        <div class="card-body">
                            <h6>${employee.getRole()}</h6>
                            <p class="managerID">ID: ${employee.id}</p>
                            <p class="managerEmail">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                            <p class="managerOffice">Office No: ${employee.officeNumber}</p>
                        </div>
                    </div>
                </div>
                `
                break;
            case 'Engineer':
                teamHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                        </div>
                        <div class="card-body">
                            <h6>${employee.getRole()}</h6>
                            <p class="engineerID">ID: ${employee.id}</p>
                            <p class="engineerEmail">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                            <p class="engineerGithub">GitHub: <a href="https://www.github.com/${employee.getGitHubName()}">${employee.getGitHubName()}</a></p>
                        </div>
                    </div>
                </div>
                `
                break;
            case 'Intern':
                teamHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                        </div>
                        <div class="card-body">
                            <h6>${employee.getRole()}</h6>
                            <p class="internID">ID: ${employee.id}</p>
                            <p class="internEmail">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                            <p class="internSchool">School: ${employee.school}</p>
                        </div>
                    </div>
                </div>
                `
                break;
        }
    }
    return teamHTML;
}

module.exports = html;