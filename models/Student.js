var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');

// const nodemailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail');
var Student=
{ 
// Save_Student:function(Student_,callback)
// { 
//     return db.query("CALL Save_Student("+"@Student_Id_ :=?,"+"@Student_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+
//     "@Address4_ :=?,"+"@Pincode_ :=?,"+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Whatsapp_ :=?,"+"@DOB_ :=?,"+"@Gender_ :=?,"+"@Email_ :=?,"+
//     "@Alternative_Email_ :=?,"+"@Passport_No_ :=?,"+"@Passport_Expiry_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"+"@Photo_ :=?,"+
//     "@User_Id_ :=?"+")"
//     ,[Student_.Student_Id,Student_.Student_Name,Student_.Address1,Student_.Address2,Student_.Address3,Student_.Address4,
//     Student_.Pincode,Student_.Phone,Student_.Mobile,Student_.Whatsapp,Student_.DOB,Student_.Gender,Student_.Email,
//     Student_.Alternative_Email,Student_.Passport_No,Student_.Passport_Expiry,Student_.User_Name,Student_.Password,
//     Student_.Photo,Student_.User_Id],callback);
// } ,
Save_Student: function (Student_Data, callback)
{
    console.log(Student_Data)
    var Student_Value_ = 0;
    let Student_ = Student_Data.Student;
    if (Student_ != undefined && Student_ != '' && Student_ != null)
    Student_Value_ = 1
    var FollowUp_Value_ = 0;
    let FollowUp_ = Student_Data.Followup;
    if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null) {
        FollowUp_Value_ = 1;
        try {
            let fObj = JSON.parse(FollowUp_);
            if (fObj.FollowUp === 'true' || fObj.FollowUp === true) {
                fObj.FollowUp = 1;
            } else if (fObj.FollowUp === 'false' || fObj.FollowUp === false) {
                fObj.FollowUp = 0;
            }
            FollowUp_ = JSON.stringify(fObj);
        } catch (e) {}
    }
    var student_document_Value_ = 0;
    let student_document_ = Student_Data.student_document;
    if (student_document_ != undefined && student_document_ != '' && student_document_ != null)
        student_document_Value_ = 1;
    return db.query("CALL Save_Student(" + "@Student_:=?," + "@FollowUp_ :=?," + "@Student_Value_ :=?," +"@FollowUp_Value_ :=? ," + "@student_document_ :=?," +"@student_document_Value_ :=? )"
    , [Student_, FollowUp_, Student_Value_, FollowUp_Value_,student_document_,student_document_Value_ ],callback);
}, 



Save_Student_SKP: function (Student_Data, callback)
{
    console.log(Student_Data)
    var Student_Value_ = 0;
    let Student_ = Student_Data.Student;
    if (Student_ != undefined && Student_ != '' && Student_ != null)
    Student_Value_ = 1
    var FollowUp_Value_ = 0;
    let FollowUp_ = Student_Data.Followup;
    if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null) {
        FollowUp_Value_ = 1;
        try {
            let fObj = JSON.parse(FollowUp_);
            if (fObj.FollowUp === 'true' || fObj.FollowUp === true) {
                fObj.FollowUp = 1;
            } else if (fObj.FollowUp === 'false' || fObj.FollowUp === false) {
                fObj.FollowUp = 0;
            }
            FollowUp_ = JSON.stringify(fObj);
        } catch (e) {}
    }
    var student_document_Value_ = 0;
    let student_document_ = Student_Data.student_document;
    if (student_document_ != undefined && student_document_ != '' && student_document_ != null)
        student_document_Value_ = 1;
    return db.query("CALL Save_Student_SKP(" + "@Student_:=?," + "@FollowUp_ :=?," + "@Student_Value_ :=?," +"@FollowUp_Value_ :=? ," + "@student_document_ :=?," +"@student_document_Value_ :=? )"
    , [Student_, FollowUp_, Student_Value_, FollowUp_Value_,student_document_,student_document_Value_ ],callback);
}, 


