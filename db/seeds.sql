INSERT INTO department (name)
VALUES ("Executive"),
       ("Management"),
       ("Operations");
 

INSERT INTO role (title, salary, department_id)
VALUES ("Chief executive officer", 900000, 1),
       ("Chief operating officer", 800000, 1),
       ("Chief financial officer", 700000, 1),
       ("Chief marketing officer", 600000, 1 ),
       ("Marketing Manager", 500000, 2),
       ("Project Manager", 400000, 2 ),
       ("Finance Manager", 300000, 2),
       ("Human Resources Manager", 200000, 2),
       ("Accountant", 100000, 3),
       ("Sales Representative", 350000, 3),
       ("Business Analyst", 250000, 3),
       ("Marketing specialist", 150000, 3);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Olivia", "Rodrigo", 1, null),
       ("Justin", "Bieber", 2, null),
       ("Ariana", "Grande", 3, null),
       ("Dua", "Lipa", 4, null),
       ("Bruno", "Mars", 5, 4),
       ("Ed", "Sheeran", 6, 2), 
       ("Billie", "Eilish", 7, 3),
       ("Taylor", "Swift", 8, 2),
       ("Charlie", "Puth", 9, 7),
       ("Camila", "Cabello", 10, 6),
       ("Harry", "Styles", 11, 6),
       ("Miley", "Cyrus", 12, 5);