SELECT Customers.name AS Customers 
FROM Customers
WHERE Customers.id NOT IN 
(
   SELECT customerId from Orders
);
