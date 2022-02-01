INSERT INTO departments (department_name)
VALUES (001, "Information Technology"),
       (002, "Sales"),
       (003, "Accounting"),
       (004, "Human Resources");



INSERT INTO roles (title, salary, department_id)
VALUES (010, "Chief Information Security Officer", 200000, 001),
       (020, "Sales Executive", 70000, 002),
       (030, "Account Executive", 80000, 003),
       (040, "Human Resources Assistant", 40000,004);


INSERT INTO employees (first_name, last_name, role_id,manager_id)
VALUES (100, "Ryo","Hazuki", 010),
       (200, "Kentaro" "Oe", 020),
       (300, "Naru","Narusegawa",030),
       (400, "Sam" "Strand",040);


       