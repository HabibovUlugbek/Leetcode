SELECT 
  U.user_id buyer_id, 
  MIN(U.join_date) join_date, 
  COUNT(o.order_id) orders_in_2019 
FROM 
  Users U 
  LEFT JOIN Orders O ON U.user_id = O.buyer_id 
  AND YEAR(O.order_date) = 2019 
GROUP BY 
  U.user_id;