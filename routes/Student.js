var express = require('express');
var router = express.Router();
var Student = require('../models/Student');
const upload = require('../helpers/multer-helper');
const fetch = require('node-fetch') ;
const crypto = require('crypto');
router.post('/Save_Student', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files;
   
// console.log(file);
// console.log(req.files)

    var Photo_ = [];
    var tempFile_Nmae='';
    var Document_Name_Temp='';
    var File_Name_Temp='';
    var AadhaarImage='';

    var AadhaarbackImage='';
    var SslcImage='';
    var PlustwoImage='';

    if (!file) {

     // const error = new Error('Please upload a file')
      //error.httpStatusCode = 400
    }
    else {

    //  console.log(req.body.ImageFile_Aadhaar);
    //  console.log(req.body.ImageFile_Photo);
    //  console.log(req.body.ImageFile_Aadhaar_Back);

      for (var i = 0; i < req.body.Document_File_Array; i++) 
      {
        if(i==req.body.ImageFile_Photo)
          tempFile_Nmae=file[i].filename
        else if(i==req.body.ImageFile_Aadhaar)
          AadhaarImage=file[i].filename; 

          else if(i==req.body.ImageFile_Aadhaar_Back)
          AadhaarbackImage=file[i].filename; 
          else if(i==req.body.ImageFile_SSLC_Certificate)
          SslcImage=file[i].filename; 
          else if(i==req.body.ImageFile_Plustwo_Certificate)
          PlustwoImage=file[i].filename; 
      }

      console.log(tempFile_Nmae);
      console.log(AadhaarImage);
      console.log(AadhaarbackImage);
      console.log(SslcImage);
      console.log(PlustwoImage);

      // for (var i = 0; i < file.length; i++) 
      // {
      //   Photo_.push({ File_name: file[i].filename })
      //   tempFile_Nmae = Photo_[0].File_name;
      // }
      var Document_Name_Temp='';var File_Name_Temp='';
var index_Temp=0;
      for (var i = req.body.Document_File_Array; i < file.length; i++) 
      {
        index_Temp=i-parseInt( req.body.Document_File_Array);
        
        Document_Name_Temp=req.body['Document_Array' + index_Temp];
        File_Name_Temp=req.body['Document_File_Name' + index_Temp];
        Photo_.push({ File_Name: file[i].filename ,Document_Name:Document_Name_Temp,Document_File_Name:File_Name_Temp})
      }
      
    }
    var Photo_json = JSON.stringify(Photo_)
      var Student1
      console.log(Student1)
    if (req.body.Student_Name != "" && req.body.Student_Name != undefined && req.body.Student_Name!=null)
    {
       Student1 =
      {
        "Student_Id": req.body.Student_Id_Student,
        "Student_Name":req.body.Student_Name,
        "Address1":req.body.Address1,
        "Address2":req.body.Address2,
        "Address3":req.body.Address3,
        "Address4": req.body.Address4,
        "Pincode":req.body.Pincode,
        "Phone":req.body.Phone,
        "Mobile": req.body.Mobile,
        "Whatsapp":req.body.Whatsapp,
        "DOB": req.body.DOB,
        "Gender": req.body.Gender,
        "Email": req.body.Email,
        "Alternative_Email":req.body.Alternative_Email,
        "Passport_No": req.body.Passport_No,
        "Passport_Expiry": req.body.Passport_Expiry,
        "User_Name": req.body.User_Name,
        "Password": req.body.Password,
        "Photo": tempFile_Nmae,
        "User_Id": req.body.User_Id,
        "Registration_No": req.body.Registration_No,
        "Role_No": req.body.Role_No,
        "Aadhaar": AadhaarImage,
        "Agent_Id_Student": req.body.Agent_Id_Student,
        "Agent_Name_Student": req.body.Agent_Name_Student,
        "SKP_Status_Id": req.body.SKP_Status_Id,
        "SKP_Status_Name": req.body.SKP_Status_Name,
        "Aadhaar_Back": AadhaarbackImage,
        "SSLC_Certificate":SslcImage,
        "Plustwo_Certificate": PlustwoImage
        
      };
     
    }
    var jsondata1 = JSON.stringify(Student1)
    var Followup ;
    if (req.body.Status != "" && req.body.Status != undefined && req.body.Status != null) {
    var Followup=
    {
      "Student_Id": req.body.Student_Id,
      "Entry_Date": req.body.Entry_Date,
      "Next_FollowUp_Date": req.body.Next_FollowUp_Date,
      "FollowUp_Difference": req.body.FollowUp_Difference,
      "Status": req.body.Status,
      "By_User_Id": req.body.By_User_Id,
      "To_User_Id": req.body.To_User_Id,
      "Remark": req.body.Remark,
      "Remark_Id": req.body.Remark_Id,
      "FollowUp_Type": req.body.FollowUp_Type,
      "FollowUP_Time": req.body.FollowUP_Time,
      "Actual_FollowUp_Date": req.body.Actual_FollowUp_Date,
      // "Agent_Id":  req.body.Agent_Id,
      // "Agent_Name":  req.body.Agent_Name,
      "Agent_Address1":  req.body.Agent_Address1,
      "Center_Name":  req.body.Center_Name,
      "Center_Code":  req.body.Center_Code,
      // "Agent_District_Id":  req.body.Agent_District_Id,
      "FollowUp":  req.body.FollowUp,

      "Status_Name":  req.body.Status_Name,
      "By_User_Name":  req.body.By_User_Name,
      "To_User_Name":  req.body.To_User_Name


    }
   }
    var jsondata2 = JSON.stringify(Followup)

    var Student_Data=
    {
      "Student": jsondata1,
      "Followup": jsondata2,
      "student_document":Photo_json

    };
    Student.Save_Student(Student_Data, function (err, rows)
        {

        if (err) 
        {
          console.log(err)
          return 1;
         
        }
        else
        {
          console.log(rows)
          return res.json(rows);

        }
      });
    
  }

  catch (err) 
  {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    console.log(err)
    return next(error)
  }
    finally 
    {
    }
  }
);













