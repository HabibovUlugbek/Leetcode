/* Write your PL/SQL query statement below */
select 
     to_char(event_day,'YYYY-MM-DD') as day
    ,emp_id
    ,sum(out_time - in_time) as total_time
from employees
group by to_char(event_day,'YYYY-MM-DD'), emp_id;