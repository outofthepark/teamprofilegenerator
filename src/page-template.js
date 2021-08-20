
  // create the projects section
  const generateManagers = managersArr => {
    return `
    <section class="managersSection">
    <div class="managersDiv">
        ${managersArr
          .map(({ name, email, id, officeNumber }) => {
            return `
            <div class="managerDiv">
              <h2 class="managerName">${name}</h2>
              <h3 class="managerRole">Manager</h3>
              <p>Email: <a href="mailto:${email}" >${email}</a></p>
              <h5 class="managerOfficeNumber">Office Number: ${officeNumber}</h5>
              <p class="managerID">Employee ID: ${id}</p>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };
  

// create the projects section
const generateEngineers = engineersArr => {
    return `
    <section class="engineersSection">
      <div class="engineersDiv">
      ${engineersArr
        .map(({ name, email, id, github }) => {
          return `
          <div class="engineerDiv">
            <h2 class="engineerName">${name}</h2>
            <h3 class="engineerRole">Engineer</h3>
            <p>Email: <a href="mailto:${email}" >${email}</a></p>
            <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer" >${name}'s Github</a>
            <p class="engineerID">Employee ID: ${id}</p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
    `;
  };


// create the projects section
const generateInterns = internsArr => {
    return `
    <section class="internsSection">
      <div class="internsDiv">
      ${internsArr
        .map(({ name, email, id, school }) => {
          return `
          <div class="internDiv">
            <h2 class="internName">${name}</h2>
            <h3 class="internRole">Intern</h3>
            <p>Email: <a href="mailto:${email}" >${email}</a></p>
            <p class="internSchool">Student of ${school}</p>
            <p class="internID">Employee ID: ${id}</p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
    `;
  };

  // export function to generate entire page
  module.exports = myTeam => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title${myTeam.name.teamName}></title>
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="topDiv">
            <h1 class="teamTitle">${myTeam.name.teamName}</h1>
        
            <div class="employeesDiv">
                ${generateManagers(myTeam.managers)}
                ${generateEngineers(myTeam.engineers)}
                ${generateInterns(myTeam.interns)}
            </div>
        </div>
    </body>
    </html>
    `;
  };
  