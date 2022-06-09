SELECT
    product_id,
    product_name
FROM Product
# get product where only sold in first quarter 2019
WHERE product_id NOT IN (
    # get all product_id in table Sales Where not sold in first quarter 2019
    SELECT
        product_id
    FROM Sales
    WHERE sale_date < "2019-01-01" OR sale_date > '2019-03-31'
);