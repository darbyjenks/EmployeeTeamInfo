function makeCardArray(team){
   const managerArray = team.filter(employee => employee.getRole() === 'Manager');
   console.log(managerArray);
}
//each type of employee... make sure value returned is a string
function makeHtml(team){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <h1>Our Team</h1>
    ${makeCardArray(team)}
</body>
</html>
    `
};
module.exports = makeHtml;