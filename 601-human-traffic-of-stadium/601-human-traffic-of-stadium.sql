select distinct s1.* from stadium s1 join stadium s2 join stadium s3
on (s1.id = s2.id - 1 and s1.id = s3.id - 2) OR
(s1.id = s2.id + 1 and s1.id = s3.id - 1) OR
(s1.id = s2.id + 1 and s1.id = s3.id + 2)
where s1.people >= 100 and s2.people >= 100 and s3.people >= 100
order by visit_date