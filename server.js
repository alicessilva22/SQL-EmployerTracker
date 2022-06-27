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
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};
const viewRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  });
};
const viewEmployee = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};
const addDepartment = () => {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};
const addRole = () => {
  db.query('INSERT INTO department', function (err, results) {
    console.log(results);
  });
};
const addEmployee = () => {
  db.query('INSERT INTO employee', function (err, results) {
    console.log(results);
  });
};
const updateRole = () => {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
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
      viewDepartments();
    }
    case 'View all roles': {
      viewRoles();
    }
    case 'View all employees': {
      viewEmployee();
    }
    case 'Add a department': {
      addDepartment();
    }
    case 'Add a role': {
      addRole();
    }
    case 'Add an employee': {
      addEmployee();
    }
    case 'Update an employee role': {
      updateRole();
    }
    case 'Finish': {

    }
  }
});