Save_Student_Agent: function (Student_Data, callback)
{
    console.log(Student_Data)
    var Student_Value_ = 0;
    let Student_ = Student_Data.Student;
    if (Student_ != undefined && Student_ != '' && Student_ != null)
    Student_Value_ = 1
    var FollowUp_Value_ = 0;
    let FollowUp_ = Student_Data.Followup;
    if (FollowUp_ != undefined && FollowUp_ != '' && FollowUp_ != null) {
        FollowUp_Value_ = 1;
        try {
            let fObj = JSON.parse(FollowUp_);
            if (fObj.FollowUp === 'true' || fObj.FollowUp === true) {
                fObj.FollowUp = 1;
            } else if (fObj.FollowUp === 'false' || fObj.FollowUp === false) {
                fObj.FollowUp = 0;
            }
            FollowUp_ = JSON.stringify(fObj);
        } catch (e) {}
    }
    var student_document_Value_ = 0;
    let student_document_ = Student_Data.student_document;
    if (student_document_ != undefined && student_document_ != '' && student_document_ != null)
        student_document_Value_ = 1;
    return db.query("CALL Save_Student_Agent(" + "@Student_:=?," + "@FollowUp_ :=?," + "@Student_Value_ :=?," +"@FollowUp_Value_ :=? ," + "@student_document_ :=?," +"@student_document_Value_ :=? )"
    , [Student_, FollowUp_, Student_Value_, FollowUp_Value_,student_document_,student_document_Value_ ],callback);
},


Delete_Student:function(Student_Id_,callback)
{ 
    return db.query("CALL Delete_Student(@Student_Id_ :=?)",[Student_Id_],callback);
} ,
Get_Student:function(Student_Id_,callback)
{ 
    return db.query("CALL Get_Student(@Student_Id_ :=?)",[Student_Id_],callback);
} ,
Search_Student: async function (Fromdate_,Todate_,SearchbyName_,By_User_,Status_Id_,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2,Register_Value,Agent_Name_) {
    var Student = [];
     try {

         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
         Student = await (new storedProcedure('Search_Student', [Fromdate_, Todate_, SearchbyName_, By_User_, Status_Id_, Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2, Register_Value,Agent_Name_])).result();
     }
     catch (e) {
         
     }
     return {
       returnvalue: {
         Student
       }
     };
   },


   Search_Student_SKP: async function (Fromdate_,Todate_,SearchbyName_,By_User_,Status_Id_,Is_Date_Check_,Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2,Register_Value,Agent_Name_) {
    var Student = [];
     try {

         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
         Student = await (new storedProcedure('Search_Student_SKP', [Fromdate_, Todate_, SearchbyName_, By_User_, Status_Id_, Is_Date_Check_, Page_Index1_, Page_Index2_, Login_User_Id_, RowCount, RowCount2, Register_Value,Agent_Name_])).result();
     }
     catch (e) {
         
     }
     return {
       returnvalue: {
         Student
       }
     };
   },

Search_Status_Typeahead:function(Status_Name,Group_Id,callback)
{ 
    if (Status_Name === undefined || Status_Name==="undefined" )
        Status_Name='';
    return db.query("CALL Search_Status_Typeahead(@Status_Name :=?,@Group_Id :=?)", [Status_Name,Group_Id],callback);
},
Search_Users_Typeahead:function(Status_Name,callback)
{ 
    if (Status_Name === undefined || Status_Name==="undefined" )
        Status_Name='';
    return db.query("CALL Search_Users_Typeahead(@Status_Name :=?)", [Status_Name],callback);
},
Load_Gender:function(callback)
{ 
    return db.query("CALL Load_Gender()", [],callback);
},
Load_Student_Search_Dropdowns:function(Group_Id_,callback)
{ 
    return db.query("CALL Load_Student_Search_Dropdowns(@Group_Id_ :=?)", [Group_Id_],callback);
} ,
Get_FollowUp_Details: async function (Student_Id_) 
  {     
  const FollowUp = await (new storedProcedure('Get_FollowUp_Details',  [Student_Id_])).result();
  return {0:{FollowUp}};  
  },
  Get_Last_FollowUp: function (Users_Id_,callback)
  { 
      return db.query("CALL Get_Last_FollowUp(@Users_Id_ :=?)", [ Users_Id_],callback);
  } ,
