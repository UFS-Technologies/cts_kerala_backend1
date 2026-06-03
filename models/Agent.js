var db=require('../dbconnection');
var fs = require('fs');
const StoredProcedure = require('../helpers/stored-procedure');

var Agent=
{ 
Save_Agent:function(Agent_,callback)
{ 
  console.log(Agent_)
return db.query("CALL Save_Agent("+"@Course_Type_Data_ :=?,"+"@Agent_Id_ :=?,"+"@Agent_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+"@Address4_ :=?,"+"@Pincode_ :=?,"
+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Whatsapp_ :=?,"+"@DOB_ :=?,"+"@Gender_ :=?,"+"@Email_ :=?,"+"@Alternative_Email_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"
+"@Photo_ :=?,"+"@GSTIN_ :=?,"+"@Category_Id_ :=?,"+"@Commission_ :=?,"+"@User_Id_ :=?,"+"@Comm_Address1_ :=?,"+"@Comm_Address2_ :=?,"+"@Comm_Address3_ :=?,"
+"@Comm_Address4_ :=?,"+"@Comm_Pincode_ :=?,"+"@Comm_Mobile_ :=?,"+"@Center_Name_ :=?,"+"@Center_Code_ :=?,"+"@Agent_Fees_ :=?,"
+"@District_Id_ :=?,"+"@Agent_No_ :=?,"+"@Agent_District_No_ :=?,"
+"@Subscription_Id_ :=?,"+"@Subscription_Name_ :=?,"+"@Duration_ :=?,"+"@Subscription_Amount_ :=?,"
+"@Subscription_Start_Date_ :=?,"+"@Subscription_End_Date_ :=?,"+"@Subscription_Payment_Id_ :=?,"+"@Subscription_Payment_Status_Id_ :=?,"
+"@Subscription_Payment_Status_Name_ :=?,"+"@Subscription_Status_Id_ :=?,"+"@Subscription_Status_Name_ :=?)"
,[JSON.stringify(Agent_.Course_Type_Data),Agent_.Agent_Id,Agent_.Agent_Name,Agent_.Address1,Agent_.Address2,Agent_.Address3,Agent_.Address4,Agent_.Pincode,
Agent_.Phone,Agent_.Mobile,Agent_.Whatsapp,Agent_.DOB,Agent_.Gender,Agent_.Email,Agent_.Alternative_Email,Agent_.User_Name,Agent_.Password,Agent_.Photo,Agent_.GSTIN,Agent_.Category_Id,
Agent_.Commission,Agent_.User_Id,Agent_.Comm_Address1,Agent_.Comm_Address2,Agent_.Comm_Address3,Agent_.Comm_Address4,Agent_.Comm_Pincode,
Agent_.Comm_Mobile,Agent_.Center_Name,Agent_.Center_Code,Agent_.Agent_Fees,Agent_.District_Id,Agent_.Agent_No,Agent_.Agent_District_No
,Agent_.Subscription_Id,Agent_.Subscription_Name,Agent_.Duration,Agent_.Subscription_Amount,
Agent_.Subscription_Start_Date,Agent_.Subscription_End_Date,Agent_.Subscription_Payment_Id,Agent_.Subscription_Payment_Status_Id,
  Agent_.Subscription_Payment_Status_Name,Agent_.Subscription_Status_Id,Agent_.Subscription_Status_Name],callback);
},


Save_Subscription_Payment: async function(Agent_,callback)
{ 
  console.log(Agent_);
// return db.query("CALL Save_Subscription_Payment("+"@Agent_Id_ :=?,"+"@Subscription_Id_ :=?,"+"@Subscription_Name_ :=?,"+"@Duration_ :=?,"+"@Subscription_Amount_ :=?)"
// ,[Agent_.Agent_Id,Agent_.Subscription_Id,Agent_.Subscription_Name,Agent_.Duration,Agent_.Subscription_Amount],callback);

return new Promise(async (rs, rej) => {
  const pool = db.promise();
  let result1;
  var connection = await pool.getConnection();
 
  try {
      const result1 = await new StoredProcedure(
          "Save_Subscription_Payment",
          [Agent_.Agent_Id,Agent_.Subscription_Id,Agent_.Subscription_Name,Agent_.Duration,Agent_.Subscription_Amount],
          connection
      ).result();

      await connection.commit();
      connection.release();
      rs(result1);
  } catch (err) {
      console.log(err)
      await connection.rollback();
      rej(err);
      var result2 = [{ Agent_Id_: 0 }];
      rs(result2);
  } finally {
      connection.release();
  }
});
},

Update_Subscription_Payment:function(Agent_,callback)
{ 
return db.query("CALL Update_Subscription_Payment("+"@Agent_Id_ :=?,"+"@Subscription_Payment_Id :=?,"+"@Duration_ :=?)"
,[Agent_.Agent_Id,Agent_.Subscription_Payment_Id,Agent_.Duration],callback);
},


Activate_Subscription:function(Agent_,callback)
{ 
  console.log(Agent_)
return db.query("CALL Activate_Subscription("+"@Agent_Id_ :=?,"+"@Subscription_Id_ :=?,"+"@Subscription_Name_ :=?,"+"@Duration_ :=?,"+"@Subscription_Amount_ :=?,"
+"@Subscription_Start_Date_ :=?,"+"@Subscription_End_Date_ :=?,"+"@Subscription_Payment_Id_ :=?,"+"@Subscription_Payment_Status_Id_ :=?,"
+"@Subscription_Payment_Status_Name_ :=?,"+"@Subscription_Status_Id_ :=?,"+"@Subscription_Status_Name_ :=?)"
,[Agent_.Agent_Id,Agent_.Subscription_Id,Agent_.Subscription_Name,Agent_.Duration,Agent_.Subscription_Amount,
  Agent_.Subscription_Start_Date,Agent_.Subscription_End_Date,Agent_.Subscription_Payment_Id,Agent_.Subscription_Payment_Status_Id,
  Agent_.Subscription_Payment_Status_Name,Agent_.Subscription_Status_Id,Agent_.Subscription_Status_Name],callback);
},



Get_Agent:function(Agent_Id_,callback)
{ 
return db.query("CALL Get_Agent(@Agent_Id_ :=?)",[Agent_Id_],callback);
},
Load_Agent_Dropdowns: async function()
{  
  const Status = await (new StoredProcedure('Get_Status', [])).result();
  const Category = await (new StoredProcedure('Get_Category', [])).result();
  const Subscription = await (new StoredProcedure('Get_Subscription', [])).result();
  const Subscription_Payment_Status = await (new StoredProcedure('Get_Subscription_Payment_Status', [])).result();
  const Subscription_Status = await (new StoredProcedure('Get_Subscription_Status', [])).result();
  return { Status,Category,Subscription,Subscription_Payment_Status,Subscription_Status };
},


Update_Skp_Status:function(callback)
{ 
  return db.query("CALL Update_Skp_Status()", [],callback);
},


Search_Agent:function(Agent_Name_,Page_Start_,Page_End_,Page_Length_,callback)
{ 
  if (Agent_Name_===undefined || Agent_Name_==="undefined" )
  Agent_Name_='';
  return db.query("CALL Search_Agent(@Agent_Name_ :=?,@Page_Start_ :=?,@Page_End_ :=?,@Page_Length_ :=?)",[Agent_Name_,Page_Start_,Page_End_,Page_Length_],callback);
},

Search_Agent_Skp:function(Agent_Name_,Page_Start_,Page_End_,Page_Length_,Login_User_,callback)
{ 
  if (Agent_Name_===undefined || Agent_Name_==="undefined" )
  Agent_Name_='';
  return db.query("CALL Search_Agent_Skp(@Agent_Name_ :=?,@Page_Start_ :=?,@Page_End_ :=?,@Page_Length_ :=?,@Login_User_ :=?)",[Agent_Name_,Page_Start_,Page_End_,Page_Length_,Login_User_],callback);
},


Load_Category_Commission:function(Category_Id_)
{
  if(Category_Id_==='undefined'||Category_Id_===''||Category_Id_===undefined )
  Category_Id_='';
  return db.query("CALL Load_Category_Commission(@Category_Id_ :=?)",[Category_Id_]);
},
Save_Agent_Registration:function(Agent_Id_,callback)
{ 
  return db.query("CALL Save_Agent_Registration(@Agent_Id_ :=?)",[Agent_Id_],callback);
},
Delete_Agent:function(Agent_Id_,callback)
{ 
  return db.query("CALL Delete_Agent(@Agent_Id_ :=?)",[Agent_Id_],callback);
},
Remove_Registration:function(Agent_Id_,callback)
{ 
  return db.query("CALL Remove_Registration_Agent(@Agent_Id_ :=?)",[Agent_Id_],callback);
},
Get_Menu_Status:function(Menu_Id_,Login_User_,callback)
{ 
  return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@Login_User_:=?)", [Menu_Id_,Login_User_],callback);
},
Load_Mode:function(callback)
{ 
  return db.query("CALL Load_Mode()", [],callback);
},
Load_District:function(callback)
{ 
  return db.query("CALL Load_District()", [],callback);
},
Click_Agent_District:function(District_Id_,callback)
{ 
return db.query("CALL Click_Agent_District(@District_Id_ :=?)",[District_Id_],callback);
},
Accounts_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
{ 
    if (Client_Accounts_Name_ === undefined || Client_Accounts_Name_==="undefined" )
    Client_Accounts_Name_='';
    return db.query("CALL Accounts_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)", [Account_Group_Id_,Client_Accounts_Name_],callback);
},
// Save_Receipt_Voucher:function(Receipt_Voucher_,callback)
//     { 
//     return db.query("CALL Save_Receipt_Voucher("+"@Receipt_Voucher_Id_ :=?,"+"@Date_ :=?,"+
//     "@Agent_Id_ :=?,"+"@Amount_ :=?,"+"@Payment_Mode_ :=?,"+ "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+
//     "@To_Account_Id_ :=?,"+"@Description_ :=?"+")"
//     ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.Date,Receipt_Voucher_.From_Account_Id,
//     Receipt_Voucher_.Amount,Receipt_Voucher_.Payment_Mode,Receipt_Voucher_.User_Id,Receipt_Voucher_.Payment_Status,
//     Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Description,],callback);
//     },
Save_Receipt_Voucher:function(Receipt_Voucher_,callback)
    { 
    return db.query("CALL Save_Receipt_Voucher("+"@Receipt_Voucher_Id_ :=?,"+"@Date_ :=?,"+
    "@Agent_Id_ :=?,"+"@Amount_ :=?,"+"@Payment_Mode_ :=?,"+ "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+
    "@To_Account_Id_ :=?,"+"@Description_ :=?"+")"
    ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.Date,Receipt_Voucher_.From_Account_Id,
    Receipt_Voucher_.Amount,Receipt_Voucher_.Payment_Mode,Receipt_Voucher_.User_Id,Receipt_Voucher_.Payment_Status,
    Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Description,],callback);
    },
