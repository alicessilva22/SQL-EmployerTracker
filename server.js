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


const viewDepartments = () => {
  db.query('SELECT departments * FROM department', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const viewRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const viewEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const addDepartment = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const addRole = () => {
  db.query('INSERT INTO department', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const addEmployee = () => {
  db.query('INSERT INTO employee', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};
const updateRole = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) return console.error(err);
    return console.table(results);
  });
};

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'questions',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
    ]
    }
]).then((answers) => {
  switch(answers.query) {
    case 'View all departments': {
      viewDepartments();
      break;
    }
    case 'View all roles': {
      viewRoles();
      break;
    }
    case 'View all employees': {
      viewEmployees();
      break;
    }
    case 'Add a department': {
      addDepartment();
      break;
    }
    case 'Add a role': {
      addRole();
      break;
    }
    case 'Add an employee': {
      addEmployee();
      break;
    }
    case 'Update an employee role': {
      updateRole();
      break;
    }
    case 'Finish': {

    }
  }
});