var db=require('../dbconnection');
var fs = require('fs');
var University=
{ 
Save_University:function(University_,callback)
   { 
     
   return db.query("CALL Save_University("+"@Activities_Selected_ :=?,"+"@University_Admission_Month_ :=?,"+"@University_Exam_Month_ :=?,"
   +"@University_Id_ :=?,"+"@University_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+
   "@Address3_ :=?,"+"@Address4_ :=?,"+"@Pincode_ :=?,"+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Email_ :=?,"+"@User_Id_ :=?,"+
   "@Website_ :=?,"+"@Description1_ :=?,"+"@Description2_ :=?,"+"@Description3_ :=?,"+"@Starting_Year_ :=?,"+"@Back_Status_ :=?"+")"
   ,[JSON.stringify(University_.Activities_Selected),JSON.stringify(University_.University_Admission_Month),JSON.stringify(University_.University_Exam_Month),
     University_.University_Id,University_.University_Name,University_.Address1,University_.Address2,University_.Address3,
   University_.Address4,University_.Pincode,University_.Phone,University_.Mobile,University_.Email,University_.User_Id,
   University_.Website,University_.Description1,University_.Description2,University_.Description3,
   University_.Starting_Year,University_.Back_Status],callback);
} ,
Delete_University:function(University_Id_,callback)
{ 
return db.query("CALL Delete_University(@University_Id_ :=?)",[University_Id_],callback);
}
,
Get_University:function(University_Id_,callback)
{ 
return db.query("CALL Get_University(@University_Id_ :=?)",[University_Id_],callback);
}
,
Search_University:function(University_Name_,Page_Start_,Page_End_,Page_Length_,callback)
{ 
   if (University_Name_===undefined || University_Name_==="undefined" )
   University_Name_='';
   return db.query("CALL Search_University(@University_Name_ :=?,@Page_Start_ :=?,@Page_End_ :=?,@Page_Length_ :=?)",[University_Name_,Page_Start_,Page_End_,Page_Length_],callback);
},
Get_Activity_Selection_Edit:function(University_Id_,callback)
{ 
return db.query("CALL Get_Activity_Selection_Edit(@University_Id_ :=?)",[University_Id_],callback);
},
};
 module.exports=University;