Get_FollowUp_History: async function (Student_Id_) 
 {     
 const FollowUp=await (new storedProcedure('Get_FollowUp_History',  [Student_Id_])).result();
 return {0:{FollowUp}};  
 },
 Register_Student: function (Student_Id_,User_Id_,callback)
{ 
    return db.query("CALL Register_Student(@Student_Id_ :=?,@User_Id_ :=?)", [Student_Id_, User_Id_],callback);
} ,
Send_Register_Email: async function ( Email_) 
{  
    
}, 
Remove_Registration: function (Student_Id_,callback)
{ 
    return db.query("CALL Remove_Registration(@Student_Id_ :=?)", [Student_Id_],callback);
} ,
Search_Course_Typeahead:function(Course_Name,callback)
{ 
    if (Course_Name === undefined || Course_Name==="undefined" )
        Course_Name='';
    return db.query("CALL Search_Course_Typeahead(@Course_Name :=?)", [Course_Name],callback);
},
Search_Course_Typeahead_University:function(Course_Name,University_Id,Duration_Name_,callback)
{ 
    if (Course_Name === undefined || Course_Name==="undefined" )
        Course_Name='';
    if (Duration_Name_ === undefined || Duration_Name_==="undefined" )
        Duration_Name_='';
    return db.query("CALL Search_Course_Typeahead_University(@Course_Name :=?,@University_Id :=?,@Duration_Name_ :=?)", [Course_Name,University_Id,Duration_Name_],callback);
},
Get_Course_Student:function(Course_Id,University_Id_,callback)
{ 
    return db.query("CALL Get_Course_Student(@Course_Id :=?,@University_Id_ :=?)", [Course_Id,University_Id_],callback);
},
Get_Student_Course:function(Student_Id_,callback)
{ 
    return db.query("CALL Get_Student_Course(@Student_Id_ :=?)", [Student_Id_],callback);
},
Save_Student_Course: async function (Student_Course_) 
{
    return new Promise(async (rs,rej)=>{
    const pool = db.promise();
    let result1;
    var connection = await pool.getConnection();
        console.log(Student_Course_)
    try 
    {
        const result1 = await (new storedProcedure('Save_Student_Course', [Student_Course_.Student_Course_Id,Student_Course_.Student_Id,
        Student_Course_.Entry_Date,Student_Course_.Course_Name_Details,Student_Course_.Course_Id,Student_Course_.Course_Name,
        Student_Course_.Start_Date,Student_Course_.End_Date,Student_Course_.Join_Date,
        Student_Course_.By_User_Id,Student_Course_.Status,
        Student_Course_.Course_Type_Id,Student_Course_.Course_Type_Name,
        Student_Course_.Duration,Student_Course_.Agent_Amount,
        Student_Course_.Total_Fees,
        Student_Course_.University_Id,Student_Course_.Certificate_Date,Student_Course_.Certificate_Grade,
        Student_Course_.Duration_Type_Id,Student_Course_.Starting_Month,Student_Course_.Starting_Year,
        Student_Course_.Ending_Month,Student_Course_.Ending_Year,Student_Course_.Course_Duration_Id,
        Student_Course_.Student_Course_Subject, Student_Course_.Student_Fees_Installment_Save,
        Student_Course_.Student_Course_Part], connection)).result();
        //await connection.commit();
        connection.release();
        console.log(result1)
        rs( result1);
        }
    catch (err) {
    //await connection.rollback();
    console.log(err)
    rej(err);
        var result2 = [{'Student_Course_Id_':0}]
    rs(result2);
    }
    finally 
    {
    connection.release();
    }
    })
},
Update_Certificate_Date: async function (Student_Course_) 
{
    return new Promise(async (rs,rej)=>{
    const pool = db.promise();
    let result1;
    var connection = await pool.getConnection();
    try 
    {
        const result1 = await (new storedProcedure('Update_Certificate_Date', [Student_Course_.Student_Course_Id,
            Student_Course_.Certificate_Date,Student_Course_.Certificate_Grade,Student_Course_.Certificate_Status], connection)).result();        
        //await connection.commit();
        connection.release();
        rs( result1);
        }
    catch (err) {
    //await connection.rollback();
    rej(err);
        var result2 = [{'Student_Course_Id_':0}]
    rs(result2);
    }
    finally 
    {
    connection.release();
    }
    })
},
Search_Subject_Course_Typeahead:function(Subject_Name,Course_Id,callback)
{ 
    if (Subject_Name === undefined || Subject_Name==="undefined" )
    Subject_Name='';
    return db.query("CALL Search_Subject_Course_Typeahead(@Subject_Name :=?,@Course_Id :=?)", [Subject_Name,Course_Id],callback);
},
Load_Exam_Status:function(callback)
{ 
    return db.query("CALL Load_Exam_Status()",[],callback);
} ,
Save_Mark_List_Master: async function (Mark_List_) {
 
    return new Promise(async (rs,rej)=>{
    const pool = db.promise();
    let result1;
    var connection = await pool.getConnection();
    try 
    {
        console.log(Mark_List_)
        
        let is_admin = false;
        if (Mark_List_.User_Id) {
            const [userRows] = await connection.query("SELECT User_Type FROM users WHERE Users_Id = ?", [Mark_List_.User_Id]);
            if (userRows && userRows.length > 0 && userRows[0].User_Type === 1) {
                is_admin = true;
            }
        }
        
        let status = 'Pending';
        if (is_admin && Mark_List_.Mark_List_Status) {
            status = Mark_List_.Mark_List_Status;
        }

        const result1 = await (new storedProcedure('Save_Mark_List', [Mark_List_.Mark_List_Id ,Mark_List_.Student_Id,
            Mark_List_.Student_Course_Part_Id,Mark_List_.User_Id,Mark_List_.Grade,
            Mark_List_.Part_Id,Mark_List_.Part_Name,Mark_List_.Month_Id,Mark_List_.Month_Name,
            Mark_List_.Year_Id,Mark_List_.Year_Name,Mark_List_.Issue_Date,Mark_List_.Mark_List_Data,
            status], connection)).result();
        // const result1 = await (new storedProcedure('Save_Mark_List', [Mark_List_Data ], connection)).result();
        
        //await connection.commit();
        connection.release();
        rs( result1);
        }
    catch (err) { 
    //await connection.rollback();
    rej(err);
        var result2 = [{'Mark_List_Id_':0}]
    rs(result2);
    }
    finally 
    {
    connection.release();
    }
    })
},
Get_Student_Mark_List:function(Student_Id_,Part_Id_,callback)
{ 
    return db.query("CALL Get_Student_Mark_List(@Student_Id_ :=?,@Part_Id_ :=?)", [Student_Id_,Part_Id_],callback);
},
Save_Student_Receipt_Voucher:function(Receipt_Voucher_,callback)
{ 
  console.log(Receipt_Voucher_)
    return db.query("CALL Save_Student_Receipt_Voucher("+"@Receipt_Voucher_Id_ :=?,"+"@Date_ :=?,"+
    "@Student_Id_ :=?,"+"@Amount_ :=?,"+"@Payment_Mode_ :=?,"+ "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+
    "@To_Account_Id_ :=?,"+"@Description_ :=?,"+"@Student_Fees_Installment_Details_Id_ :=?,"+"@Student_Course_Id_ :=?,"+
    "@Fees_Type_Id_ :=?,"+"@Agent_Id_ :=?)"
    ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.Date,Receipt_Voucher_.From_Account_Id,
    Receipt_Voucher_.Amount,Receipt_Voucher_.Payment_Mode,Receipt_Voucher_.User_Id,Receipt_Voucher_.Payment_Status,
    Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Description,Receipt_Voucher_.Student_Fees_Installment_Details_Id,
    Receipt_Voucher_.Student_Course_Id,Receipt_Voucher_.Fees_Type_Id,Receipt_Voucher_.Agent_Id],callback);
},

