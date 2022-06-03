# SELECT E.name AS Employee , E.salary AS Salary , D.name AS Department
# FROM Employee E
# JOIN Department D 
# WHERE (MAX(Salary) AND )

SELECT Department.Name AS Department ,Employee.Name AS Employee, Salary
FROM Employee JOIN Department ON Employee.DepartmentId = Department.id
WHERE (DepartmentId, Salary ) IN
(SELECT DepartmentId,MAX(Salary) FROM Employee
GROUP BY DepartmentId)