 var db=require('../dbconnection');
 var fs = require('fs');
 var Activity=
 { 
    Save_Activity:function(Activity_,callback)
 { 
return db.query("CALL Save_Activity("+
"@Activity_Id_ :=?,"+
"@Activity_Name_ :=?"+")"
 ,[Activity_.Activity_Id,
    Activity_.Activity_Name],callback);
 }
 ,
 Delete_Activity:function(Activity_Id_,callback)
 { 
return db.query("CALL Delete_Activity(@Activity_Id_ :=?)",[Activity_Id_],callback);
 }
 ,
 Get_Activity:function(Activity_Id_,callback)
 { 
return db.query("CALL Get_Activity(@Activity_Id_ :=?)",[Activity_Id_],callback);
 }
 ,
 Search_Activity_For_University:function(callback)
{   
return db.query("CALL Search_Activity_For_University()",[],callback);
},
 Search_Activity:function(Activity_Name_,callback)
 { 
 if (Activity_Name_===undefined || Activity_Name_==="undefined" )
 Activity_Name_='';
return db.query("CALL Search_Activity(@Activity_Name_ :=?)",[Activity_Name_],callback);
 }
  };
  module.exports=Activity;