Send_Receipt_Email: async function (Receipt_Details_) 
{  
  
}, 
Send_Course_Email: async function ( Email_) 
{  
  
   
}, 
Get_Student_Receipt_History:function(Student_Id_,callback)
{ 
return db.query("CALL Get_Student_Receipt_History(@Student_Id_ :=?)", [Student_Id_],callback);
},
Delete_Student_Receipt_Voucher:function(Receipt_Voucher_Id_,callback)
{ 
  return db.query("CALL Delete_Student_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)", [Receipt_Voucher_Id_],callback);
},
Get_Student_Details:function(Student_Id_,callback)
{ 
    return db.query("CALL Get_Student_Details(@Student_Id_ :=?)", [Student_Id_],callback);
},
Get_Student_Course_Apply:function(Student_Id_,callback)
{ 
return db.query("CALL Get_Student_Course_Apply(@Student_Id_:=?)",[Student_Id_],callback);
},
Get_Mark_Details:function(Part_Id_,Student_Id_,callback)
{ 
    return db.query("CALL Get_Mark_Details(@Part_Id_ :=?,@Student_Id_ :=?)", [Part_Id_,Student_Id_],callback);
},
Get_Mark_Details_Student:function(Part_Id_,Student_Id_,callback)
{ 
    return db.query("CALL Get_Mark_Details_Student(@Part_Id_ :=?,@Student_Id_ :=?)", [Part_Id_,Student_Id_],callback);
},
Get_Fees_Details:function(Student_Id_,Client_Account_Id_,callback)
{ 
    return db.query("CALL Get_Fees_Details(@Student_Id_ :=?,@Client_Account_Id_ :=?)", [Student_Id_,Client_Account_Id_],callback);
},
Save_Student_front: function (Student_Data, callback)
{
    var Student_Value_ = 0;
    var student_document_Value_=0;
    let Student_ = Student_Data.Student;
    if (Student_ != undefined && Student_ != '' && Student_ != null)
    Student_Value_ = 1

    let student_document_ = Student_Data.student_document;
    if (student_document_ != undefined && student_document_ != '' && student_document_ != null)
    student_document_Value_ = 1;

     return db.query("CALL Save_Student_front(" + "@Student_:=?," + "@Student_Value_ :=?," + "@student_document_ :=?," + "@student_document_Value_:=?)"
     , [Student_ ,Student_Value_,student_document_,student_document_Value_],callback);
 },