router.post('/Save_Student_SKP', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files;
   
    var Photo_ = [];
    var tempFile_Nmae='';
    var Document_Name_Temp='';
    var File_Name_Temp='';
    var AadhaarImage='';

    var AadhaarbackImage='';
    var SslcImage='';
    var PlustwoImage='';

    if (!file) {

     // const error = new Error('Please upload a file')
      //error.httpStatusCode = 400
    }
    else {
      for (var i = 0; i < req.body.Document_File_Array; i++) 
      {
        if(i==req.body.ImageFile_Photo)
          tempFile_Nmae=file[i].filename
        else if(i==req.body.ImageFile_Aadhaar)
          AadhaarImage=file[i].filename; 

          else if(i==req.body.ImageFile_Aadhaar_Back)
          AadhaarbackImage=file[i].filename; 
          else if(i==req.body.ImageFile_SSLC_Certificate)
          SslcImage=file[i].filename; 
          else if(i==req.body.ImageFile_Plustwo_Certificate)
          PlustwoImage=file[i].filename; 
      }

      // console.log(tempFile_Nmae);
      // console.log(AadhaarImage);
      // console.log(AadhaarbackImage);
      // console.log(SslcImage);
      // console.log(PlustwoImage);

      // for (var i = 0; i < file.length; i++) 
      // {
      //   Photo_.push({ File_name: file[i].filename })
      //   tempFile_Nmae = Photo_[0].File_name;
      // }
      var Document_Name_Temp='';var File_Name_Temp='';
var index_Temp=0;
      for (var i = req.body.Document_File_Array; i < file.length; i++) 
      {
        index_Temp=i-parseInt( req.body.Document_File_Array);
        
        Document_Name_Temp=req.body['Document_Array' + index_Temp];
        File_Name_Temp=req.body['Document_File_Name' + index_Temp];
        Photo_.push({ File_Name: file[i].filename ,Document_Name:Document_Name_Temp,Document_File_Name:File_Name_Temp})
      }
      
    }
    var Photo_json = JSON.stringify(Photo_)
      var Student1
      console.log(Student1)
    if (req.body.Student_Name != "" && req.body.Student_Name != undefined && req.body.Student_Name!=null)
    {
       Student1 =
      {
        "Student_Id": req.body.Student_Id_Student,
        "Student_Name":req.body.Student_Name,
        "Address1":req.body.Address1,
        "Address2":req.body.Address2,
        "Address3":req.body.Address3,
        "Address4": req.body.Address4,
        "Pincode":req.body.Pincode,
        "Phone":req.body.Phone,
        "Mobile": req.body.Mobile,
        "Whatsapp":req.body.Whatsapp,
        "DOB": req.body.DOB,
        "Gender": req.body.Gender,
        "Email": req.body.Email,
        "Alternative_Email":req.body.Alternative_Email,
        "Passport_No": req.body.Passport_No,
        "Passport_Expiry": req.body.Passport_Expiry,
        "User_Name": req.body.User_Name,
        "Password": req.body.Password,
        "Photo": tempFile_Nmae,
        "User_Id": req.body.User_Id,
        "Registration_No": req.body.Registration_No,
        "Role_No": req.body.Role_No,
        "Aadhaar": AadhaarImage,
        "Agent_Id_Student": req.body.Agent_Id_Student,
        "Agent_Name_Student": req.body.Agent_Name_Student,
        "SKP_Status_Id": req.body.SKP_Status_Id,
        "SKP_Status_Name": req.body.SKP_Status_Name,
        "Aadhaar_Back": AadhaarbackImage,
        "SSLC_Certificate":SslcImage,
        "Plustwo_Certificate": PlustwoImage
        // "Registration_Fees": req.body.Registration_Fees
        
      };
     
    }
    var jsondata1 = JSON.stringify(Student1)
    var Followup ;
    if (req.body.Status != "" && req.body.Status != undefined && req.body.Status != null) {
    var Followup=
    {
      "Student_Id": req.body.Student_Id,
      "Entry_Date": req.body.Entry_Date,
      "Next_FollowUp_Date": req.body.Next_FollowUp_Date,
      "FollowUp_Difference": req.body.FollowUp_Difference,
      "Status": req.body.Status,
      "By_User_Id": req.body.By_User_Id,
      "To_User_Id": req.body.To_User_Id,
      "Remark": req.body.Remark,
      "Remark_Id": req.body.Remark_Id,
      "FollowUp_Type": req.body.FollowUp_Type,
      "FollowUP_Time": req.body.FollowUP_Time,
      "Actual_FollowUp_Date": req.body.Actual_FollowUp_Date,
      // "Agent_Id":  req.body.Agent_Id,
      // "Agent_Name":  req.body.Agent_Name,
      "Agent_Address1":  req.body.Agent_Address1,
      "Center_Name":  req.body.Center_Name,
      "Center_Code":  req.body.Center_Code,
      // "Agent_District_Id":  req.body.Agent_District_Id,
      "FollowUp":  req.body.FollowUp,

      "Status_Name":  req.body.Status_Name,
      "By_User_Name":  req.body.By_User_Name,
      "To_User_Name":  req.body.To_User_Name


    }
   }
    var jsondata2 = JSON.stringify(Followup)

    var Student_Data=
    {
      "Student": jsondata1,
      "Followup": jsondata2,
      "student_document":Photo_json

    };
    Student.Save_Student_SKP(Student_Data, function (err, rows)
        {

        if (err) 
        {
          console.log(err)
          return 1;
         
        }
        else
        {
          console.log(rows)
          return res.json(rows);

        }
      });
    
  }

  catch (err) 
  {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    console.log(err)
    return next(error)
  }
    finally 
    {
    }
  }
);



















