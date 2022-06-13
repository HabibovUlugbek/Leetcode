select a.name,
sum(b.amount) as balance 
from Users a,Transactions b
where a.account=b.account
group by a.name
having sum(b.amount)>10000;