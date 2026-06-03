 var db=require('../dbconnection');
 var fs = require('fs');
 var Subscription=
 { 
 Save_Subscription:function(Subscription_,callback)
 { 
return db.query("CALL Save_Subscription("+
"@Subscription_Id_ :=?,"+
"@Subscription_Name_ :=?,"+
"@Subscription_Amount_ :=?,"+
"@Duration_ :=?"+")"
 ,[Subscription_.Subscription_Id,
Subscription_.Subscription_Name,
Subscription_.Subscription_Amount,
Subscription_.Duration
],callback);
 }
 ,
 Delete_Subscription:function(Subscription_Id_,callback)
 { 
return db.query("CALL Delete_Subscription(@Subscription_Id_ :=?)",[Subscription_Id_],callback);
 }
 ,
 Get_Subscription:function(Subscription_Id_,callback)
 { 
return db.query("CALL Get_Subscription(@Subscription_Id_ :=?)",[Subscription_Id_],callback);
 }
 ,
 Search_Subscription:function(Subscription_Name_,callback)
 { 
 if (Subscription_Name_===undefined || Subscription_Name_==="undefined" )
Subscription_Name_='';
return db.query("CALL Search_Subscription(@Subscription_Name_ :=?)",[Subscription_Name_],callback);
 }
  };
  module.exports=Subscription;