Get_Receipt_History:function(Agent_Id_,callback)
{ 
  return db.query("CALL Get_Receipt_History(@Agent_Id_ :=?)", [Agent_Id_],callback);
},
Delete_Receipt_Voucher:function(Receipt_Voucher_Id_,callback)
{ 
  return db.query("CALL Delete_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)", [Receipt_Voucher_Id_],callback);
},
Search_Course_Status:function(callback)
{ 
  //  if(Course_Type_Name_==='undefined'||Course_Type_Name_===''||Course_Type_Name_===undefined )
  //  Course_Type_Name_='';
return db.query("CALL Search_Course_Status()",[],callback);
},
Get_CourseType_Selection_Edit:function(Agent_Id_,callback)
{ 
return db.query("CALL Get_CourseType_Selection_Edit(@Agent_Id_ :=?)",[Agent_Id_],callback);
},

Save_Leads:function(Leads_,callback)
{ 
return db.query("CALL Save_Leads("+"@Leads_Id_ :=?,"+"@Leads_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+"@Phone_ :=?,"
+"@Mobile_ :=?,"+"@Email_ :=?,"+"@User_Id_ :=?,"+"@Description_ :=?)"
,[Leads_.Leads_Id,Leads_.Leads_Name,Leads_.Address1,Leads_.Address2,Leads_.Address3,Leads_.Phone,Leads_.Mobile,Leads_.Email,
  Leads_.User_Id,Leads_.Description],callback);
},
Save_Student_Agent: function (Student_Data, callback)
{
    var Student_Value_ = 0;
    let Student_ = Student_Data.Student;
    if (Student_ != undefined && Student_ != '' && Student_ != null)
    Student_Value_ = 1
    var FollowUp_Value_ = 0;
    let FollowUp_ = Student_Data.Followup;
    if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null)
    FollowUp_Value_ = 1;
    return db.query("CALL Save_Student_Agent(" + "@Student_:=?," + "@FollowUp_ :=?," + "@Student_Value_ :=?," +"@FollowUp_Value_ :=? )"
    , [Student_, FollowUp_, Student_Value_, FollowUp_Value_ ],callback);
},
Search_Student_Agent: async function (Fromdate_,Todate_,SearchbyName_,By_User_,Status_Id_,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2,Register_Value) {
  var Agent = [];
   try {

       if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
           SearchbyName_ = '';
           Agent = await (new StoredProcedure('Search_Student_Agent', [Fromdate_, Todate_, SearchbyName_, By_User_, Status_Id_, Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2, Register_Value])).result();
   }
   catch (e) {
       
   }

   return {
     returnvalue: {
      Agent
     }
   };
 },
