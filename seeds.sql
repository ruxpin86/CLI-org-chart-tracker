USE employees_db;

INSERT INTO  department(name)
VALUES ("Sales"),
       ("Dev"),
       ("Finance"),
       ("Legal");

INSERT INTO  role(title, salary, department_id)
VALUES ("Sales Manager", 140000, 1) ,
       ("Sales Rep", 80000, 1),
       ("Senior Dev", 160000, 2),
       ("Junior Dev", 90000, 2),
       ("Finance Manager", 180000, 3),
       ("Finance Associate", 950000, 3),
       ("Senoir Counselor", 200000, 4),
       ("Junior Counselor", 130000, 4);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
       ("Jim", "Bo", 2, 1),
       ("Molly", "Smith", 3, null),
       ("Odie", "Dog", 4, null),
       ("Ollie", "Cat", 5, null)