SELECT 
    pp1.product_id AS product1_id,
    pp2.product_id AS product2_id,
    pi1.category AS product1_category,
    pi2.category AS product2_category,
    COUNT(DISTINCT pp1.user_id) AS customer_count
FROM ProductPurchases pp1
JOIN ProductPurchases pp2 
    ON pp1.user_id = pp2.user_id AND pp1.product_id < pp2.product_id
JOIN ProductInfo pi1 
    ON pp1.product_id = pi1.product_id
JOIN ProductInfo pi2 
    ON pp2.product_id = pi2.product_id
GROUP BY 
    pp1.product_id, pi1.category, 
    pp2.product_id, pi2.category
HAVING COUNT(DISTINCT pp1.user_id) >= 3
ORDER BY 
    customer_count DESC, 
    product1_id ASC, 
    product2_id ASC;
