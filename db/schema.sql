-- Drops the employee_db --
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db database --
CREATE DATABASE employee_db;
-- Uses the employee_db database --
USE employee_db;

-- Creates the table "departments" within employee_db --
CREATE TABLE departments (
  id INT AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);
-- Creates the table "role_title" within employee_db --
CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  salary DECIMAL(8,2),
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES departments(id)
  
 
);
-- Creates the table "employee" within employee_db --
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
 manager_id INT,
FOREIGN KEY(role_id) REFERENCES roles(id),
FOREIGN KEY(manager_id) REFERENCES employees(id)
 
);
