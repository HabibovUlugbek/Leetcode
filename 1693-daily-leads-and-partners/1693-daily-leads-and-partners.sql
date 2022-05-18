Select to_char(date_id, 'yyyy-mm-dd') as date_id, make_name,
count(distinct(lead_id)) As unique_leads,
count(distinct(partner_id)) As unique_partners
From DailySales
group By date_id, make_name