Submit_Exam:function(Exam_Submitted_,callback)
{ 
  console.log(Exam_Submitted_);  
    return db.query("CALL Submit_Exam("+"@Question_Data_ :=?,"+"@Exam_Master_Id_ :=?,"+"@Student_Id_ :=?,"+"@Mark_Obtained_:=?,"+"@Status_:=?,"+"@Student_Course_Part_Id_:=?,"+"@Course_Subject_Id_:=?,"+"@Part_Name:=?,"+"@Month_Id:=?,"+"@Month_name:=?,"+"@Year_Id:=?,"+"@Year_name:=?)"
    ,[JSON.stringify(Exam_Submitted_.Question_Data),Exam_Submitted_.Exam_Master_Id,Exam_Submitted_.Student_Id,Exam_Submitted_.Mark_Obtained,Exam_Submitted_.Status,Exam_Submitted_.Student_Course_Part_Id,Exam_Submitted_.Course_Subject_Id,Exam_Submitted_.Part_Name,Exam_Submitted_.Month_Id,Exam_Submitted_.Month_name,Exam_Submitted_.Year_Id,Exam_Submitted_.Year_name],callback);
},
Start_Exam:function(Subject_Id_,Part_Id_,Subject_Name_,Course_Id_,Student_Id_,callback)
{ 
    return db.query("CALL Start_Exam(@Subject_Id_ :=?,@Part_Id_ :=?,@Subject_Name_ :=?,@Course_Id_ :=?,@Student_Id_ :=?)",[Subject_Id_,Part_Id_,Subject_Name_,Course_Id_,Student_Id_],callback);
},

