const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'department_db'
  },
  console.log(`Connected to the department_db database.`)
);

// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'questions',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employess',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
    ]
    }
]).then((answers) => {
  console.log(answers);
  switch(answers.query) {
    case 'View all departments': {
      
    }
    case 'View all roles': {

    }
    case 'View all employees': {

    }
    case 'Add a department': {
      
    }
    case 'Add a role': {

    }
    case 'Add an employee': {

    }
    case 'Update an employee role': {

    }
    case 'Finish': {
      
    }
  }
});