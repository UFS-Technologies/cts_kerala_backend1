var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
var Job_Posting=
{ 
// Save_Job_Posting: function (Job_Posting_Data, callback)
// {
//     var Job_Posting_Value_ = 0;
//     let Job_Posting_ = Job_Posting_Data.Job_Posting;
//     if (Job_Posting_ != undefined && Job_Posting_ != '' && Job_Posting_ != null)
//     Job_Posting_Value_ = 1
//     var FollowUp_Value_ = 0;
//     let FollowUp_ = Job_Posting_Data.Followup;
//     if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null)
//     FollowUp_Value_ = 1;
//     return db.query("CALL Save_Job_Posting(" + "@Job_Posting_:=?," + "@FollowUp_ :=?," + "@Job_Posting_Value_ :=?," +"@FollowUp_Value_ :=? )"
//     , [Job_Posting_, FollowUp_, Job_Posting_Value_, FollowUp_Value_ ],callback);
// },
Save_Job_Posting:function(Job_Posting_,callback)
 { 
    return db.query("CALL Save_Job_Posting("+"@Job_Posting_Id_ :=?,"+"@Job_Code_ :=?,"+"@Job_Title_ :=?,"+
    "@Descritpion_ :=?,"+"@Skills_ :=?,"+"@No_Of_Vaccancy_ :=?,"+"@Experience_ :=?,"+"@Experience_Name_ :=?,"+
    "@Job_Location_ :=?,"+ "@Qualification_ :=?,"+"@Qualification_Name_ :=?,"+"@Functional_Area_ :=?,"+
    "@Functional_Area_Name_ :=?,"+ "@Specialization_ :=?,"+"@Specialization_Name_ :=?,"+"@Salary_ :=?,"+
    "@Last_Date_ :=?,"+ "@Company_Name_ :=?,"+"@Address_ :=?,"+"@Contact_Name_ :=?,"+"@Contact_No_ :=?,"+
    "@Email_ :=?,"+ "@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+"@Address4_ :=?,"+"@Pincode_ :=?,"+
    "@Status_ :=?,"+"@Logo_ :=?,"+"@User_Id_ :=?"+")"
 ,[Job_Posting_.Job_Posting_Id,Job_Posting_.Job_Code,Job_Posting_.Job_Title,Job_Posting_.Descritpion,
    Job_Posting_.Skills,Job_Posting_.No_Of_Vaccancy,Job_Posting_.Experience,Job_Posting_.Experience_Name,
    Job_Posting_.Job_Location,Job_Posting_.Qualification,Job_Posting_.Qualification_Name,Job_Posting_.Functional_Area,
    Job_Posting_.Functional_Area_Name,Job_Posting_.Specialization,Job_Posting_.Specialization_Name,Job_Posting_.Salary,
    Job_Posting_.Last_Date,Job_Posting_.Company_Name,Job_Posting_.Address,Job_Posting_.Contact_Name,
    Job_Posting_.Contact_No,Job_Posting_.Email,Job_Posting_.Address1,Job_Posting_.Address2,Job_Posting_.Address3,
    Job_Posting_.Address4,Job_Posting_.Pincode,Job_Posting_.Status,Job_Posting_.Logo,Job_Posting_.User_Id
],callback);
 } ,
Delete_Job_Posting:function(Job_Posting_Id_,callback)
{ 
    return db.query("CALL Delete_Job_Posting(@Job_Posting_Id_ :=?)",[Job_Posting_Id_],callback);
} ,
Get_Job_Posting:function(Job_Posting_Id_,callback)
{ 
    return db.query("CALL Get_Job_Posting(@Job_Posting_Id_ :=?)",[Job_Posting_Id_],callback);
} ,
Search_Job_Posting: async function ( Job_Code_ ,Job_Title_ ,Job_Location_ ,Experience_,Status_,Page_Start_,Page_End_,Page_Length_) {
  
    var Job_Posting = [];
     try {
        if (Job_Code_ === undefined || Job_Code_ === "undefined")
            Job_Code_ = '';
        if (Job_Title_ === undefined || Job_Title_ === "undefined")
            Job_Title_ = '';
         if (Job_Location_ === undefined || Job_Location_ === "undefined")
             Job_Location_ = '';
         Job_Posting = await (new storedProcedure('Search_Job_Posting', [Job_Code_ ,Job_Title_ ,Job_Location_ ,Experience_,Status_,Page_Start_,Page_End_,Page_Length_])).result();
     }
     catch (e) 
     {
         
     }
     return { returnvalue: {Job_Posting}
     };
   },

};
module.exports=Job_Posting;