Search_Lead: async function (Fromdate_,Todate_,SearchbyName_,Agent_Id,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2) {
  var Lead = [];
   try {

       if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
           SearchbyName_ = '';
           Lead = await (new StoredProcedure('Search_Lead', [Fromdate_, Todate_, SearchbyName_, Agent_Id,Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2])).result();
   }
   catch (e) {
       
   }
   return {
     returnvalue: {Lead}
   };
 },
 Search_Agent_Typeahead:function(Agent_Name,callback)
 { 
     if (Agent_Name === undefined || Agent_Name==="undefined" )
     Agent_Name='';
     return db.query("CALL Search_Agent_Typeahead(@Agent_Name :=?)", [Agent_Name],callback);
 },
 Get_Leads:function(Leads_Id_,callback)
 { 
     return db.query("CALL Get_Leads(@Leads_Id_ :=?)", [Leads_Id_],callback);
 },
 Search_Lead_Report: async function (Fromdate_,Todate_,SearchbyName_,Agent_Id,Is_Date_Check_,Login_User_Id_) {
  var Lead = [];
   try {

       if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
           SearchbyName_ = '';
           Lead = await (new StoredProcedure('Search_Lead_Report', [Fromdate_, Todate_, SearchbyName_, Agent_Id,Is_Date_Check_,Login_User_Id_])).result();
   }
   catch (e) {
       
   }
   return {
     returnvalue: {Lead}
   };
 },
 Search_Student_Report: async function (Fromdate_,Todate_,SearchbyName_,Status_Id_,Is_Date_Check_,  Login_User_Id_) {
   var Agent = [];
    try {
 
        if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
            SearchbyName_ = '';
            Agent = await (new StoredProcedure('Search_Student_Report', [Fromdate_, Todate_, SearchbyName_, Status_Id_, Is_Date_Check_,Login_User_Id_])).result();
    }
    catch (e) {
        
    }
 
    return {  returnvalue: { Agent }
    };
  },

  Get_Print_Detials:function(Agent_Id_,callback)
  { 
    console.log(Agent_Id_);
    return db.query("CALL Get_Print_Detials(@Agent_Id_ :=?)",[Agent_Id_],callback);
  },

};
module.exports=Agent;

