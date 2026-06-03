 var db=require('../dbconnection');
 var fs = require('fs');
 var Batch=
 { 
 Save_Batch:function(Batch_,callback)
 { 
return db.query("CALL Save_Batch("+
"@Batch_Id_ :=?,"+
"@Batch_Name_ :=?,"+
"@User_Id_ :=?"+")"
 ,[Batch_.Batch_Id,
Batch_.Batch_Name,
Batch_.User_Id
],callback);
 }
 ,
 Delete_Batch:function(Batch_Id_,callback)
 { 
return db.query("CALL Delete_Batch(@Batch_Id_ :=?)",[Batch_Id_],callback);
 }
 ,
 Get_Batch:function(Batch_Id_,callback)
 { 
return db.query("CALL Get_Batch(@Batch_Id_ :=?)",[Batch_Id_],callback);
 }
 ,
 Search_Batch:function(Batch_Name_,callback)
 { 
 if (Batch_Name_===undefined || Batch_Name_==="undefined" )
Batch_Name_='';
return db.query("CALL Search_Batch(@Batch_Name_ :=?)",[Batch_Name_],callback);
 }
  };
  module.exports=Batch;

