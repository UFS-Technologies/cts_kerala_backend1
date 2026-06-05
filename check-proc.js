const db = require('./dbconnection');

const queries = [
    `ALTER TABLE exam_details ADD COLUMN Correct_Answer VARCHAR(100) DEFAULT NULL;`,
    `UPDATE exam_details ed INNER JOIN question q ON ed.Question_Id = q.Question_Id SET ed.Correct_Answer = q.Correct_Answer;`,
    `DROP PROCEDURE IF EXISTS Submit_Exam;`,
    `CREATE PROCEDURE Submit_Exam(In Question_Data_ json,Exam_Master_Id_ int,Student_Id_ int,Mark_Obtained_ int,Status_ int,Student_Course_Part_Id_ int,Course_Subject_Id_ int,
Part_Name_ varchar(100),Month_Id_ int,Month_name_ varchar(100),Year_Id_ int,Year_name_ varchar(100))
BEGIN
declare i int;
declare Question_Name_ varchar(100);declare Option_1_ varchar(100);declare Option_2_ varchar(100);declare Option_3_ varchar(100);declare Option_4_ varchar(100);
declare Correct_Answer_ varchar(100);declare Question_Answer_ varchar(100);declare subject_name_ varchar(100);declare course_name_ varchar(100);
declare Question_Id_ int;declare Semester_Id_ int;declare Subject_Id_ int;declare Course_Id_ int;declare exam_status_ varchar(100);
declare Minimum_Mark_ int;declare Mark_List_Master_Id_ int;
declare Exam_Status_Id_ int;declare Maximum_Mark_ int;declare Mark_List_Data_ int;
set i=0;
set Mark_List_Data_ =0;
   
WHILE i < JSON_LENGTH(Question_Data_) DO
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Question_Name'))) INTO Question_Name_;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Question_Id'))) INTO Question_Id_;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Option_1'))) INTO Option_1_ ;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Option_2'))) INTO Option_2_ ;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Option_3'))) INTO Option_3_ ;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Option_4'))) INTO Option_4_ ;
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Correct_Answer'))) INTO Correct_Answer_ ;  
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Semester_Id'))) INTO Semester_Id_ ;  
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Subject_Id'))) INTO Subject_Id_ ;  
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Course_Id'))) INTO Course_Id_ ;  
SELECT JSON_UNQUOTE (JSON_EXTRACT(Question_Data_,CONCAT('$[',i,'].Question_Answer'))) INTO Question_Answer_ ;  

    insert into exam_details(Exam_Master_Id,Question_Id,Question_Name,Option_1,Option_2,Option_3,Option_4,Question_Answer,Correct_Answer,DeleteStatus)
    values(Exam_Master_Id_,Question_Id_,Question_Name_,Option_1_,Option_2_,Option_3_,Option_4_,Question_Answer_,Correct_Answer_,0);    
     
SELECT i + 1 INTO i;      
END WHILE;
update student_course_subject set Exam_Attended_Status =2 ,Obtained_Mark = Mark_Obtained_ where Student_Id = Student_Id_ and Course_Id = Course_Id_ and Subject_Id = Subject_Id_ and Part_Id = Semester_Id_ and DeleteStatus = 0;
   
update exam_master set End_Time = now() , Mark_Obtained = Mark_Obtained_ where Student_Id = Student_Id_ and Subject_Id = Subject_Id_ and DeleteStatus = 0;    
   
   # SET Mark_List_Master_Id_ = (SELECT  COALESCE( MAX(Mark_List_Master_Id ),0)+1 FROM mark_list_master);
    set Minimum_Mark_ = (select Minimum_Mark from student_course_subject where Student_Id = Student_Id_ and Course_Id = Course_Id_  and Subject_Id = Subject_Id_ and Part_Id = Semester_Id_  and DeleteStatus = 0);  

    set Maximum_Mark_=(select Maximum_Mark from student_course_subject where Student_Id = Student_Id_ and Course_Id = Course_Id_ and Subject_Id = Subject_Id_ and Part_Id = Semester_Id_ and DeleteStatus = 0 );
    set exam_status_='pass';
   
    if Mark_Obtained_< Minimum_Mark_ then
set Mark_Obtained_ = Minimum_Mark_;
end if;
   
 #set Exam_Status_Id_ = (select Exam_Status_Id from exam_status where Exam_Status_Name = exam_status_);
    set subject_name_ = (select Subject_Name from subject where Subject_Id = Subject_Id_);
    set course_name_ = (select Course_Name from course where Course_Id = Course_Id_);
   
set Mark_List_Data_ = (select Mark_List_Id from mark_list where  Subject_Id = Subject_Id_ and Student_Id = Student_Id_ and Part_Id = Semester_Id_ and Course_Subject_Id = Course_Subject_Id_ and  DeleteStatus = 0);
    if Mark_List_Data_>0 then
update mark_list set Online_Exam_Mark = Mark_Obtained_ ,Exam_Status_Id = 0 where Mark_List_Id = Mark_List_Data_ and Course_Subject_Id = Course_Subject_Id_ and  DeleteStatus = 0;
        update student_course_subject set Obtained_Mark = Mark_Obtained_  where Student_Id = Student_Id_ and Subject_Id = Subject_Id_ and Part_Id = Semester_Id_ and Course_Id = Course_Id_ ;
else
insert into mark_list(Student_Id,Subject_Id,Subject_Name,Minimum_Mark,Maximum_Mark,Online_Exam_Mark,Exam_Status_Id,Part_Id,Student_Course_Part_Id,Course_Subject_Id,
Part_Name,Month_Id,Month_Name,Year_Id,Year_Name,DeleteStatus)
values(Student_Id_,Subject_Id_,subject_name_,Minimum_Mark_,Maximum_Mark_,Mark_Obtained_,0,Semester_Id_,Student_Course_Part_Id_,Course_Subject_Id_,
Part_Name_,Month_Id_,Month_name_,Year_Id_,Year_name_,0);
  update student_course_subject set Obtained_Mark = Mark_Obtained_  where Student_Id = Student_Id_ and Subject_Id = Subject_Id_ and Part_Id = Semester_Id_ and Course_Id = Course_Id_ ;
#insert into mark_list_master(Mark_List_Master_Id,Student_Id,Course_Id,Course_Name,DeleteStatus)
#values(Mark_List_Master_Id_,Student_Id_,Course_Id_,course_name_,0);
end if;
select Exam_Master_Id_;
END;`,
    `DROP PROCEDURE IF EXISTS Get_Exam_Details_By_Master;`,
    `CREATE PROCEDURE Get_Exam_Details_By_Master(IN p_Exam_Master_Id INT)
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
END;`
];

async function run() {
    for (let q of queries) {
        console.log("Running query:\n", q.substring(0, 100) + "...");
        try {
            await new Promise((resolve, reject) => {
                db.query(q, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });
            console.log("Success");
        } catch (e) {
            console.error("Error executing query: ", e.message);
        }
    }
    process.exit(0);
}

run();
