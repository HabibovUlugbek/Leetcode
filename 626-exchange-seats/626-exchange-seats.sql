# Write your MySQL query statement below
SELECT CASE 
          WHEN id%2 = 0 then id-1
          WHEN id%2 = 1 and id = (select max(id) from Seat) then id
          ELSE id+1
       END AS 'id', student
FROM Seat
ORDER BY id ASC