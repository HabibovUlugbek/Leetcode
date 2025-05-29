WITH RankedScores AS (
    SELECT 
        student_id,
        subject,
        score,
        exam_date,
        RANK() OVER (PARTITION BY student_id, subject ORDER BY exam_date) AS first_rank,
        RANK() OVER (PARTITION BY student_id, subject ORDER BY exam_date DESC) AS last_rank
    FROM Scores
),
FirstAndLastScores AS (
    SELECT
        student_id,
        subject,
        MAX(CASE WHEN first_rank = 1 THEN score END) AS first_score,
        MAX(CASE WHEN last_rank = 1 THEN score END) AS last_score,
        COUNT(*) AS exam_count
    FROM RankedScores
    GROUP BY student_id, subject
)
SELECT 
    student_id,
    subject,
    first_score,
    last_score as latest_score
FROM FirstAndLastScores
WHERE exam_count >= 2 AND last_score > first_score
ORDER BY student_id, subject;
