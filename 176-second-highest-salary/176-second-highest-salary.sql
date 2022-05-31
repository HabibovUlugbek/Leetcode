SELECT MAX(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary NOT IN(SELECT MAX(Salary) from Employee)