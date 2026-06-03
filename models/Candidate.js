var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
var Candidate=
{ 
Save_Candidate: function (Candidate_Data, callback)
{
    var Candidate_Value_ = 0;
    let Candidate_ = Candidate_Data.Candidate;
    if (Candidate_ != undefined && Candidate_ != '' && Candidate_ != null)
    Candidate_Value_ = 1
    var FollowUp_Value_ = 0;
    let FollowUp_ = Candidate_Data.Followup;
    if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null)
    FollowUp_Value_ = 1;
    return db.query("CALL Save_Candidate(" + "@Candidate_:=?," + "@FollowUp_ :=?," + "@Candidate_Value_ :=?," +"@FollowUp_Value_ :=? )"
    , [Candidate_, FollowUp_, Candidate_Value_, FollowUp_Value_ ],callback);
},



Public_Save_Candidate_Front: function (Candidate_, callback)
{
   var Candidate_Value_=0;
   if (Candidate_ != undefined && Candidate_ != '' && Candidate_ != null)
   Candidate_Value_ = 1
    return db.query("CALL Public_Save_Candidate_Front(" + "@Candidate_:=?," + "@Candidate_Value_ :=?)"
    , [Candidate_ ,Candidate_Value_],callback);
},

Delete_Candidate:function(Candidate_Id_,callback)
{ 
    return db.query("CALL Delete_Candidate(@Candidate_Id_ :=?)",[Candidate_Id_],callback);
} ,
Get_Candidate:function(Candidate_Id_,callback)
{ 
    return db.query("CALL Get_Candidate(@Candidate_Id_ :=?)",[Candidate_Id_],callback);
} ,
Search_Candidate: async function (Fromdate_,Todate_,SearchbyName_,By_User_,Status_Id_,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2,Register_Value) {
    var Candidate = [];
     try {

         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
         Candidate = await (new storedProcedure('Search_Candidate', [Fromdate_, Todate_, SearchbyName_, By_User_, Status_Id_, Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2, Register_Value])).result();
     }
     catch (e) {
     }

     return {
       returnvalue: {
         Candidate
       }
     };
   },


   Search_Candidate_SKP: async function (Fromdate_,Todate_,SearchbyName_,By_User_,Status_Id_,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2,Register_Value) {
    var Candidate = [];
     try {

         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
         Candidate = await (new storedProcedure('Search_Candidate_SKP', [Fromdate_, Todate_, SearchbyName_, By_User_, Status_Id_, Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2, Register_Value])).result();
     }
     catch (e) {
     }

     return {
       returnvalue: {
         Candidate
       }
     };
   },


Load_Candidate_Dropdowns:function(callback)
{ 
    return db.query("CALL Load_Candidate_Dropdowns()", [],callback);
} ,
Get_Candidate_FollowUp_Details: async function (Candidate_Id_) 
  {     
  const FollowUp = await (new storedProcedure('Get_Candidate_FollowUp_Details',  [Candidate_Id_])).result();
  return {0:{FollowUp}};  
  },
Get_Last_Candidate_FollowUp: function (Users_Id_,callback)
{ 
    return db.query("CALL Get_Last_Candidate_FollowUp(@Users_Id_ :=?)", [ Users_Id_],callback);
} ,
Get_Candidate_FollowUp_History: async function (Candidate_Id_) 
 {     
 const FollowUp=await (new storedProcedure('Get_Candidate_FollowUp_History',  [Candidate_Id_])).result();
 return {0:{FollowUp}};  
 },
Register_Candidate: function (Candidate_Id_,User_Id_,callback)
{ 
    return db.query("CALL Register_Candidate(@Candidate_Id_ :=?,@User_Id_ :=?)", [Candidate_Id_, User_Id_],callback);
} ,
Remove_Registration_Candidate: function (Candidate_Id_,callback)
{ 
    return db.query("CALL Remove_Registration_Candidate(@Candidate_Id_ :=?)", [Candidate_Id_],callback);
} ,
Search_Applied_Candidate: async function (From_Date_,To_Date_,Candidate_Search_,Status_,Job_Title_,Page_Start_,Page_End_,Page_Length_) {
    var Applied_Candidate = [];
     try {
        if (Candidate_Search_ === undefined || Candidate_Search_=== "undefined")
        Candidate_Search_ = '';
        if (Job_Title_ === undefined || Job_Title_ === "undefined")
        Job_Title_ = '';
            Applied_Candidate = await (new storedProcedure('Search_Applied_Candidate', [From_Date_,To_Date_,Candidate_Search_,Status_,Job_Title_,Page_Start_,Page_End_,Page_Length_])).result();
     }
     catch (e) 
     {
     }
     return { returnvalue: {Applied_Candidate}
     };
   },
Save_Applied_Candidate:function(Applied_Candidate,callback)
{ 
    return db.query("CALL Save_Applied_Candidate("+"@Candidate_Job_Apply_Id_ :=?,"+"@Followupdate_ :=?,"+"@Status_Id_ :=?,"+"@Status_Name_ :=?,"
    +"@User_Id_ :=?"+")" , 
  [Applied_Candidate.Candidate_Job_Apply_Id,Applied_Candidate.Followupdate,Applied_Candidate.Status_Id,Applied_Candidate.Status_Name,
    Applied_Candidate.User_Id],callback);
 }
 ,

 Get_Candidate_Details:function(Candidate_Id_,callback)
 {
    db.query("CALL Get_Candidate_Details(@Candidate_Id_ :=?)",[Candidate_Id_],callback);
 },
 
 Save_Candidate_JobApply_Public: function (JobApply_, callback) {
    return db.query("CALL Save_Candidate_JobApply_Public(" + "@Candidate_Id_ :=?," + "@Job_Posting_Id_ :=?)"
      , [JobApply_.Candidate_Id_,JobApply_.Job_Posting_Id_], callback);
  },
  // Save_Candidate_JobApply_Public: function (JobApply_, callback) {
  //   var Job_Apply_check =  db.query("CALL Candidate_JobApply_Public_Check(" + "@Candidate_Id_ :=?," + "@Job_Posting_Id_ :=?)"
  //   , [JobApply_.Candidate_Id_,JobApply_.Job_Posting_Id_], callback);
  //   return db.query("CALL Save_Candidate_JobApply_Public(" + "@Candidate_Id_ :=?," + "@Job_Posting_Id_ :=?)"
  //     , [JobApply_.Candidate_Id_,JobApply_.Job_Posting_Id_], callback);
  // },
  Candidate_JobApply_Public_Check: function (JobApply_, callback) {
    return db.query("CALL Candidate_JobApply_Public_Check(" + "@Candidate_Id_ :=?," + "@Job_Posting_Id_ :=?)"
      , [JobApply_.Candidate_Id_,JobApply_.Job_Posting_Id_], callback);
  },

  Get_Candidate_Job_Apply:function(Candidate_Id_,callback)
  {
     db.query("CALL Get_Candidate_Job_Apply(@Candidate_Id_ :=?)",[Candidate_Id_],callback);
  },
};

module.exports=Candidate;

