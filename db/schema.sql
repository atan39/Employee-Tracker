DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR (30) NOT NULL
);

CREATE TABLE roles (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR (30),
        salary DECIMAL, 
        department_id INT NOT NULL,
        FOREIGN KEY (department_id)
        REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    department VARCHAR(30),
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);