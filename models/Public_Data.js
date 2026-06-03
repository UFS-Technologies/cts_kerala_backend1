 var db=require('../dbconnection');
 var fs = require('fs');
 const storedProcedure=require('../helpers/stored-procedure');
//const nodemailer = require("nodemailer");
//const sgMail = require('@sendgrid/mail')
//sgMail.setApiKey(process.env.SENDGRID_API_KEY)

 var Public_Data=
 { 
   Save_Student_Course: async function (Student_Course_Apply_) {
     return new Promise(async (rs, rej) => {
       const pool = db.promise();
       let result1;
       var connection = await pool.getConnection();
       //await connection.beginTransaction();
       var Course_Apply = Student_Course_Apply_.Course_Apply;
       try {
         const result1 = await (new storedProcedure('Save_Student_Course', [0, Student_Course_Apply_.Student_Id,
           Course_Apply], connection)).result();

         const result2 = await (new storedProcedure('Load_Company', [], connection)).result();
         const result3 = await (new storedProcedure('Load_User', [Student_Course_Apply_.Login_Id], connection)).result();
        //   var a = "<table><tr><td>Country</td><td>University</td><td>Course</td>"
        //  var b = ""
        //  for (var i = 0; i < result1.length; i++) {
        //    b = b + "<tr><td>" + result1[i].Country_Name + "</td><td>" + result1[i].University_Name + "</td><td>" + result1[i].Course_Name + "</td><td>"
        //      + result1[i].Subject_Name + "</td><td>" + result1[i].Tution_Fees + "</td><td>" + result1[i].Application_Fees + "</td><td>"
        //      + result1[i].Entry_Requirement + "</td><td>" + result1[i].Work_Experience + "</td><td>" + result1[i].Level_Detail_Name + "</td><td>"
        //      + result1[i].Duration_Name + "</td><td>" + result1[i].intake_Name + "</td><td>" + result1[i].Ielts_Name + "</td><td>"
        //      + result1[i].Details + "</td><td>" + result1[i].Living_Expense + "</td><td>" + result1[i].Notes + "</td></tr>"
        //  }
        //  a = a + b + "</tr></table>"
        //  let transporter = nodemailer.createTransport({
        //    host: 'smtp.gmail.com',
        //    port: 587,
        //    secure: false,
        //    requireTLS: true,
        //    auth: {
        //      user: 'teena@ufstechnologies.com',
        //      pass: 'teena1225'
        //    }
        //  });

        //  const msg = {
        //    to: result1[0].Email,
        //    from: 'hr@ufstechnologies.com', 
        //    subject: 'Course details',
        //    html: "Dear <span style = 'color:#2f3293; font-weight:bold;'>" + result1[0].Student_Name + ",</span>"
        //      + "<br/><br/>"   
        //      + "  Greetings from "+ result2[0].companyname+""
        //      + "<br/><br/>"   
        //      + "Thank you for your enquiry with us."
        //      + "<br/><br/>" + "<p style = 'background:#2f3293;color:#eef0f0;font-family:Roboto !important;'>COURSE DETAILS </p>"
        //      + "<br/><br/>" + a + ""
        //      + "<br/><br/>" + ""  
        //      + "<br/><br/>" + "Thanks & Regards" + "<br/><br/>" 
        //     + result3[0].User_Details_Name + "<br/>" +
        //      result2[0].Mobile + "<br/>" +
        //      result2[0].Email + ""
        //      + "<br/><br/>" +  ""
        //       + result2[0].Address1 + "<br/>" +
        //      result2[0].Address2 + "<br/>" + 
        //      result2[0].Address3 + "<br/>" +
        //       result2[0].Mobile + ""
       
        //  }
        //  var d = await sgMail.send(msg);
 




         //  const mailOptions = {
         //    from: 'teena@ufstechnologies.com', 
         //    to: result1[0].Email, 
         //    subject: 'Subject of your email', 
         //    html:"Dear "+result1[0].Student_Name+""
         //    +"<br/><br/>"
         //    +"  Greetings from Study Visa Finder!"  
         //    +"<br/><br/>"+a+""

         //  };

         //   transporter.sendMail(mailOptions, function (err, info) {
         //    if(err)
         //      return false;
         //    else
         //      return true;
         // });


         //await connection.commit();
         connection.release();
         rs(result1);
       }
       catch (err) {
         
         //await connection.rollback();
         rej(err);
       }
     })
   },
  Save_Student_Course1: async function (Student_Course_Apply_) 
  {
     return new Promise(async (rs,rej)=>{
     const pool = db.promise();
     let result1;
     var connection = await pool.getConnection();
     //await connection.beginTransaction();
     var Course_Apply = Student_Course_Apply_.Course_Apply;
     try
     {
       const msg = {
         to: 'teena@ufstechnologies.com', // Change to your recipient
         from: 'hr@ufstechnologies.com', // Change to your verified sender
         subject: 'Sending with SendGrid is Fun',
         text: 'and easy to do anywhere, even with Node.js',
         html: '<strong>and easy to do anywhere, even with Node.js</strong>'
       }
        const n=await sgMail.send(msg)
        //  .then(() => {
        //    return 1;
          
        //  })
        //  .catch((error) => {
        //    console.error(error)
        //    return 1;
          
        // })
      //  const result1 = await(new storedProcedure('Save_Student_Course',[0, Student_Course_Apply_.Student_Id,
      //     Course_Apply], connection)).result(); 
      //   var a ="<table><tr><td>Country</td><td>University</td><td>Course</td>"
      //   var b=""
      //   for(var i=0;i<result1.length;i++)
      //   {
      //     b = b + "<tr><td>" + result1[i].Country_Name + "</td><td>" + result1[i].University_Name + "</td><td>" + result1[i].Course_Name +"</td></tr>"
      //   }
      // a =a +b +"</tr></table>"
      //      let transporter = nodemailer.createTransport({
      //         host: 'smtp.gmail.com',
      //          port: 587,
      //          secure: false,
      //          requireTLS: true,
      //           auth: {
      //             user: 'teena@ufstechnologies.com', 
      //             pass: 'teena1225'
      //           }
      //         });
      //        const mailOptions = {
      //          from: 'teena@ufstechnologies.com', 
      //          to: result1[0].Email, 
      //          subject: 'Subject of your email', 
      //          html:"Dear "+result1[0].Student_Name+""
      //          +"<br/><br/>"
      //          +"  Greetings from Study Visa Finder!"  
      //          +"<br/><br/>"+a+""
               
      //        };
           
      //         transporter.sendMail(mailOptions, function (err, info) {
      //          if(err)
      //            return false;
      //          else
      //            return true;
      //       });
  
           
      //   await connection.commit();
      //   connection.release();
      //   rs( result1);
     }
     catch (err) {
        //await connection.rollback();
        rej(err);
     }   
     })
  },
Get_site_Pageload:function(callback)
{ 
return db.query("CALL Get_site_Pageload()",[],callback);
},
 
Public_Search_Student_Details:function(Registration_No_,callback)
{ 
  console.log(Registration_No_.Registration_No_);
  return db.query("CALL Public_Search_Student_Details(@Registration_No_:=?)",
  [Registration_No_.Registration_No_],callback);
} ,
  
Public_Search_Course:function(Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length,callback)
{ 
  if (Course_Name===undefined || Course_Name==="undefined" )
  Course_Name='';
  if (Branch_Search===undefined || Branch_Search==="undefined" )
  Branch_Search='';
  if (Duration_Search===undefined || Duration_Search==="undefined" )
  Duration_Search='';
  return db.query("CALL Public_Search_Course(@Level_Detail_Id :=?,@Country_Id :=?,@Intake_Id :=?,@Course_Name :=?,@Branch_Search :=?,@Duration_Search :=?,@Ielts_ :=?,@Page_Start :=?,@Page_End :=?,@Page_Length :=?)",
  [Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length,],callback);
} ,

Public_Search_Course_Typeahead:function(Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length,callback)
{ 
  if (Course_Name===undefined || Course_Name==="undefined" )
  Course_Name='';
  if (Branch_Search===undefined || Branch_Search==="undefined" )
  Branch_Search='';
  if (Duration_Search===undefined || Duration_Search==="undefined" )
  Duration_Search='';
  return db.query("CALL Public_Search_Course_Typeahead(@Level_Detail_Id :=?,@Country_Id :=?,@Intake_Id :=?,@Course_Name :=?,@Branch_Search :=?,@Duration_Search :=?,@Ielts_ :=?,@Page_Start :=?,@Page_End :=?,@Page_Length :=?)",
  [Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length,],callback);
} ,
Get_More_Information:function(Course_Id_,callback)
{ 
   db.query("CALL Get_More_Information(@Course_Id_ :=?)",[Course_Id_],callback);
},

   Update_Student_Public: function (Student_, callback) {
     return db.query("CALL Update_Student(" + "@Student_Id_ :=?," + "@Agent_Id_ :=?," + "@Student_Name_ :=?," + "@Last_Name_ :=?,"
       + "@Address1_ :=?," + "@Address2_ :=?," + "@Pincode_ :=?," + "@Email_ :=?," + "@Phone_Number_ :=?," +
       "@Promotional_Code_ :=?," + "@Student_Status_Id_ :=?," + "@Password_ :=?" + ")"
       , [Student_.Student_Id, Student_.Agent_Id, Student_.Student_Name, Student_.Last_Name, Student_.Address1, Student_.Address2,
       Student_.Pincode, Student_.Email, Student_.Phone_Number, Student_.Promotional_Code,
       Student_.Student_Status_Id, Student_.Password], callback);
   },

// Get_Student_Details:function(Student_Id_,callback)
// {
  
//    db.query("CALL Get_Student_Details(@Student_Id_ :=?)",[Student_Id_],callback);
// },
// Get_Student_Course_Apply:function(Student_Id_,callback)
// { 
//    db.query("CALL Get_Student_Course_Apply(@Student_Id_ :=?)",[Student_Id_],callback);
// },

// Get_Message_Details:function(Student_Id_,callback)
// { 
//    db.query("CALL Get_Message_Details(@Student_Id_ :=?)",[Student_Id_],callback);
// },

// Get_Student_Course_Selection:function(Student_Course_Apply_Id_,callback)
// { 
//    db.query("CALL Get_Student_Course_Selection(@Student_Course_Apply_Id_ :=?)",[Student_Course_Apply_Id_],callback);
// },

// Forgot_Password_Student: async function (Data) 
//  {
//     var Email_=Data.Email;

//          return new Promise(async (rs,rej)=>{
//         const pool = db.promise();
//          let result1;
//           var connection = await pool.getConnection();
//          await connection.beginTransaction();
         
//           try
//            {
//             const result1 = await(new storedProcedure('Check_Student_Mail',[Email_], connection)).result();
//             if (result1[0].Student_Id>=0){
      
//                           let transporter = nodemailer.createTransport({
//                              host: 'smtp.gmail.com',
//                               port: 587,
//                               secure: false,
//                               requireTLS: true,
//                                auth: {
//                                  user: 'annu@ufstechnologies.com', 
//                                  pass: 'annu@ufs2896'
//                                }
//                              });
//                             const mailOptions = {
//                               from: 'annu@ufstechnologies.com', 
//                               to: Email_, 
//                               subject: 'Forgot Password Studyvisafinder', 
//                               html:"Dear "+result1[0].Student_Name+""
//                               +"<br/>We have received your Forgot password request. Following is your password to login on Studyvisafinder Console.<br/>"
//                               +"<br></br>"
//                               +"<br/> Password : "+result1[0].Password+" <br/>"
//                               +"<br></br>"
//                               +"<br/> Once logged in successfully, you will need to change the above password. <br/>"
//                               +"<br></br>"
//                               +"<br/> Best regards, <br/>"
//                               +"<br/> Studyvisafinder<br/>"
//                               +"<br></br>"
//                               +"<br/> Replies to this message are undeliverable and will not reach Studyvisafinder <br/>"
//                               +"<br/> Please do not reply. <br/>"               
//                               +"<br/><br/>"
                              
//                             };
                          
//                              transporter.sendMail(mailOptions, function (err, info) {
                             
//                               if(err)

//                                 return 0;
//                               else
//                                 return 1;
//                            });
//                         }
//                           else
//                           {
//                              return 0;
//                           }


//             await connection.commit();
//               connection.release();
//               rs( {'Student_Id':1});
//             }
//             catch (err) {
              
//             await connection.rollback();
//             rej(err);
//             }   
// })
// },

Forgot_Password_Agent: async function (Data) 
 {
    var Email_=Data.Email;

         return new Promise(async (rs,rej)=>{
        const pool = db.promise();
         let result1;
          var connection = await pool.getConnection();
         //await connection.beginTransaction();
         
          try
           {
            const result1 = await(new storedProcedure('Check_Agent_Mail',[Email_], connection)).result();
   if (result1[0].Client_Accounts_Id>=0){
      
                          let transporter = nodemailer.createTransport({
                             host: 'smtp.gmail.com',
                              port: 587,
                              secure: false,
                              requireTLS: true,
                               auth: {
                                 user: 'annu@ufstechnologies.com', 
                                 pass: 'annu@ufs2896'
                               }
                             });
                            const mailOptions = {
                              from: 'annu@ufstechnologies.com', 
                              to: Email_, 
                              subject: 'Forgot Password Studyvisafinder', 
                              html:"Dear "+result1[0].Client_Accounts_Name+""
                              +"<br/>We have received your Forgot password request. Following is your password to login on Studyvisafinder Console.<br/>"
                              +"<br></br>"
                              +"<br/> Password : "+result1[0].Password+" <br/>"
                              +"<br></br>"
                              +"<br/> Once logged in successfully, you will need to change the above password. <br/>"
                              +"<br></br>"
                              +"<br/> Best regards, <br/>"
                              +"<br/> Studyvisafinder<br/>"
                              +"<br></br>"
                              +"<br/> Replies to this message are undeliverable and will not reach Studyvisafinder <br/>"
                              +"<br/> Please do not reply. <br/>"               
                              +"<br/><br/>"
                              
                            };
                          
                             transporter.sendMail(mailOptions, function (err, info) {
                             
                              if(err)

                                return 0;
                              else
                                return 1;
                           });
                        }
                          else
                          {
                             return 0;
                          }


            //await connection.commit();
              connection.release();
            
              rs( {'Client_Accounts_Id':1});
            }
            catch (err) {
              
            //await connection.rollback();
            rej(err);
            }   
})
},



// Get_Student_Document:function(Student_Id_,callback)
// { 
// return db.query("CALL Get_Student_Document(@Student_Id_ :=?)",[Student_Id_],callback);
// },
// Search_Document:function(Document_Name_,callback)
// { 
// if (Document_Name_===undefined || Document_Name_==="undefined" )
// Document_Name_='';
// return db.query("CALL Search_Document(@Document_Name_ :=?)",[Document_Name_],callback);
// },
// Save_Student_Document:function(Post_,callback)
// {  
//  return db.query("CALL Save_Student_Document(@Student_Id_ :=?,@Document_Id_ :=?,@Image_Detail_ :=?)",[Post_.Student_Id,Post_.Document_Id,Post_.Image_Detail],callback);
// },

// Search_Student_Agent:function(From_Date_,To_Date_ ,Is_Date_Check_ ,Student_Name_ ,Phone_Number_ ,Agent_Id_,Student_Status_Id_,Pointer_Start_,Pointer_Stop_,Page_Length_,callback)
// {
// if (Student_Name_===undefined || Student_Name_==="undefined" )
// Student_Name_='';

// if (Phone_Number_===undefined || Phone_Number_==="undefined" )
// Phone_Number_='';

// if (Agent_Id_===undefined || Agent_Id_==="undefined" )
// Agent_Id_=0;

// if (Pointer_Start_===undefined || Pointer_Start_==="undefined" )
// Pointer_Start_='';

// if (Pointer_Stop_===undefined || Pointer_Stop_==="undefined" )
// Pointer_Stop_='';

// return db.query("CALL Search_Student_Agent(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?,@Student_Name_ :=?,@Phone_Number_ :=?,@Agent_Id_ :=?,@Student_Status_Id_ :=?,@Pointer_Start_ :=?,@Pointer_Stop_ :=?,@Page_Length_ :=?)",
// [From_Date_,To_Date_ ,Is_Date_Check_ ,Student_Name_,Phone_Number_,Agent_Id_,Student_Status_Id_,Pointer_Start_,Pointer_Stop_,Page_Length_],callback);
// },

Save_Candidate_Public: function (Candidate_, callback) {
  return db.query("CALL Save_Candidate_Public(" + "@Candidate_Id_ :=?," + "@Candidate_Name_ :=?," + "@Mobile_ :=?," + "@Email_ :=?," + "@Password_ :=?" + ")"
    , [Candidate_.Candidate_Id, Candidate_.Candidate_Name, Candidate_.Mobile, Candidate_.Email, Candidate_.Password], callback);
},


Public_Search_Job:function(Job_Title_,Qualification_,Experience_,Functional_Area_,Specialization_,Page_Start_,Page_End_,Page_Length_,callback)
{ 
  if (Job_Title_===undefined || Job_Title_==="undefined" )
  Job_Title_='';
 
  return db.query("CALL Public_Search_Job(" + "@Job_Title_ :=?," + "@Qualification_ :=?," + "@Experience_ :=?," + "@Functional_Area_ :=?," + "@Specialization_ :=?, " + "@Page_Start_ :=?, " + "@Page_End_:=?, " + "@Page_Length_ :=?" + ")"
  ,[Job_Title_,Qualification_,Experience_,Functional_Area_,Specialization_,Page_Start_,Page_End_,Page_Length_],callback);
} ,

Load_Candidate_Dropdowns:function(callback)
{ 
    return db.query("CALL Load_Candidate_Dropdowns()", [],callback);
} ,



Forgot_Password_Candidate1: async function (Data) 
 {
    var Email_=Data.Email;

         return new Promise(async (rs,rej)=>{
        const pool = db.promise();
         let result1;
          var connection = await pool.getConnection();
         //await connection.beginTransaction();
         
          try
           {
            const result1 = await(new storedProcedure('Check_Candidate_Mail',[Email_], connection)).result();
            if (result1[0].Candidate_Id>=0){
      
                          let transporter = nodemailer.createTransport({
                             host: 'smtp.gmail.com',
                              port: 587,
                              secure: false,
                              requireTLS: true,
                               auth: {
                                 user: 'annu@ufstechnologies.com', 
                                 pass: 'annu@ufs2896'
                               }
                             });
                            const mailOptions = {
                              from: 'annu@ufstechnologies.com', 
                              to: Email_, 
                              subject: 'Forgot Password Studyvisafinder', 
                              html:"Dear "+result1[0].Student_Name+""
                              +"<br/>We have received your Forgot password request. Following is your password to login on Studyvisafinder Console.<br/>"
                              +"<br></br>"
                              +"<br/> Password : "+result1[0].Password+" <br/>"
                              +"<br></br>"
                              +"<br/> Once logged in successfully, you will need to change the above password. <br/>"
                              +"<br></br>"
                              +"<br/> Best regards, <br/>"
                              +"<br/> Studyvisafinder<br/>"
                              +"<br></br>"
                              +"<br/> Replies to this message are undeliverable and will not reach Studyvisafinder <br/>"
                              +"<br/> Please do not reply. <br/>"               
                              +"<br/><br/>"
                              
                            };
                          
                             transporter.sendMail(mailOptions, function (err, info) {
                             
                              if(err)

                                return 0;
                              else
                                return 1;
                           });
                        }
                          else
                          {
                             return 0;
                          }


            //await connection.commit();
              connection.release();
              rs( {'Student_Id':1});
            }
            catch (err) {
              
            //await connection.rollback();
            rej(err);
            }   
})
},

Forgot_Password_Candidate: async function (Data) 
 {
    var Email_=Data.Email;

         return new Promise(async (rs,rej)=>{
        const pool = db.promise();
         let result1;
          var connection = await pool.getConnection();
         //await connection.beginTransaction();
         
          try
           {
            const result1 = await(new storedProcedure('Check_Candidate_Mail',[Email_], connection)).result();
            if (result1[0].Candidate_Id>=0){
      
                          let transporter = nodemailer.createTransport({
                             host: 'smtp.gmail.com',
                              port: 587,
                              secure: false,
                              requireTLS: true,
                               auth: {
                                 user: 'vijayalakshmi@ufstechnologies.com', 
                                 pass: 'vlakshmi@7645'
                               }
                             });
                            const mailOptions = {
                              from: 'vijayalakshmi@ufstechnologies.com', 
                              to: Email_, 
                              subject: 'Forgot Password ', 
                              html:"Dear "+result1[0].Candidate_Name+""
                              +"<br/>We have received your Forgot password request. Following is your password to login on TVM Console.<br/>"
                              +"<br></br>"
                              +"<br/> Password : "+result1[0].Password+" <br/>"
                              +"<br></br>"
                              +"<br/> Once logged in successfully, you will need to change the above password. <br/>"
                              +"<br></br>"
                              +"<br/> Best regards, <br/>"
                              +"<br/> TVM<br/>"
                              +"<br></br>"
                              +"<br/> Replies to this message are undeliverable and will not reach TVM <br/>"
                              +"<br/> Please do not reply. <br/>"               
                              +"<br/><br/>"
                              
                            }
                          
                            sgMail
                            var d = await sgMail.send(mailOptions);
                          }
                            //await connection.commit();
                            connection.release();
                            rs(result1);                         
                      
                      
                                                
                        }   
                        catch (err) {
                          
                          //await connection.rollback();
                          rej(err);    
            }           
})
},

Save_Agent:function(Agent_,callback)
{ 
return db.query("CALL Save_Agent("+"@Course_Type_Data_ :=?,"+"@Agent_Id_ :=?,"+"@Agent_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+"@Address4_ :=?,"+"@Pincode_ :=?,"
+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Whatsapp_ :=?,"+"@DOB_ :=?,"+"@Gender_ :=?,"+"@Email_ :=?,"+"@Alternative_Email_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"
+"@Photo_ :=?,"+"@GSTIN_ :=?,"+"@Category_Id_ :=?,"+"@Commission_ :=?,"+"@User_Id_ :=?,"+"@Comm_Address1_ :=?,"+"@Comm_Address2_ :=?,"+"@Comm_Address3_ :=?,"
+"@Comm_Address4_ :=?,"+"@Comm_Pincode_ :=?,"+"@Comm_Mobile_ :=?,"+"@Center_Name_ :=?,"+"@Center_Code_ :=?,"+"@Agent_Fees_ :=?,"+"@District_Id_ :=?,"+"@Agent_No_ :=?,"+"@Agent_District_No_ :=?)"
,[JSON.stringify(Agent_.Course_Type_Data),Agent_.Agent_Id,Agent_.Agent_Name,Agent_.Address1,Agent_.Address2,Agent_.Address3,Agent_.Address4,Agent_.Pincode,Agent_.Phone,Agent_.Mobile,Agent_.Whatsapp,
Agent_.DOB,Agent_.Gender,Agent_.Email,Agent_.Alternative_Email,Agent_.User_Name,Agent_.Password,Agent_.Photo,Agent_.GSTIN,Agent_.Category_Id,
Agent_.Commission,Agent_.User_Id,Agent_.Comm_Address1,Agent_.Comm_Address2,Agent_.Comm_Address3,Agent_.Comm_Address4,Agent_.Comm_Pincode,
Agent_.Comm_Mobile,Agent_.Center_Name,Agent_.Center_Code,Agent_.Agent_Fees,Agent_.District_Id,Agent_.Agent_No,Agent_.Agent_District_No],callback);
},

Save_Student_Public: function (Student_, callback) {
  return db.query("CALL Save_Student_Public(" + "@Student_Id_ :=?," + "@Student_Name_ :=?," +"@Email_ :=?," + "@Password_ :=?," + "@Mobile_ :=?)"
    , [Student_.Student_Id, Student_.Student_Name, Student_.Email, Student_.Password, Student_.Mobile], callback);
},

Forgot_Password_Student: async function (Data) 
 {
    var Email_=Data.Email;

         return new Promise(async (rs,rej)=>{
        const pool = db.promise();
         let result1;
          var connection = await pool.getConnection();
         //await connection.beginTransaction();
         
          try
           {
            const result1 = await(new storedProcedure('Check_Student_Mail',[Email_], connection)).result();
            if (result1[0].Student_Id>=0){
      
                          let transporter = nodemailer.createTransport({
                             host: 'smtp.gmail.com',
                              port: 587,
                              secure: false,
                              requireTLS: true,
                               auth: {
                                 user: 'jesna@ufstechnologies.com', 
                                 pass: 'jesna@12057'
                               }
                             });
                            const mailOptions = {
                              from: 'jesna@ufstechnologies.com', 
                              to: Email_, 
                              subject: 'Forgot Password ', 
                              html:"Dear "+result1[0].Student_Name+""
                              +"<br/>We have received your Forgot password request. Following is your password to login on TVM Console.<br/>"
                              +"<br></br>"
                              +"<br/> Password : "+result1[0].Password+" <br/>"
                              +"<br></br>"
                              +"<br/> Once logged in successfully, you will need to change the above password. <br/>"
                              +"<br></br>"
                              +"<br/> Best regards, <br/>"
                              +"<br/> TVM<br/>"
                              +"<br></br>"
                              +"<br/> Replies to this message are undeliverable and will not reach TVM <br/>"
                              +"<br/> Please do not reply. <br/>"               
                              +"<br/><br/>"
                              
                            }
                          
                            sgMail
                            var d = await sgMail.send(mailOptions);
                          }
                            //await connection.commit();
                            connection.release();
                            rs(result1);                         
                      
                      
                                                
                        }   
                        catch (err) {
                          
                          //await connection.rollback();
                          rej(err);    
            }           
})
},

Submit_Contact_Form: async function (Contact_Data) {
  return new Promise(async (resolve, reject) => {
    try {
      const nodemailer = require("nodemailer");
      
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER || 'your-smtp-email@gmail.com',
          pass: process.env.SMTP_PASS || 'your-smtp-app-password'
        }
      });

      const mailOptions = {
        from: process.env.SMTP_USER || 'your-smtp-email@gmail.com',
        to: 'info@ctskerala.in',
        subject: `Contact Us Enquiry: ${Contact_Data.Subject || 'General Inquiry'}`,
        html: `
          <h3>New Contact Enquiry Details</h3>
          <p><strong>Name:</strong> ${Contact_Data.Name}</p>
          <p><strong>Email:</strong> ${Contact_Data.Email}</p>
          <p><strong>Phone:</strong> ${Contact_Data.Phone}</p>
          <p><strong>Subject/Area:</strong> ${Contact_Data.Subject}</p>
          <p><strong>Message:</strong></p>
          <p>${(Contact_Data.Message || '').replace(/\n/g, '<br/>')}</p>
        `
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.error("Nodemailer error: ", err);
          resolve({ status: 0, message: err.message });
        } else {
          resolve({ status: 1, message: "Enquiry sent successfully!" });
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}


};

  module.exports=Public_Data;
