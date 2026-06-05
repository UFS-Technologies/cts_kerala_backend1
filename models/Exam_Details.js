var db=require('../dbconnection');
var fs = require('fs');
var Exam_Details=
{ 
  Save_Exam_Details:function(Exam_Details_,callback)
  { 
    return db.query("CALL Save_Exam_Details("+
      "@Exam_Details_Id_ :=?,"+
      "@Exam_Master_Id_ :=?,"+
      "@Question_Id_ :=?,"+
      "@Question_Name_ :=?,"+
      "@Option_1_ :=?,"+
      "@Option_2_ :=?,"+
      "@Option_3_ :=?,"+
      "@Option_4_ :=?,"+
      "@Question_Answer_ :=?"+")"
      ,[Exam_Details_.Exam_Details_Id,
      Exam_Details_.Exam_Master_Id,
      Exam_Details_.Question_Id,
      Exam_Details_.Question_Name,
      Exam_Details_.Option_1,
      Exam_Details_.Option_2,
      Exam_Details_.Option_3,
      Exam_Details_.Option_4,
      Exam_Details_.Question_Answer
      ],callback);
  }
  ,
  Delete_Exam_Details:function(Exam_Details_Id_,callback)
  { 
    return db.query("CALL Delete_Exam_Details(@Exam_Details_Id_ :=?)",[Exam_Details_Id_],callback);
  }
  ,
  Get_Exam_Details:function(Exam_Details_Id_,callback)
  { 
    return db.query("CALL Get_Exam_Details(@Exam_Details_Id_ :=?)",[Exam_Details_Id_],callback);
  }
  ,
  Search_Exam_Details:function(Exam_Details_Name_,callback)
  { 
    if (Exam_Details_Name_===undefined || Exam_Details_Name_==="undefined" )
      Exam_Details_Name_='';
    return db.query("CALL Search_Exam_Details(@Exam_Details_Name_ :=?)",[Exam_Details_Name_],callback);
  }
  ,
  // Fetch all questions/answers for a given Exam_Master_Id (with Correct_Answer from question table)
  Get_Exam_Details_By_Master:function(Exam_Master_Id_,callback)
  { 
    return db.query(
      "SELECT ed.Exam_Details_Id, ed.Exam_Master_Id, ed.Question_Id, ed.Question_Name, ed.Option_1, ed.Option_2, ed.Option_3, ed.Option_4, ed.Question_Answer, q.Correct_Answer " +
      "FROM Exam_Details ed " +
      "LEFT JOIN question q ON ed.Question_Id = q.Question_Id " +
      "WHERE ed.Exam_Master_Id = ? AND (ed.DeleteStatus = FALSE OR ed.DeleteStatus IS NULL)",
      [Exam_Master_Id_],
      function(err, rows) {
        if (err) return callback(err);
        callback(null, [rows]);
      }
    );
  }
};
module.exports=Exam_Details;
