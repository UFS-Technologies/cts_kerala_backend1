const db = require('./dbconnection');

function query(sql, args = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, args, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

async function main() {
  try {
    console.log("Running migration...");

    // 1. Add Mark_List_Status column if not exists
    try {
      await query(`
        ALTER TABLE student_course_part 
        ADD COLUMN Mark_List_Status VARCHAR(50) DEFAULT 'Pending'
      `);
      console.log("Column Mark_List_Status added successfully.");
    } catch (err) {
      if (err.code === 'ER_DUP_COLUMN_NAME' || err.code === 'ER_DUP_FIELDNAME') {
        console.log("Column Mark_List_Status already exists.");
      } else {
        throw err;
      }
    }

    // Update existing rows to 'Pending' if any are null
    await query(`
      UPDATE student_course_part 
      SET Mark_List_Status = 'Pending' 
      WHERE Mark_List_Status IS NULL
    `);
    console.log("Existing null values for Mark_List_Status updated to 'Pending'.");

    // 2. Drop and recreate Load_Student_Part
    await query("DROP PROCEDURE IF EXISTS Load_Student_Part");
    await query(`
      CREATE PROCEDURE Load_Student_Part(in Student_Id_ int)
      BEGIN
        select Part_Id,Part_Name,Month_Id,Month_Name,Year_Id,Year_Name,Student_Course_Part_Id,
        (Date_Format(Mark_List_Issue_Date,'%Y-%m-%d')) Mark_List_Issue_Date,
        (Date_Format(Mark_List_Issue_Date,'%d-%m-%Y')) Mark_List_Issue_Date_T,
        Mark_List_Status
        from student_course_part 
        where student_course_part.DeleteStatus=0 and Student_Id=Student_Id_;
      END
    `);
    console.log("Recreated Load_Student_Part stored procedure.");

    // 3. Drop and recreate Save_Mark_List
    await query("DROP PROCEDURE IF EXISTS Save_Mark_List");
    await query(`
      CREATE PROCEDURE Save_Mark_List(
        In Mark_List_Id_ int,
        Student_Id_ int,
        Student_Course_Part_Id_ int,
        User_Id_ int,
        Grade_ varchar(100),
        Part_Id_ int,
        Part_Name_ varchar(100),
        Month_Id_ int,
        Month_Name_ varchar(100),
        Year_Id_ int,
        Year_Name_ varchar(100),
        Issue_Date_ datetime,
        Mark_List_Data JSON,
        Mark_List_Status_ varchar(100)
      )
      Begin
        Declare Subject_Id_ int ; Declare Subject_Name_ varchar(100) ; Declare Minimum_Mark_ varchar(100);
        Declare Maximum_Mark_ varchar(100) ; Declare Internal_Mark_ varchar(100) ; Declare External_Mark_ varchar(100);
        Declare Technical_Skill_ varchar(100) ; Declare Mark_Obtained_ varchar(100);declare Course_Subject_Id_ int;
        declare Exam_Status_Id_ int;declare Course_Id_ int;declare Online_Exam_Mark_ varchar(100);
        DECLARE i int DEFAULT 0;

        delete from Mark_List where Student_Course_Part_Id=Student_Course_Part_Id_ and
        Student_Id=Student_Id_ and DeleteStatus=0;
        
        update student_course_part 
        set Mark_List_Issue_Date = Issue_Date_, Mark_List_Status = Mark_List_Status_ 
        where Student_Course_Part_Id = Student_Course_Part_Id_;
        
        WHILE i < JSON_LENGTH(Mark_List_Data) DO
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Subject_Id'))) INTO Subject_Id_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Subject_Name'))) INTO Subject_Name_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Minimum_Mark'))) INTO Minimum_Mark_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Maximum_Mark'))) INTO Maximum_Mark_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Internal_Mark'))) INTO Internal_Mark_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].External_Mark'))) INTO External_Mark_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Technical_Skill'))) INTO Technical_Skill_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Mark_Obtained'))) INTO Mark_Obtained_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Exam_Status_Id'))) INTO Exam_Status_Id_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Course_Subject_Id'))) INTO Course_Subject_Id_;
          SELECT JSON_UNQUOTE (JSON_EXTRACT(Mark_List_Data,CONCAT('$[',i,'].Online_Exam_Mark'))) INTO Online_Exam_Mark_;
          
          set Course_Id_ = (select Course_Id from course_subject where Course_Subject_Id = Course_Subject_Id_ and DeleteStatus = 0);
          
          INSERT INTO Mark_List(Student_Id,Student_Course_Part_Id,User_Id,Subject_Id ,Subject_Name ,Minimum_Mark ,Maximum_Mark ,
          Internal_Mark,External_Mark,Technical_Skill,Mark_Obtained,Grade,Exam_Status_Id,Part_Id,Part_Name,
          Month_Id,Month_Name,Year_Id,Year_Name,Course_Subject_Id,Online_Exam_Mark,DeleteStatus )
          values (Student_Id_,Student_Course_Part_Id_,User_Id_,Subject_Id_ ,Subject_Name_ ,Minimum_Mark_ ,Maximum_Mark_ ,
          Internal_Mark_,External_Mark_,Technical_Skill_,Mark_Obtained_,Grade_,Exam_Status_Id_,Part_Id_,Part_Name_,
          Month_Id_,Month_Name_,Year_Id_,Year_Name_,Course_Subject_Id_,Online_Exam_Mark_,false);
          
          set Mark_List_Id_ =(SELECT LAST_INSERT_ID());
          update student_course_subject set Obtained_Mark = Mark_Obtained_ where Student_Id = Student_Id_ and Subject_Id = Subject_Id_ and Part_Id = Part_Id_ and Course_Id = Course_Id_ ;

          SELECT i + 1 INTO i;
        END WHILE;
        
        select Mark_List_Id_,(Date_Format(Issue_Date_,'%d-%m-%Y')) Mark_List_Issue_Date_T;
      End
    `);
    console.log("Recreated Save_Mark_List stored procedure.");

    // 4. Add Certificate_Status column if not exists
    try {
      await query(`
        ALTER TABLE student_course 
        ADD COLUMN Certificate_Status VARCHAR(50) DEFAULT 'Pending'
      `);
      console.log("Column Certificate_Status added successfully.");
    } catch (err) {
      if (err.code === 'ER_DUP_COLUMN_NAME' || err.code === 'ER_DUP_FIELDNAME') {
        console.log("Column Certificate_Status already exists.");
      } else {
        throw err;
      }
    }

    // Update existing rows to 'Pending' if any are null
    await query(`
      UPDATE student_course 
      SET Certificate_Status = 'Pending' 
      WHERE Certificate_Status IS NULL
    `);
    console.log("Existing null values for Certificate_Status updated to 'Pending'.");

    // 5. Drop and recreate Get_Student_Course
    await query("DROP PROCEDURE IF EXISTS Get_Student_Course");
    await query(`
      CREATE PROCEDURE Get_Student_Course(In Student_Id_ Int)
      BEGIN
        declare University_Id_ int;declare Course_Type_Id_ int;declare Course_Id_ int;
        set University_Id_=(select University_Id from Student_Course where Student_Id=Student_Id_ and DeleteStatus=0);
        set Course_Id_=(select Course_Id from Student_Course where Student_Id=Student_Id_ and DeleteStatus=0);
        set Course_Type_Id_=(select Course_Term from course where Course_Id=Course_Id_ and DeleteStatus=0);
        SELECT Student_Course_Id,Student_Id,Course_Name_Details,Student_Course.Course_Id,Student_Course.Course_Name,
          By_User_Id,Student_Course.Status ,Student_Course.Course_Type_Id,
          Student_Course.Course_Type_Name,Total_Fees,Agent_Amount,Student_Course.University_Id,
          (Date_Format(Student_Course.Entry_Date,'%Y-%m-%d')) As Entry_Date,(Date_Format(Student_Course.Start_Date,'%Y-%m-%d')) As Start_Date,
          (Date_Format(Student_Course.Join_Date,'%Y-%m-%d')) As Join_Date,
          (Date_Format(Student_Course.End_Date,'%Y-%m-%d')) As End_Date,
          (Date_Format(Student_Course.End_Date,'%d-%m-%Y')) As End_Date_Search,University_Name,
          (Date_Format(Student_Course.Certificate_Date,'%Y-%m-%d')) As Certificate_Date,Certificate_Grade,
          Student_Course.Certificate_Status,
          (Date_Format(Student_Course.Certificate_Date,'%d-%m-%Y')) As Certificate_Date_Search,course.Duration,
          Student_Course.Duration_Type_Id,Student_Course.Starting_Year,Student_Course.Starting_Month,
          Student_Course.Ending_Month,Ending_Year,Student_Course.Course_Duration_Id,course_duration.Course_Duration_Name
          From Student_Course
          inner join  University on University.University_Id=Student_Course.University_Id
          inner join  course_duration on course_duration.Duration_Type_Id=Student_Course.Duration_Type_Id
          inner join  course on course.Course_Id=student_course.Course_Id
        where Student_Id =Student_Id_ and Student_Course.DeleteStatus=false ;

        SELECT Student_Course_Subject_Id,Student_Id,Course_Id,Course_Name,Subject_Id,Subject_Name,Part.Part_Id,Part_Name,
          Minimum_Mark,Maximum_Mark,Online_Exam_Status,No_of_Question,Exam_Duration,Exam_Attended_Status ,Online_Exam_Status_Name,Subject_Code,Course_Subject_Id
          From Student_Course_Subject
          inner join  Part on Part.Part_Id=Student_Course_Subject.Part_Id
          inner join  Online_Exam_Status on Online_Exam_Status.Online_Exam_Status_Id=Student_Course_Subject.Online_Exam_Status
        where Student_Id =Student_Id_ and Student_Course_Subject.DeleteStatus=false ;

        SELECT student_fees_installment_master.Student_Fees_Installment_Master_Id,Student_Id,Course_Fees_Id,Course_Id,Fees_Type_Id,
          Fees_Type_Name,Amount ,No_Of_Instalment,Instalment_Period,(Date_Format(Instalment_Date,'%Y-%m-%d')) As Instalment_Date,Student_Fees_Installment_Details_Id,Fees_Amount,Status,Balance_Amount,
          Tax_Percentage,Instalment_Type_Id,Instalment_Type_Name
          From student_fees_installment_master
          inner join  student_fees_installment_details on student_fees_installment_master.Student_Fees_Installment_Master_Id=student_fees_installment_details.Student_Fees_Installment_Master_Id
        where Student_Id =Student_Id_ and student_fees_installment_master.DeleteStatus=false ;

        SELECT Student_Course_Part_Id,Student_Id,Student_Course_Id,Part_Id ,Part_Name ,Month_Id ,
          Month_Name ,Year_Id,Year_Name,
          (Date_Format(Mark_List_Issue_Date,'%d-%m-%Y')) as Mark_List_Issue_Date
          From Student_Course_Part
          where Student_Id =Student_Id_ and Student_Course_Part.DeleteStatus=false ;
          
        select university_admission_month.Month_Status_Id,Month_Status_Name
        from university_admission_month
        inner join Month_Status on university_admission_month.Month_Status_Id=Month_Status.Month_Status_Id
        where university_admission_month.DeleteStatus=0 and University_Id=University_Id_;

        select Starting_Year,Back_Status
        from University
        where University.DeleteStatus=0 and University_Id=University_Id_;
        select Course_Type_Id as Fees_Type_Id ,Course_Type_Name as Fees_Type_Name
        from Student_Course        
        where Student_Id =Student_Id_  and student_course.DeleteStatus=0;
              
        select st_year.Month_Status_Name as st_Year,en_year.Month_Status_Name En_Year
        from student_course
        inner join month_status as st_year on st_year.Month_Status_Id = student_course.Starting_Month
        inner join month_status as en_year on en_year.Month_Status_Id = student_course.Ending_Month
        where  student_course.DeleteStatus = 0  and  University_Id  = University_Id_ and Student_Id =Student_Id_  ;

        if Course_Type_Id_ =1 then
          select university_exam_month.Month_Status_Id,Month_Status_Name
          from Month_Status
          inner join university_exam_month on university_exam_month.Month_Status_Id = Month_Status.Month_Status_Id
          where Month_Status.DeleteStatus=0 and university_exam_month.DeleteStatus = 0  and  University_Id  = University_Id_ Order by university_exam_month.Month_Status_Id asc;
        else
          select Month_Status_Id,Month_Status_Name
          from Month_Status	
          where Month_Status.DeleteStatus=0  Order by Month_Status_Id asc;
        end if;
      END
    `);
    console.log("Recreated Get_Student_Course stored procedure.");

    // 6. Drop and recreate Update_Certificate_Date
    await query("DROP PROCEDURE IF EXISTS Update_Certificate_Date");
    await query(`
      CREATE PROCEDURE Update_Certificate_Date(
        in Student_Course_Id_ int,
        Certificate_Date_ datetime,
        Certificate_Grade_ varchar(100),
        Certificate_Status_ varchar(50)
      )
      BEGIN
        update student_course set Certificate_Date=Certificate_Date_ ,
        Certificate_Grade=Certificate_Grade_,
        Certificate_Status=Certificate_Status_
        where Student_Course_Id=Student_Course_Id_ and DeleteStatus=0;
        select Student_Course_Id_;
      END
    `);
    console.log("Recreated Update_Certificate_Date stored procedure.");

    console.log("Migrations successfully completed!");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    db.end();
  }
}

main();
