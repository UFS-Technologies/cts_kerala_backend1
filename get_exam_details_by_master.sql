DROP PROCEDURE IF EXISTS Get_Exam_Details_By_Master;
DELIMITER //
CREATE PROCEDURE Get_Exam_Details_By_Master(IN p_Exam_Master_Id INT)
BEGIN
    SELECT 
        ed.Exam_Details_Id,
        ed.Exam_Master_Id,
        ed.Question_Id,
        ed.Question_Name,
        ed.Option_1,
        ed.Option_2,
        ed.Option_3,
        ed.Option_4,
        ed.Question_Answer,
        ed.Correct_Answer
    FROM exam_details ed
    WHERE ed.Exam_Master_Id = p_Exam_Master_Id
    AND (ed.DeleteStatus = 0 OR ed.DeleteStatus IS NULL);
END //
DELIMITER ;
