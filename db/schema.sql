-- Drops the employee_db --
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db database --
CREATE DATABASE employee_db;
-- Uses the employee_db database --
USE employee_db;

-- Creates the table "departments" within employee_db --
CREATE TABLE departments (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
 
);
-- Creates the table "role_title" within employee_db --
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES departments(id)
  
 
);
-- Creates the table "employee" within employee_db --
CREATE TABLE employees (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manage_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manage_id) REFERENCES roles(title)
 
);
