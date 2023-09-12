const inquirer = require("inquirer");
const db = require("./db/connection.js");

const employeePrompt = [
  {
    type: "input",
    name: "first_name",
    message: "What is the first name of the employee?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the last name of the employee?",
  },
  {
    type: "input",
    name: "role_id",
    message: "Enter the role ID of the new employee.",
  },
  {
    type: "input",
    name: "department",
    message: "What department does this employee belong to?",
  },
];

const rolePrompt = [
  {
    type: "input",
    name: "title",
    message: "What role would you like to add?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the base salary?",
  },
  {
    type: "input",
    name: "departmentId",
    message: "What is the department ID?",
  },
];

const updatePrompt = [
  {
    type: "input",
    name: "employeeId",
    message: "What employee role ID do you want to change?",
  },
  {
    type: "input",
    name: "roleId",
    message: "What do you want to change the role Id to?",
  },
];

const departmentPrompt = [
  {
    type: "input",
    name: "department",
    message: "What department do you want to add?",
  },
];

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Exit",
        ],
      },
    ])
    .then((choice) => {
      console.log(choice);
      switch (choice.action) {
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Exit":
          console.log("Goodbye");
          process.exit(0);

        default:
          console.log("error");
      }
    });
};
function viewEmployees() {
  console.log("Viewing employees");
  const sql = "SELECT * FROM employees";
  db.query(sql, function (err, results) {
    if (err) {
      console.log("error");
    }
    console.log("Employee data:");
    console.table(results);
    promptUser();
  });
}
function viewDepartments() {
  console.log("Viewing departments");
  const sql = "SELECT * FROM departments";
  db.query(sql, function (err, results) {
    if (err) {
      console.log("error");
    }
    console.log("Departments:");
    console.table(results);
    promptUser();
  });
}

function viewRoles() {
  console.log("viewing roles");
  const sql = "SELECT * FROM roles";
  db.query(sql, function (err, results) {
    if (err) {
      console.log("error");
    }
    console.log("roles:");
    console.table(results);
    promptUser();
  });
}

function addEmployee() {
  console.log("Adding a new employee");

  inquirer.prompt(employeePrompt).then((answers) => {
    const sql =
      "INSERT INTO employees (first_name, last_name, department, role_id) VALUES (?, ?, ?, ?)";

    db.query(
      sql,
      [
        answers.first_name,
        answers.last_name,
        answers.department,
        answers.role_id,
      ],
      (err, results) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("Added employee:");
          promptUser();
        }
      }
    );
  });
}
function addDepartment() {
  console.log("Adding department");

  inquirer.prompt(departmentPrompt).then((answers) => {

    const sql = "INSERT INTO * departments (name) VALUES (?)";
    db.query(sql, [answers.department], (err, results) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("Added department:");
        promptUser();
      }
    });
  });
}

function addRole() {
  console.log('add role');

  inquirer.prompt(rolePrompt)
  .then((answers) => {
    const sql = 'INSERT INTO * roles (title, salary, department_id) VALUES (?, ?, ?)';
    db.query(
      sql,
      [
        answers.title,
        answers.salary,
        answers.departmentId,
      ],
      (err, results) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("updated roles:");
          promptUser();
        }
      }
    );
  });
}

function updateEmployeeRole () {
  console.log('employee role update');

  inquirer.prompt(updatePrompt)
  .then((answers) => {
    const sql = 'UPDATE employees SET role_id = ? WHERE id = ?'
    db.query(
      sql,
      [answers.role_id, answers.employeeId],(err, results) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("updated employee id roles:");
          promptUser();
        }
      }
    );
  });
}



promptUser();