router.post('/Save_Student_Agent', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files;
   
    var Photo_ = [];
    var tempFile_Nmae='';
    var Document_Name_Temp='';
    var File_Name_Temp='';
    var AadhaarImage='';
    if (!file) {

     // const error = new Error('Please upload a file')
      //error.httpStatusCode = 400
    }
    else {
      for (var i = 0; i < req.body.Document_File_Array; i++) 
      {
        if(i==req.body.ImageFile_Photo)
          tempFile_Nmae=file[i].filename
        else if(i==req.body.ImageFile_Aadhaar)
          AadhaarImage=file[i].filename; 
      }
      // for (var i = 0; i < file.length; i++) 
      // {
      //   Photo_.push({ File_name: file[i].filename })
      //   tempFile_Nmae = Photo_[0].File_name;
      // }
      var Document_Name_Temp='';var File_Name_Temp='';
var index_Temp=0;
      for (var i = req.body.Document_File_Array; i < file.length; i++) 
      {
        index_Temp=i-parseInt( req.body.Document_File_Array);
        
        Document_Name_Temp=req.body['Document_Array' + index_Temp];
        File_Name_Temp=req.body['Document_File_Name' + index_Temp];
        Photo_.push({ File_Name: file[i].filename ,Document_Name:Document_Name_Temp,Document_File_Name:File_Name_Temp})
      }
      
    }
    var Photo_json = JSON.stringify(Photo_)
      var Student1
    if (req.body.Student_Name != "" && req.body.Student_Name != undefined && req.body.Student_Name!=null)
    {
       Student1 =
      {
        "Student_Id": req.body.Student_Id_Student,
        "Student_Name":req.body.Student_Name,
        "Address1":req.body.Address1,
        "Address2":req.body.Address2,
        "Address3":req.body.Address3,
        "Address4": req.body.Address4,
        "Pincode":req.body.Pincode,
        "Phone":req.body.Phone,
        "Mobile": req.body.Mobile,
        "Whatsapp":req.body.Whatsapp,
        "DOB": req.body.DOB,
        "Gender": req.body.Gender,
        "Email": req.body.Email,
        "Alternative_Email":req.body.Alternative_Email,
        "Passport_No": req.body.Passport_No,
        "Passport_Expiry": req.body.Passport_Expiry,
        "User_Name": req.body.User_Name,
        "Password": req.body.Password,
        "Photo": tempFile_Nmae,
        "User_Id": req.body.User_Id,
        "Registration_No": req.body.Registration_No,
        "Role_No": req.body.Role_No,
        "Aadhaar": AadhaarImage,
      };
     
    }
    var jsondata1 = JSON.stringify(Student1)
    var Followup ;
    if (req.body.Status != "" && req.body.Status != undefined && req.body.Status != null) {
    var Followup=
    {
      "Student_Id": req.body.Student_Id,
      "Entry_Date": req.body.Entry_Date,
      "Next_FollowUp_Date": req.body.Next_FollowUp_Date,
      "FollowUp_Difference": req.body.FollowUp_Difference,
      "Status": req.body.Status,
      "By_User_Id": req.body.By_User_Id,
      "To_User_Id": req.body.To_User_Id,
      "Remark": req.body.Remark,
      "Remark_Id": req.body.Remark_Id,
      "FollowUp_Type": req.body.FollowUp_Type,
      "FollowUP_Time": req.body.FollowUP_Time,
      "Actual_FollowUp_Date": req.body.Actual_FollowUp_Date,
    }
   }
    var jsondata2 = JSON.stringify(Followup)

    var Student_Data=
    {
      "Student": jsondata1,
      "Followup": jsondata2,
      "student_document":Photo_json

    };
    Student.Save_Student_Agent(Student_Data, function (err, rows)
        {

        if (err) 
        {
          console.log(err)
          return 1;
         
        }
        else
        {
          console.log(rows)
          return res.json(rows);

        }
      });
    
  }

  catch (err) 
  {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    console.log(err)
    return next(error)
  }
    finally 
    {
    }
  }
);
// router.get('/Search_Student/',function(req,res,next)
//   { 
//   try 
//   {
//   Student.Search_Student(req.query.Student_Name, function (err, rows) 
//   {
//   if (err) 
//   {
//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {
//   }
//   finally 
//   {
//   }
//   });

