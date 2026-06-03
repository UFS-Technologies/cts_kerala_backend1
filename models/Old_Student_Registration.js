var db=require('../dbconnection');
var fs = require('fs');
var Old_Student_Registration=
{ 
Save_Old_Student_Registration:function(Old_Student_Registration_,callback)
    { 
    console.log(Old_Student_Registration_);
    return db.query("CALL Save_old_student_registration("+
    "@Old_Student_Registration_Id_ :=?,"+
    "@Old_Student_Registration_student_Name_ :=?,"+
    "@Old_Student_Registration_Date_ :=?,"+
    "@Old_Student_Registration_No_ :=?,"+
    "@Old_Student_Registration_Address1_ :=?,"+
    "@Old_Student_Registration_Address2_ :=?,"+
    "@Old_Student_Registration_Address3_ :=?,"+
    "@Old_Student_Registration_Address4_ :=?,"+
    "@Old_Student_Registration_phone_ :=?,"+
    "@Old_Student_Registration_Mobile_ :=?,"+
    "@Old_Student_Registration_Email_ :=?,"+
    "@Old_Student_Registration_user_id_ :=?,"+
    "@Program_:=?,"+
    "@Section_:=?,"+
    "@Result_Id_:=?,"+
    "@Result_:=?"+")"
     ,[Old_Student_Registration_.Old_Student_Registration_Id,
        Old_Student_Registration_.Old_Student_Registration_Student_Name,
        Old_Student_Registration_.Old_Student_Registration_Date,
        Old_Student_Registration_.Old_Student_Registration_No,
        Old_Student_Registration_.Old_Student_Registration_Address1,
        Old_Student_Registration_.Old_Student_Registration_Address2,
        Old_Student_Registration_.Old_Student_Registration_Address3,
        Old_Student_Registration_.Old_Student_Registration_Address4,
        Old_Student_Registration_.Old_Student_Registration_Phone,
        Old_Student_Registration_.Old_Student_Registration_Mobile,
        Old_Student_Registration_.Old_Student_Registration_Email,
        Old_Student_Registration_.Old_Student_Registration_user_id,
        Old_Student_Registration_.Program,
        Old_Student_Registration_.Section,
        Old_Student_Registration_.Result_Id,
        Old_Student_Registration_.Result
    ],callback);                                                                                             
    },
    Search_Old_Student_Registration:function(Student_Name_Search_,Registration_No_Search_,callback)
    { 
    if (Student_Name_Search_===undefined || Student_Name_Search_==="undefined" )
        Student_Name_Search_='';
    if (Registration_No_Search_===undefined || Registration_No_Search_==="undefined" )
        Registration_No_Search_='';
   return db.query("CALL Search_Old_Student(@Student_Name_Search_ :=?,@Registration_No_Search_ :=?)",[Student_Name_Search_,Registration_No_Search_],callback);
    }
};
module.exports=Old_Student_Registration;