Get_Activities_Details_History:function(Student_Id_,callback)
{ 
return db.query("CALL Get_Activities_Details_History(@Student_Id_ :=?)", [Student_Id_],callback);
},

Search_Activity_Report: async function (Fromdate_,Todate_,SearchbyName_,Agent_Id,Is_Date_Check_,Login_User_Id_) {
    var Activity = [];
     try {
  
         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
             Activity = await (new storedProcedure('Search_Activity_Report', [Fromdate_, Todate_, SearchbyName_, Agent_Id,Is_Date_Check_,Login_User_Id_])).result();
     }
     catch (e) {
         
     }
     return {
       returnvalue: {Activity}
     };
   },



   Search_Student_Payment: async function (Fromdate_,Todate_,SearchbyName_,Is_Date_Check_,Login_User_Id_) {
    var Activity = [];
     try {
  
         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
             Activity = await (new storedProcedure('Search_Student_Payment', [Fromdate_, Todate_, SearchbyName_,Is_Date_Check_,Login_User_Id_])).result();
     }
     catch (e) {
         
     }
     return {
       returnvalue: {Activity}
     };
   },


   
   Search_Student_Payamount: async function (Fromdate_,Todate_,SearchbyName_,Is_Date_Check_,Login_User_Id_) {
    var Activity = [];
     try {
  
         if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
             SearchbyName_ = '';
             Activity = await (new storedProcedure('Search_Student_Payamount', [Fromdate_, Todate_, SearchbyName_,Is_Date_Check_,Login_User_Id_])).result();
     }
     catch (e) {
         
     }
     return {
       returnvalue: {Activity}
     };
   },



   Load_Activity_Dropdowns:function(University_Id_,callback)
{ 
  console.log(University_Id_)
    return db.query("CALL Load_Activity_Dropdowns(@University_Id_ :=?)", [University_Id_],callback);
},
Save_Activity_Details:function(ActivityDetails_,callback)
{ 
    return db.query("CALL Save_Activity_Details("+"@Activity_Id_ :=?,"+"@Amount_ :=?,"+"@Descripition_ :=?,"+"@Student_Id_ :=?"+")"
    ,[ActivityDetails_.Activity_Id,ActivityDetails_.Amount,ActivityDetails_.Descripition,ActivityDetails_.Student_Id],callback);
},
Get_Activity_Details:function(Student_Id_,callback)
 { 
return db.query("CALL Get_Activity_Details(@Student_Id_ :=?)",[Student_Id_],callback);
 } ,
 Get_University_Activity:function(University_Id_,callback)
 { 
return db.query("CALL Get_University_Activity(@University_Id_ :=?)",[University_Id_],callback);
 } ,
 Load_Part:function(callback)
{ 
    return db.query("CALL Load_Part()",[],callback);
} ,
Search_Part_Subject_Typeahead:function(Student_Id_,Course_Id_,Part_Id_,Subject_Name_,callback)
{ 
    if (Subject_Name_ === undefined || Subject_Name_==="undefined" )
    Subject_Name_='';
    return db.query("CALL Search_Part_Subject_Typeahead_2(@Student_Id_ :=?,@Course_Id_ :=?,@Part_Id_ :=?,@Subject_Name_ :=?)", [Student_Id_,Course_Id_,Part_Id_,Subject_Name_],callback);
},
Load_Month_Status:function(callback)
{ 
    return db.query("CALL Load_Month_Status()",[],callback);
},
Load_Month_Status_for_Part:function(University_Id_,callback)
{ 
    return db.query("CALL Load_Month_Status_for_Part(@University_Id_ :=?)",[University_Id_],callback);
},
Delete_Student_Mark_Details:function(Mark_List_Master_Id_,callback)
{ 
  return db.query("CALL Delete_Student_Mark_Details(@Mark_List_Master_Id_ :=?)", [Mark_List_Master_Id_],callback);
},
Load_Student_Part:function(Student_Id_,callback)
{ 
  return db.query("CALL Load_Student_Part(@Student_Id_ :=?)", [Student_Id_],callback);
},
Get_University_Changes:function(University_Id_,callback)
{ 
  return db.query("CALL Get_University_Changes(@University_Id_ :=?)", [University_Id_],callback);
},
Get_Company: async function () 
{
// const Company_Data=await (new storedProcedure('Get_Company',  [])).result();
const Company_Data=await (new storedProcedure('Get_Company',  [])).result();
return {Company_Data};    

},
Save_Company:function(Company_,callback)
{ 
 //console.log(Company_);
 var Company_value_=1;
return db.query("CALL Save_Company("+"@Company_ :=?,"+"@Company_value_ :=?)" ,[JSON.stringify(Company_),Company_value_],callback); 
},
Get_Course_Part_Mark:function(Student_Id_,Course_Id_,Part_Id_,callback)
{ 
  return db.query("CALL Get_Course_Part_Mark(@Student_Id_ :=?,@Course_Id_ :=?,@Part_Id_ :=?)", [Student_Id_,Course_Id_,Part_Id_],callback);
},
Get_Year_Changes:function(Course_Id_,Year_,Fees_Type_Id_,callback)
{ 
  return db.query("CALL Get_Year_Changes(@Course_Id_ :=?,@Year_ :=?,@Fees_Type_Id_ :=?)", [Course_Id_,Year_,Fees_Type_Id_],callback);
},
Get_Grade:function(Student_Id_,callback)
{ 
  return db.query("CALL Get_Grade(@Student_Id_ :=?)", [Student_Id_],callback);
},
Delete_Student_File:function(Student_Id_,File_Name,callback)
{ 
return db.query("CALL Delete_Student_File(@Student_Id_ :=?,@File_Name_ :=?)",[Student_Id_,File_Name],callback);
},
Load_User_Agent_Details:function(User_Agent_,callback)
{ 
  return db.query("CALL Load_User_Agent_Details(@User_Agent_ :=?)", [User_Agent_],callback);
},

