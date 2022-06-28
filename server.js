const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const viewDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

const viewRoles = () => {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

const viewEmployees = () => {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    init();
  });
};

const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'deptName',
      message: 'What is the name of the new department?',
    }
  ]).then((answers) => {
    db.query('INSERT INTO department SET ?',
      {
        name: answers.deptName
      })
      init();
  });
};

const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleTitle',
      message: 'What is the title of the new role?',
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'What is the salary of the new role?',
    },
    {
      type: 'input',
      name: 'roleDepId',
      message: 'What is the department of the new role?',
    },
  ]).then((answers) => {
    db.query('INSERT INTO role SET ?', 
    {
      title: answers.roleTitle,
      salary: answers.roleSalary,
      department_id: answers.roleDepId,
    })
    init();
  });
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the employee\'s first name?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the employee\'s last name?',
    },
    {
      type: 'input',
      name: 'empRoleId',
      message: 'What is the employee\'s role id?',
    },
    {
      type: 'input',
      name: 'empManagerId',
      message: 'What is the employee\'s manager id?',
    },
  ]).then((answers) => {
    db.query('INSERT INTO employee SET ?', 
    {
      first_name: answers.firstName,
      last_name: answers.lastName,
      role_id: answers.empRoleId,
      manager_id: answers.empManagerId,
    })
    init()
  })
}

const updateRole = () => {
  db.query('SELECT * FROM employee', (err, res) => {
    let allEmployeeData = res.map(({ id, first_name }) => ({
      name: first_name,
      value: id
    }))
    console.log(allEmployeeData);

    inquirer.prompt([
      {
        type: 'list',
        name: 'emp',
        message: 'What employee are you updating?',
        choices: allEmployeeData
      },
      {
        type: 'input',
        name: 'newRole',
        message: 'What is this employees new role id?',
      },
    ]).then((answers) => {
      db.query('UPDATE employee SET ? WHERE ?',
        {
          id: answers.emp,
          role_id: answers.newRole
        })
        init()
    })
  })
}

const init = () => {
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
        'Finish',
      ],
    },
  ]).then((answers) => {
    switch (answers.questions) {
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
      default: {
        console.log("exiting");
        process.exit();
      }
    }
  });
};


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracker_db'
  },
  init()
);
