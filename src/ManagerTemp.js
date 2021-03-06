const EngineerTemplate = require("./EngineerTemp"); 
const InternTemplate = require("./InternTemp")

const template = (manager, engineer, intern) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <style>
        .title {
            background-color: firebrick;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        .card {
            margin: 0 auto; 
            float: none; 
            margin-bottom: 10px; 
            margin-top: 30px;
        }
        .card-body{
            background-color: #1E90FF;
            color: white;
        }
    </style>
    <div class="title">
        <h1>Team Members</h1>
    </div>
    <div class="card" style="width: 18rem;">
    ${manager.map(item => {
        return`<div class="card-body">
        <h5 class="card-title">${item.getName()}</h5>
        <h5>${item.getRole()}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
        </svg>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${item.getId()}</li>
        <li class="list-group-item"><a href="mailto:${item.getEmail()}">Email:${item.getEmail()} </a></li>
        <li class="list-group-item">OfficeNumber: ${item.getOfficeNumber()} </li>
      </ul>
    </div>`
})}
</div>
  </div>
    </div>
    <div class="engineer-container">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
            ${EngineerTemplate(engineer)} 
        </div>
    <div class="intern-container">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
            ${InternTemplate(intern)}
        </div>
    </div>
    <script src="./dist/template.js"></script>
</body>
</html>`


module.exports = template;