router.get('/Search_Student', async function (req, res, next) {
  var result = '';
  try {
    result = await Student.Search_Student(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.By_User_,
      req.query.Status_Id_, req.query.Is_Date_Check_,req.query.Page_Index1_, req.query.Page_Index2_, req.query.Login_User_Id_, 
      req.query.RowCount, req.query.RowCount2, req.query.Register_Value,req.query.Agent_Name_);

    res.json(result);
  }
  catch (e) {
    

  }
  finally {

  }
});


router.get('/Search_Student_SKP', async function (req, res, next) {
  var result = '';
  try {
    result = await Student.Search_Student_SKP(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.By_User_,
      req.query.Status_Id_, req.query.Is_Date_Check_,req.query.Page_Index1_, req.query.Page_Index2_, req.query.Login_User_Id_, 
      req.query.RowCount, req.query.RowCount2, req.query.Register_Value,req.query.Agent_Name_);

    res.json(result);
  }
  catch (e) {
    

  }
  finally {

  }
});

router.get('/Get_Student/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
  Student.Get_Student(req.params.Student_Id_, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
  router.get('/Get_Last_FollowUp/:Users_Id_?',function(req,res,next)
    { 
    try 
    {
    Student.Get_Last_FollowUp(req.params.Users_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
router.get('/Delete_Student/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
  Student.Delete_Student(req.params.Student_Id_, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
router.get('/Search_Status_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Student.Search_Status_Typeahead(req.query.Status_Name, req.query.Group_Id, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
router.get('/Search_Users_Typeahead/',function(req,res,next)
  { 
  try 
  {
  Student.Search_Users_Typeahead(req.query.Users_Name, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
router.get('/Load_Gender/',function(req,res,next)
  { 
  try 
  {
    Student.Load_Gender( function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
router.get('/Load_Student_Search_Dropdowns/:Group_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Load_Student_Search_Dropdowns(req.params.Group_Id_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });  
router.get("/Get_FollowUp_Details/:Student_Id_?",async (req, res, next) =>{
    try
    {
    const result = await Student.Get_FollowUp_Details(req.params.Student_Id_);
    res.json(result);
    }
    catch (e)
    {
    res.send(e);
    } 
    finally 
    {
    }
    });
router.get("/Get_FollowUp_History/:Student_Id_?",async (req, res, next) =>{
    try
    {
    const result = await Student.Get_FollowUp_History(req.params.Student_Id_);
    res.json(result);
    }
    catch (e)
    {
    res.send(e);
    } 
    finally 
    {
    }
    });
router.get('/Register_Student/:Student_Id_?/:User_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Register_Student(req.params.Student_Id_, req.params.User_Id_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });  
  
  router.get('/Send_Register_Email/:Email_?',async (req, res, next) =>
  {
  try
  {
  const result = await Student.Send_Register_Email(req.params.Email_);
  res.json(result);
  } 
  catch (e) 
  {
  res.send(e);
  } 
  finally
  {
  }
  });
  
  // router.get('/Send_Receipt_Email/:Email_?',async (req, res, next) =>
  // {
  // try
  // {
  // const result = await Student.Send_Receipt_Email(req.params.Email_);
  // res.json(result);
  // } 
  // catch (e) 
  // {
  // res.send(e);
  // } 
  // finally
  // {
  // }
  // });


 
  router.post('/Send_Receipt_Email/',async function(req,res,next)
  { 
  try 
  {
  
  const resp=await Student.Send_Receipt_Email(req.body);
  return res.send(resp);
  }
  catch(e){
    console.log(e)
   
  return res.send(e);
  }
  });





  router.get('/Send_Course_Email/:Email_?',async (req, res, next) =>
  {
  try
  {
  const result = await Student.Send_Course_Email(req.params.Email_);
  res.json(result);
  } 
  catch (e) 
  {
  res.send(e);
  } 
  finally
  {
  }
  });
router.get('/Remove_Registration/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Remove_Registration(req.params.Student_Id_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });   
router.get('/Search_Course_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Student.Search_Course_Typeahead(req.query.Course_Name, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
  router.get('/Search_Course_Typeahead_University/',function(req,res,next)
    { 
    try 
    {
      Student.Search_Course_Typeahead_University(req.query.Course_Name, req.query.University_Id,req.query.Duration_Name_, function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    
    }
    else 
    {
    res.json(rows);
   
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
router.get('/Get_Course_Student/:Course_Id?/:University_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Get_Course_Student(req.params.Course_Id,req.params.University_Id_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });   
router.get('/Get_Student_Course/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Get_Student_Course(req.params.Student_Id_, function (err, rows)
  {
  if (err) 
  {

  res.json(err);
  console.log(err)
  }
  else 
  {
  res.json(rows);
  console.log(rows)
  }
  });
  }
  catch (e) 
  {
    console.log(e)
  }
  finally 
  {
  }
  });    
router.post('/Save_Student_Course/',async function(req,res,next)
  { 
  try 
  {
    const resp = await Student.Save_Student_Course(req.body);
      return res.send(resp);     
  }
  catch(e){
    //console.log(e)
   return res.send(e);
  }
  });    
  router.post('/Update_Certificate_Date/',async function(req,res,next)
    { 
    try 
    {
      const resp = await Student.Update_Certificate_Date(req.body);
        return res.send(resp);     
    }
    catch(e){
     return res.send(e);
    }
    });
router.get('/Search_Subject_Course_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Student.Search_Subject_Course_Typeahead(req.query.Subject_Name, req.query.Course_Id, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });     
  router.get('/Load_Exam_Status/',function(req,res,next)
    { 
    try 
    {
      Student.Load_Exam_Status( function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });     
router.post('/Save_Mark_List_Master/',async function(req,res,next)
  { 
   
  try 
  {
    console.log(req)
    const resp = await Student.Save_Mark_List_Master(req.body);
    return res.send(resp);     
  }
  catch(e){  
    console.log(e)
  return res.send(e);
  }
});   
router.get('/Get_Student_Mark_List/:Student_Id_?/:Part_Id_ ?',function(req,res,next)
  { 
  try 
  {
    Student.Get_Student_Mark_List(req.params.Student_Id_,req.params.Part_Id_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });    
router.post('/Save_Student_Receipt_Voucher/',function(req,res,next)
  { 
  try 
  {
    Student.Save_Student_Receipt_Voucher(req.body, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
router.get('/Get_Student_Receipt_History/:Student_Id_',function(req,res,next)
    { 
    try 
    {
      Student.Get_Student_Receipt_History(req.params.Student_Id_, function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
    router.get('/Delete_Student_Receipt_Voucher/:Receipt_Voucher_Id_',function(req,res,next)
      { 
      try 
      {
        Student.Delete_Student_Receipt_Voucher(req.params.Receipt_Voucher_Id_, function (err, rows)
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });   

      router.get('/Get_Student_Details/:Student_Id_?',function(req,res,next)
      { 
      try 
      {
        Student.Get_Student_Details(req.params.Student_Id_, function (err, rows)
      {
      if (err) 
      {
      res.json(err);
      
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      }); 
      
      

      
      
      
      router.get('/Get_Student_Course_Apply/:Student_Id_?',function(req,res,next)
      { 
      try 
      {
        Student.Get_Student_Course_Apply(req.params.Student_Id_, function (err, rows) 
      {
      if (err) 
      {
      
      res.json(err);
      }
      else 
      {
      
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      
      }
      finally 
      {
      }
      });
      
 router.get('/Get_Mark_Details/:Part_Id_?/:Student_Id_?',function(req,res,next)
      { 
      try 
      {
        Student.Get_Mark_Details(req.params.Part_Id_,req.params.Student_Id_, function (err, rows)
      {
      if (err) 
      {
      res.json(err);
      
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      }); 
       router.get('/Get_Mark_Details_Student/:Part_Id_?/:Student_Id_?',function(req,res,next)
      { 
      try 
      {
        Student.Get_Mark_Details_Student(req.params.Part_Id_,req.params.Student_Id_, function (err, rows)
      {
      if (err) 
      {
      res.json(err);
      
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      }); 
 router.get('/Get_Fees_Details/:Student_Id_?/:Client_Account_Id_?',function(req,res,next)
      { 
      try 
      {
        Student.Get_Fees_Details(req.params.Student_Id_,req.params.Client_Account_Id_, function (err, rows)
      {
      if (err) 
      {
      res.json(err);
      
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      }); 
router.post('/Save_Student_front', upload.array('myFile'), (req, res, next) =>
{
  try
  {
  const file = req.files
  var Photo_ = [];
  var ImageFile;
  var ImageFile_Photo;
  var ImageFile_Aadhaar;
  if (!file) {

  // const error = new Error('Please upload a file')
  //error.httpStatusCode = 400
  }
  else {
  // for (var i = 0; i < file.length; i++) 
  // {
  //   Photo_.push({ File_name: file[i].filename })
  //   ImageFile = Photo_[0].File_name;
  // }
  for (var i = 0; i < req.body.Document_File_Array; i++) 
  {
  if(i==req.body.photo)
  ImageFile_Photo=file[i].filename
  else if(i==req.body.Aadhaar)
  ImageFile_Aadhaar=file[i].filename;
  }


  var Document_Name_Temp='';var File_Name_Temp='';
  var index_Temp=0;
  for (var i = req.body.Document_File_Array; i < file.length; i++) 
  {
  index_Temp=i-parseInt( req.body.Document_File_Array);

  Document_Name_Temp=req.body['Document_Array' + index_Temp];
  File_Name_Temp=req.body['Document_File_Name' + index_Temp];
  Photo_.push({ File_Name: file[i].filename ,Document_Name:Document_Name_Temp,Document_File_Name:File_Name_Temp})
  }
  }
  // if(Photo_.length==0)
  //   Photo_.push({'a':'a'})
  //  JSON.stringify(Photo_)

  var Photo_json = JSON.stringify(Photo_)
  var Student_1;
  // if (req.body.Student_Name != "" && req.body.Student_Name != undefined && req.body.Student_Name!=null)
  // {
  Student_1 =
  {

  "Student_Id": req.body.Student_Id,
  "Student_Name":req.body.Student_Name,
  "Address1":req.body.Address1,
  "Address2":req.body.Address2,
  "Address3":req.body.Address3,
  "Address4": req.body.Address4,
  "Pincode":req.body.Pincode,
  "Phone":req.body.Phone,
  "Mobile": req.body.Mobile,
  "Whatsapp":req.body.Whatsapp,
  "DOB": req.body.DOB,
  "Gender": req.body.Gender,
  "Email": req.body.Email,
  "Alternative_Email":req.body.Alternative_Email,
  "Passport_No": req.body.Passport_No,
  "Passport_Expiry": req.body.Passport_Expiry,
  "User_Name": req.body.User_Name,
  "Password": req.body.Password,
  "Photo": ImageFile_Photo,
  "Aadhaar": ImageFile_Aadhaar,
  "User_Id": req.body.User_Id,
  "Registration_No": req.body.Registration_No,
  "Role_No": req.body.Role_No,
  "Course_Name": req.body.Course_Name,
  };
  var jsondata1 = JSON.stringify(Student_1)

  var Student_Data=
  {
  "Student": jsondata1,
  "student_document":Photo_json

  };
  Student.Save_Student_front(Student_Data, function (err, rows)
  {
  if (err) 
  {
  return 1;
  }
  else
  {
  return res.json(rows);
  }
  });          
  }
  catch (err) 
  {
  
  // const error = new Error('Please upload a file')
  // error.httpStatusCode = 400
  // return next(error)
  }
  finally 
  {
  }
});
router.get('/Start_Exam/:Subject_Id_?/:Part_Id_?/:Subject_Name_?/:Course_Id_?/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Start_Exam(req.params.Subject_Id_,req.params.Part_Id_,req.params.Subject_Name_,req.params.Course_Id_,req.params.Student_Id_, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  
  }
  finally 
  {
  }
  });
router.post('/Submit_Exam/',function(req,res,next)
    { 
    try 
    {
      Student.Submit_Exam(req.body, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
      
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Get_Activities_Details_History/:Student_Id_',function(req,res,next)
    { 
    try 
    {
      Student.Get_Activities_Details_History(req.params.Student_Id_, function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });

    router.get('/Search_Activity_Report', async function (req, res, next) {
      var result = '';
      try {
        result = await Student.Search_Activity_Report(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.Agent_Id,
          req.query.Is_Date_Check_, req.query.Login_User_Id_);
    
        res.json(result);
      }
      catch (e) {
        
      }
      finally {
      }
    });



    router.get('/Search_Student_Payment', async function (req, res, next) {
      var result = '';
      try {
        result = await Student.Search_Student_Payment(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,
          req.query.Is_Date_Check_, req.query.Login_User_Id_);
    
        res.json(result);
      }
      catch (e) {
        
      }
      finally {
      }
    });


    router.get('/Search_Student_Payamount', async function (req, res, next) {
      var result = '';
      try {
        result = await Student.Search_Student_Payamount(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,
          req.query.Is_Date_Check_, req.query.Login_User_Id_);
    
        res.json(result);
      }
      catch (e) {
        
      }
      finally {
      }
    });



    router.get('/Load_Activity_Dropdowns/:University_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Load_Activity_Dropdowns(req.params.University_Id_, function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    console.log(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
    router.post('/Save_Activity_Details/',function(req,res,next)
  { 
  try 
  {
    Student.Save_Activity_Details(req.body, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  });
  router.get('/Get_Activity_Details/:Student_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Get_Activity_Details(req.params.Student_Id_, function (err, rows) 
  {
   if (err) 
   {
     console.log(err)
   res.json(err);
   }
   else 
   {
     res.json(rows);
   }
   });
   }
  catch (e) 
  {
    console.log(e)
  }
  finally 
  {
  }
   });
   router.get('/Get_University_Activity/:University_Id_?',function(req,res,next)
   { 
   try 
   {
     Student.Get_University_Activity(req.params.University_Id_, function (err, rows) 
   {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
      res.json(rows);
    }
    });
    }
   catch (e) 
   {
   }
   finally 
   {
   }
    });
   router.get('/Load_Part/',function(req,res,next)
   { 
   try 
   {
     Student.Load_Part( function (err, rows)
   {
   if (err) 
   {
   res.json(err);
   }
   else 
   {
   res.json(rows);
   }
   });
   }
   catch (e) 
   {
   }
   finally 
   {
   }
   }); 
   router.get('/Search_Part_Subject_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Student.Search_Part_Subject_Typeahead(req.query.Student_Id_,req.query.Course_Id_,req.query.Part_Id_, req.query.Subject_Name_, function (err, rows)
  {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
  }
  catch (e) 
  {
  }
  finally 
  {
  }
  }); 
  router.get('/Load_Month_Status/',function(req,res,next)
    { 
    try 
    {
      Student.Load_Month_Status(function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });  
    router.get('/Load_Month_Status_for_Part/:University_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Load_Month_Status_for_Part(req.params.University_Id_, function (err, rows)
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });  
    router.get('/Delete_Student_Mark_Details/:Mark_List_Master_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Delete_Student_Mark_Details(req.params.Mark_List_Master_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {
     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
router.get('/Load_Student_Part/:Student_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Load_Student_Part(req.params.Student_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      console.log(e)
    }
    finally 
    {
    }
    });
    router.get('/Get_University_Changes/:University_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Get_University_Changes(req.params.University_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
      
    router.get('/Get_Course_Part_Mark/:Student_Id_ ?/:Course_Id_?/:Part_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Get_Course_Part_Mark(req.params.Student_Id_,req.params.Course_Id_,req.params.Part_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      console.log(e)
    }
    finally 
    {
    }
    });
router.get("/Get_Company",async (req, res, next) =>
{
try
{
 //  console.log(result);
const result = await Student.Get_Company();
res.json(result);
} 
catch (e) 
{

res.send(e);


} 
finally 
{
}
});
router.post('/Save_Company/',upload.array('myFile'), (req, res, next) =>
{ 
try 
{
 const file = req.files
 
 var Photo_ = [];
 if (!file)
 {

 }
 else
 {
   for (var i = 0; i < file.length; i++)
   {
     Photo_.push({  File_name: file[i].filename })
   }
 }

 var Logo="";
 if (Photo_.length>0)
 {
   Logo=Photo_[0].File_name;
 }

 var Photo_json = JSON.stringify(Photo_)
 var Company_ = 
 {
   "Company_Id": req.body.Company_Id,
   "companyname": req.body.companyname,
   "Phone1": req.body.Phone1,
   "Phone2": req.body.Phone2,
   "Mobile": req.body.Mobile,
   "Email": req.body.Email,
   "Website": req.body.Website,
   "Address1": req.body.Address1,
   "Address2": req.body.Address2,
   "Address3": req.body.Address3,
   "Logo": Logo
 };
 //console.log(Company_)
 Student.Save_Company(Company_, function(err, rows)
 {
   if (err)
   {
     return 1;
   }
   else
   {
     return res.json(rows);
   }
 });

}
catch (err) 
{
 
  const error = new Error('Please upload a file')
  error.httpStatusCode = 400
  return next(error)
}
finally 
{
  
}
 });
 router.get('/Get_Year_Changes/:Course_Id_?/:Year_?/:Fees_Type_Id_?',function(req,res,next)
 { 
 try 
 {
   Student.Get_Year_Changes(req.params.Course_Id_,req.params.Year_,req.params.Fees_Type_Id_,function (err, rows) 
 {
 if (err) 
 {
 res.json(err);
 
 }
 else 
 { 
    res.json(rows);
    
 }
 });
 }
 catch (e) 
 {
 }
 finally 
 {
 }
 });
 router.get('/Get_Grade/:Student_Id_?',function(req,res,next)
    { 
    try 
    {
      Student.Get_Grade(req.params.Student_Id_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
    router.get('/Delete_Student_File/:Student_Id_?/:File_Name_?',function(req,res,next)
    { 
    try 
    {
      
    Student.Delete_Student_File(req.params.Student_Id_,req.params.File_Name_, function (err, rows) 
    {
    if (err) 
    {
      console.log(err)
    res.json(err);
    }
    else 
    {
      console.log(rows)
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });
  
    router.get('/Load_User_Agent_Details/:User_Agent_ ?',function(req,res,next)
    { 
    try 
    {
      Student.Load_User_Agent_Details(req.params.User_Agent_, function (err, rows) 
    {
    if (err) 
    {
    res.json(err);
    }
    else 
    {     
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
    }
    finally 
    {
    }
    });


    // router.post('/Verify_Student_Payment/',function(req,res,next)
    // { 
    // try 
    // {
    //   Student.Verify_Student_Payment(req.body, function (err, rows) 
    // {
    // if (err) 
    // {
     
    // res.json(err);
    
    // }
    // else 
    // {
      
    // res.json(rows);
    
    // }
    // });
    // }
    // catch (e) 
    // {
    
    // }
    // finally 
    // {
    // }
    // });

    router.post("/Initiate_Phonepe_Payment/", async function (req, res, next) {
      try {
        
        let studentIds = req.body.studentIds;
        let amount = req.body.amount;
        const uniqueId = Math.random().toString(36).substring(2, 12);
        // test credentials
        const url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
        const merchantId = "PGTESTPAYUAT86"
        const merchantUserId = "cts"
        const redirectUrl = `http://localhost:4203/#/Student_Payment?merchantTransactionId=${uniqueId}&studentIds=${studentIds}`
        const saltKey = "96434309-7796-489d-8924-ab56988a6076"
        const saltIndex = "1"

        var payload = {
          "merchantId": merchantId,
          "merchantTransactionId": uniqueId,
          "merchantUserId": merchantUserId,
          "amount": amount * 100,
          "redirectUrl": redirectUrl,
          "redirectMode": "REDIRECT",
          "paymentInstrument": {
            "type": "PAY_PAGE"
          }
        }
        // X-VERIFY = SHA256(base64 encoded payload + “/pg/v1/pay” + salt key) + ### + salt index
        const bufferObj = Buffer.from(JSON.stringify(payload), "utf8")
        const  base64EncodedPayload = bufferObj.toString("base64")
        const X_VERIFY = crypto.createHash('sha256').update(base64EncodedPayload+ "/pg/v1/pay" + `${saltKey}`).digest('hex') + "###"+ saltIndex
      
        const options = {
          method: 'post',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY':X_VERIFY
          },
          body: JSON.stringify({
            request:base64EncodedPayload
          })
          
        };

        fetch(url, options)
        .then(res1 => res1.json())
        .then(json => {
          res.send({
            "url":json.data.instrumentResponse.redirectInfo.url
              })
          })
            
          
          // .then(json => console.log(json))
          .catch(err => {
            console.error('error:' + err)
            return res.send(err)
          }
            );

        
      } catch (e) {
        console.log("e",e);
        return res.send(e);
      }
    });



    router.post("/Verify_Student_Payment/", async function (req, res, next) {
      try {
        let merchantTransactionId =  req.body.merchantTransactionId
        console.log('merchantTransactionId: ', merchantTransactionId);
        //test credentials
        const merchantId = "PGTESTPAYUAT86"
        const saltKey = "96434309-7796-489d-8924-ab56988a6076"
        const saltIndex = `1`
        const url = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/PGTESTPAYUAT86/${merchantTransactionId}`;

        const x_verify = crypto.createHash('sha256').update(`/pg/v1/status/${merchantId}/${merchantTransactionId}`+`${saltKey}`).digest('hex')+`###`+saltIndex
        const options = {
          method: 'get',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-MERCHANT-ID':merchantTransactionId,
            'X-VERIFY':x_verify
          },

        };

        fetch(url, options)
          .then(res1 => res1.json())
          .then(async(json) =>{
            console.log(json)
            if(json.code == "PAYMENT_SUCCESS"){
              console.log("req.body",req.body);
              const resp = await Student.Verify_Student_Payment(req.body);
              return res.send(resp);
            }
           })
          .catch(err => console.error('error:' + err));
        
      } catch (e) {
        console.log(e);
        return res.send(e);
      }
    });
  
    router.post("/Pay_Student_Payment/", async function (req, res, next) {
      try {
        const resp = await Student.Pay_Student_Payment(req.body);
        return res.send(resp);
      } catch (e) {
        console.log(e);
        return res.send(e);
      }
    });

    
  



module.exports = router;

