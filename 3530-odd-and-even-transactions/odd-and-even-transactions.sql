select transaction_date,
SUM(CASE WHEN amount % 2 =1 THEN amount ELSE 0 END) as odd_sum,
SUM(CASE WHEN amount % 2 = 0 THEN amount ELSE 0 END) as even_sum
from transactions group by transaction_date order by transaction_date
