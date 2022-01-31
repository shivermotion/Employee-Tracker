-- Drops the employee_db --
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db database --
CREATE DATABASE employee_db;
-- Uses the employee_db database --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE departments (
  id INT PRIMARY KEY,
  department_name VARCHAR(30),
 
);
-- Creates the table "role_title" within employee_db --
CREATE TABLE roles (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL
  department_id INT
 
);
-- Creates the table "employee" within employee_db --
CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manage_id INT NOT NULL
 
);
