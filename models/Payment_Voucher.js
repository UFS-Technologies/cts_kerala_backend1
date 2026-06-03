var db=require('../dbconnection');
var fs = require('fs');
var Payment_Voucher=
{ 
Save_Payment_Voucher:function(Payment_Voucher_,callback)
    { 
            
    return db.query("CALL Save_Payment_Voucher("+"@Payment_Voucher_Id_ :=?,"+"@Date_ :=?,"+
    "@From_Account_Id_ :=?,"+"@Amount_ :=?,"+"@To_Account_Id_ :=?,"+"@Payment_Mode_ :=?,"+
    "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+"@Description_ :=?"+")"
    ,[Payment_Voucher_.Payment_Voucher_Id,Payment_Voucher_.Date,Payment_Voucher_.From_Account_Id,
    Payment_Voucher_.Amount,Payment_Voucher_.To_Account_Id,Payment_Voucher_.Payment_Mode,
    Payment_Voucher_.User_Id,Payment_Voucher_.Payment_Status,Payment_Voucher_.Description],callback);
    },
Delete_Payment_Voucher:function(Payment_Voucher_Id_,callback)
    { 
    return db.query("CALL Delete_Payment_Voucher(@Payment_Voucher_Id_ :=?)",[Payment_Voucher_Id_],callback);
    },
Get_Payment_Voucher:function(Payment_Voucher_Id_,callback)
    { 
    return db.query("CALL Get_Payment_Voucher(@Payment_Voucher_Id_ :=?)",[Payment_Voucher_Id_],callback);
    },
Search_Payment_Voucher:function(From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_,callback)
    { 
    return db.query("CALL Search_Payment_Voucher(@From_Date_ :=?,@To_Date_ :=?,@From_Account_Id_ :=?,@To_Account_Id_ :=?,@Voucher_No_  :=?,@Is_Date_Check_ :=?)",[From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_],callback);
    },
Get_Payment_Mode:function(callback)
    { 
    return db.query("CALL Get_Payment_Mode()",[],callback);
    },
};
module.exports=Payment_Voucher;

