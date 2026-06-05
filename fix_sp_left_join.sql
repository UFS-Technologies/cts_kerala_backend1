DROP PROCEDURE IF EXISTS Public_Search_Student_Details;
DELIMITER //
CREATE DEFINER=root@localhost PROCEDURE Public_Search_Student_Details(In Registration_No_ varchar(100))
Begin
 declare studentId int default 0;declare old_student_Id int default 0;
 set old_student_Id=(select COALESCE( MAX( Old_Student_Registration_Id),0) from old_student_registration where Old_Student_Registration_No = Registration_No_);
 if(old_student_Id= 0 || old_student_Id=null)
 then
 set studentId=(select COALESCE( MAX(Student_Id),0) from student where Registration_No=Registration_No_);
 end if;
 if(old_student_Id>0)then
 select * from old_student_registration where Old_Student_Registration_No = Registration_No_;
 elseif  (studentId>0)then
 select student.Student_Id as Old_Student_Registration_Id,Student_Name as Old_Student_Registration_Student_Name,
 Registered_On as Old_Student_Registration_Date,Registration_No as Old_Student_Registration_No,
 Address1 as Old_Student_Registration_Address1,Address2 as Old_Student_Registration_Address2,
 Address3 as Old_Student_Registration_Address3,Address4 as Old_Student_Registration_Address4,
 Phone as Old_Student_Registration_Phone,Mobile as Old_Student_Registration_Mobile,
 Email as Old_Student_Registration_Email,Registered_By as Old_Student_Registration_user_id,
 Registered_On as Old_Student_Registration_entry_Date,student_course.Course_Name as Program,
  concat(Starting_Year,'-',Ending_Year)as Section,1 as Result_Id,'Passed' as Result,student.DeleteStatus
 from student left join student_course on student.Student_Id=student_course.Student_Id
 where student.Registration_No=Registration_No_;
 else
 select -1 as Old_Student_Registration_Id;
 end if;
End //
DELIMITER ;
