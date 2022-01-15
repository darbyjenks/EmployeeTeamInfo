function makeCardArray(team, role){

    return team.map(employee => {
        if(employee.getRole() != role){
            return;
        }
        return Object.keys(employee).map((key) => {
            return key + ": " + employee[key];
          }).join("</br>");
        }).join("</br>");
 }
 
 function makeHtml(team){
     return `
     <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
     <title>My Team</title>
 </head>
 <body>
<h1>Our Team</h1>
<div class="card" style="width: 18rem;">
<div class="card-body" style='background-color: pink'>
<h5 class = "card-title manager">Managers</h5>
<p class="card-text">${makeCardArray(team, "Manager")}</p>
</div>
</div>
<div class="card" style="width: 18rem;">
<div class="card-body" style='background-color: #ddb6c3'>
<h5 class = "card-title engineer">Engineers</h5>
${makeCardArray(team, "Engineer")}
</div>
</div>
<div class="card" style="width: 18rem;">
<div class="card-body" style='background-color: #a7808d'>
<h5 class = "card-title intern">Interns</h5>
${makeCardArray(team, "Intern")}
</div>

 </body>
 </html>
     `
 };
 module.exports = makeHtml;
