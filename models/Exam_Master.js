var db=require('../dbconnection');
var fs = require('fs');
var Exam_Master=
{ 
Save_Exam_Master:function(Exam_Master_,callback)
{ 
return db.query("CALL Save_Exam_Master("+
"@Exam_Master_Id_ :=?,"+
"@Exam_Date_ :=?,"+
"@Student_Id_ :=?,"+
"@Subject_Id_ :=?,"+
"@Subject_Name_ :=?,"+
"@Start_Time_ :=?,"+
"@End_Time_ :=?,"+
"@Mark_Obtained_ :=?,"+
"@User_Id_ :=?"+")"
 ,[Exam_Master_.Exam_Master_Id,
Exam_Master_.Exam_Date,
Exam_Master_.Student_Id,
Exam_Master_.Subject_Id,
Exam_Master_.Subject_Name,
Exam_Master_.Start_Time,
Exam_Master_.End_Time,
Exam_Master_.Mark_Obtained,
Exam_Master_.User_Id
],callback);
}
,
Delete_Exam_Master:function(Exam_Master_Id_,callback)
{ 
return db.query("CALL Delete_Exam_Master(@Exam_Master_Id_ :=?)",[Exam_Master_Id_],callback);
}
,
Get_Exam_Master:function(Exam_Master_Id_,callback)
{ 
return db.query("CALL Get_Exam_Master(@Exam_Master_Id_ :=?)",[Exam_Master_Id_],callback);
}
,
Search_Exam_Master:function(Exam_Master_Name_,callback)
{ 
if (Exam_Master_Name_===undefined || Exam_Master_Name_==="undefined" )
   Exam_Master_Name_='';
return db.query(
   "SELECT em.Exam_Master_Id, em.Exam_Date, em.Subject_Name, em.Student_Id, s.Student_Name, em.Mark_Obtained " +
   "FROM Exam_Master em " +
   "LEFT JOIN student s ON em.Student_Id = s.Student_Id " +
   "WHERE (em.DeleteStatus = FALSE OR em.DeleteStatus IS NULL) " +
   "AND (em.Subject_Name LIKE ? OR s.Student_Name LIKE ?) " +
   "ORDER BY em.Exam_Date DESC",
   ['%' + Exam_Master_Name_ + '%', '%' + Exam_Master_Name_ + '%'],
   function(err, rows) {
     if (err) return callback(err);
     callback(null, [rows]);
   }
);
}
,
Get_Exam_Master_By_Student:function(Student_Id_,callback)
{ 
  return db.query("CALL Search_Exam_Master(@Student_Id_ :=?)",[Student_Id_],callback);
}
};
module.exports=Exam_Master;