// Verify_Student_Payment:function(Student_Verified_Details_,callback)
// { 
// return db.query("CALL Verify_Student_Payment("+"@Agent_Id_ :=?,"+"@Subscription_Payment_Id :=?,"+"@Duration_ :=?)"
// ,[Student_Verified_Details_.Agent_Id,Student_Verified_Details_.Subscription_Payment_Id,Student_Verified_Details_.Duration],callback);
// },




Verify_Student_Payment: async function (Student_Verified_Details_) {
    return new Promise(async (rs, rej) => {
        const pool = db.promise();
        let result1;
        var connection = await pool.getConnection();
        console.log(Student_Verified_Details_)
        try {
            const result1 = await new storedProcedure(
                "Verify_Student_Payment",
                [
                    
                    Student_Verified_Details_.Student_Selected_Details,
                    Student_Verified_Details_.Verified_By,
                ],
                connection
            ).result();

            await connection.commit();
            connection.release();
            rs(result1);
        } catch (err) {
            console.log(err)
            await connection.rollback();
            rej(err);
            var result2 = [{ Student_Id_: 0 }];
            rs(result2);
        } finally {
            connection.release();
        }
    });
},



Pay_Student_Payment: async function (Student_Verified_Details_) {
    return new Promise(async (rs, rej) => {
        const pool = db.promise();
        let result1;
        var connection = await pool.getConnection();
        console.log(Student_Verified_Details_)
        try {
            const result1 = await new storedProcedure(
                "Pay_Student_Payment",
                [
                    
                    Student_Verified_Details_.Student_Selected_Details,
                    Student_Verified_Details_.Verified_By,
                    Student_Verified_Details_.Registration_Fees_Payment_Id,
                ],
                connection
            ).result();

            await connection.commit();
            connection.release();
            rs(result1);
        } catch (err) {
            console.log(err)
            await connection.rollback();
            rej(err);
            var result2 = [{ Student_Id_: 0 }];
            rs(result2);
        } finally {
            connection.release();
        }
    });
},



};
module.exports=Student;

