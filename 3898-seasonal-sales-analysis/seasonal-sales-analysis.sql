WITH seasonal_sales AS (
  SELECT  
  CASE
    WHEN EXTRACT(MONTH FROM s.sale_date) BETWEEN 3 AND 5 THEN 'Spring'
    WHEN EXTRACT(MONTH FROM s.sale_date) BETWEEN 6 AND 8 THEN 'Summer'
    WHEN EXTRACT(MONTH FROM s.sale_date) BETWEEN 9 AND 11 THEN 'Fall'
    ELSE 'Winter'
  END AS season,
  p.category as category, 
  SUM(s.quantity) AS total_quantity, 
  SUM(s.quantity * s.price) AS total_revenue
FROM sales s
JOIN products p ON s.product_id = p.product_id
GROUP BY season, p.category
),
ranked_products AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY season ORDER BY total_quantity DESC) AS rn
  FROM seasonal_sales
)
SELECT season, category, total_quantity, total_revenue
FROM ranked_products
WHERE rn = 1 order by season asc
