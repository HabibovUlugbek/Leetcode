SELECT Department.Name AS"Department",e.Name AS"Employee",e.Salary FROM
(SELECT DepartmentId,Name,Salary,DENSE_RANK() OVER(PARTITION BY DepartmentId ORDER BY Salary DESC)AS r
FROM Employee)e
JOIN Department ON e.DepartmentId=Department.Id
WHERE r<=3