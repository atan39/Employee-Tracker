USE employees_db;

INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Lead', 110000, 1),
        ('Lead Engineer', 160000, 2),
        ('Lawyer', 200000, 4),
        ('Accountant', 150000, 3),
        ('Software Engineer', 130000, 2);

INSERT INTO employees (first_name, last_name, role_id, department, manager_id)
VALUES  ('Apple', 'Pie', 2, 'Lawyer', 1),
        ('Heather', 'Pascal', 3, 'Finance', NULL),
        ('Amber', 'Riley', 4, 'Legal', 2);
        
