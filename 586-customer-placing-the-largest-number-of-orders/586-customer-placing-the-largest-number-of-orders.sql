SELECT a.customer_number as customer_number FROM (SELECT customer_number, COUNT(*) AS count FROM Orders GROUP BY customer_number  ORDER BY count DESC LIMIT 1) a
