SELECT e.name , b.bonus as bonus FROM Employee e LEFT JOIN Bonus b ON b.empId = e.empId WHERE COALESCE(b.bonus, 0) < 1000;
