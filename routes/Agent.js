var express = require('express');
var router = express.Router();
var Agent=require('../models/Agent');
const upload = require('../helpers/multer-helper');
const crypto = require('crypto');

router.post('/Save_Agent/',function(req,res,next)
  { 
  try 
  {
  Agent.Save_Agent(req.body, function (err, rows) 
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





  router.post('/Save_Subscription_Payment/',function(req,res,next)
  { 
  try 
  {
  Agent.Save_Subscription_Payment(req.body, function (err, rows) 
  {
  if (err) 
  {
   
    console.log(err);
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
  console.log(e);
  }
  finally 
  {
  }
  });


  router.post("/Initiate_Phonepe_Payment/", async function (req, res, next) {
    try {
      
      let Agent_Id = req.body.Agent_Id
      let Subscription_Id = req.body.Subscription_Id
      let Subscription_Name = req.body.Subscription_Name
      let Duration = req.body.Duration
      let Subscription_Amount = req.body.Subscription_Amount
      const uniqueId = Math.random().toString(36).substring(2, 12);
      // test credentials
      const url = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
      const merchantId = "PGTESTPAYUAT86"
      const merchantUserId = "cts"
      const redirectUrl = `http://localhost:4203/#/Agent?merchantTransactionId=${uniqueId}&Agent_Id=${Agent_Id}&Subscription_Id=${Subscription_Id}&Subscription_Name=${Subscription_Name}&Duration=${Duration}&Subscription_Amount=${Subscription_Amount}`
      const saltKey = "96434309-7796-489d-8924-ab56988a6076"
      const saltIndex = "1"

      var payload = {
        "merchantId": merchantId,
        "merchantTransactionId": uniqueId,
        "merchantUserId": merchantUserId,
        "amount": Subscription_Amount * 100,
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



  router.post("/Verify_Payment/", async function (req, res, next) {
    try {
      let merchantTransactionId =  req.body.merchantTransactionId
      
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
              const resp = await Agent.Save_Subscription_Payment(req.body);
              return res.send(resp);
          }
         })
        .catch(err => console.error('error:' + err));
      
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  });


  router.post('/Update_Subscription_Payment/',function(req,res,next)
  { 
  try 
  {
  Agent.Update_Subscription_Payment(req.body, function (err, rows) 
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


  router.post('/Activate_Subscription/',function(req,res,next)
  { 
  try 
  {
  Agent.Activate_Subscription(req.body, function (err, rows) 
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

// router.post('/Save_Agent/',upload.array('myFile'), (req, res, next) =>
//  { 
//  try 
//  {
//   const file = req.files
//   var Photo_ = [];
//   if (!file)
//   {

//   }
//   else
//   {
//     for (var i = 0; i < file.length; i++)
//     {
//       Photo_.push({  File_name: file[i].filename })
//     }
//   }

//   var Logo="";
//   if (Photo_.length>0)
//   {
//     Logo=Photo_[0].File_name;
//   }

//   var Photo_json = JSON.stringify(Photo_)
//   var Agent_ = 
//   {
//     "Agent_Id": req.body.Agent_Id,
//     "Agent_Name": req.body.Agent_Name,
//     "Center_Code": req.body.Center_Code,
//     "Center_Name": req.body.Center_Name,
//     "Comm_Address1": req.body.Comm_Address1,
//     "Address1": req.body.Address1,
//     "Comm_Address2": req.body.Comm_Address2,
//     "Address2": req.body.Address2,
//     "Comm_Address3": req.body.Comm_Address3,
//     "Address3": req.body.Address3,
//     "Comm_Address4": req.body.Comm_Address4,
//     "Address4": req.body.Address4,
//     "Comm_Pincode": req.body.Comm_Pincode,
//     "Comm_Address1": req.body.Comm_Address1,
//     "Approval_Status": req.body.Approval_Status,
//     "Mobile": req.body.Mobile,
//     "Reg_No": req.body.Reg_No,
//     "Email": req.body.Email,
//     "Approval_date": req.body.Approval_date,
//     "Category_Id": req.body.Category_Id,
//     "Agent_Fees": req.body.Agent_Fees,
//     "Commission": req.body.Commission,
//     "Photo": Photo
//   };
//   Agent.Save_Company(Agent_, function(err, rows)
//   {
//     if (err)
//     {
//       return 1;
//     }
//     else
//     {
//       return res.json(rows);
//     }
//   });

// }
//  catch (err) 
//  {
//    const error = new Error('Please upload a file')
//    error.httpStatusCode = 400
//    return next(error)
//  }
//  finally 
//  {

//  }
//   });


router.get('/Search_Agent/',function(req,res,next)
  { 
  try 
  {
  Agent.Search_Agent(req.query.Agent_Name_,req.query.Page_Start_,req.query.Page_End_,req.query.Page_Length_, function (err, rows) 
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

  router.get('/Search_Agent_Skp/',function(req,res,next)
  { 
  try 
  {
  Agent.Search_Agent_Skp(req.query.Agent_Name_,req.query.Page_Start_,req.query.Page_End_,req.query.Page_Length_,req.query.Login_User_, function (err, rows) 
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

  router.get('/Get_Agent/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Get_Agent(req.params.Agent_Id_, function (err, rows) 
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
router.get('/Delete_Agent/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Delete_Agent(req.params.Agent_Id_, function (err, rows) 
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
router.get("/Load_Agent_Dropdowns",async (req, res, next) =>
  {
  try
  {
  const result = await Agent.Load_Agent_Dropdowns();
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




  router.get("/Update_Skp_Status",async (req, res, next) =>
  {
  try
  {
  const result = await Agent.Update_Skp_Status();
  res.json(result);
  } 
  catch (e) 
  {
  console.log(e)
  res.send(e);
  } 
  finally 
  {
  }
  });




router.get('/Load_Category_Commission/:Category_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Load_Category_Commission(req.params.Category_Id_, function (err, rows) 
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
router.get('/Save_Agent_Registration/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Save_Agent_Registration(req.params.Agent_Id_, function (err, rows) 
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
router.get('/Delete_Agent/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Delete_Agent(req.params.Agent_Id_, function (err, rows) 
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
router.get('/Remove_Registration/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Remove_Registration(req.params.Agent_Id_, function (err, rows) 
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
router.get('/Get_Menu_Status/:Menu_Id_?/:Login_User_?',function(req,res,next)
  { 
  try 
  {
  Agent.Get_Menu_Status(req.params.Menu_Id_,req.params.Login_User_, function (err, rows)
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
router.get('/Load_Mode',function(req,res,next)
  { 
  try 
  {
  Agent.Load_Mode( function (err, rows)
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
  router.get('/Load_District',function(req,res,next)
    { 
    try 
    {
    Agent.Load_District( function (err, rows)
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
router.get('/Click_Agent_District/:District_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Click_Agent_District(req.params.District_Id_, function (err, rows) 
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
router.get('/Accounts_Typeahead',function(req,res,next)
  { 
  try 
  {
  Agent.Accounts_Typeahead(req.query.Account_Group_Id_,req.query.Client_Accounts_Name_, function (err, rows)
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
router.post('/Save_Receipt_Voucher/',function(req,res,next)
  { 
  try 
  {
    Agent.Save_Receipt_Voucher(req.body, function (err, rows) 
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
  router.get('/Get_Receipt_History/:Agent_Id_',function(req,res,next)
    { 
    try 
    {
    Agent.Get_Receipt_History(req.params.Agent_Id_, function (err, rows)
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
    router.get('/Delete_Receipt_Voucher/:Receipt_Voucher_Id_',function(req,res,next)
      { 
      try 
      {
      Agent.Delete_Receipt_Voucher(req.params.Receipt_Voucher_Id_, function (err, rows)
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
      router.get('/Search_Course_Status',function(req,res,next)
      { 
      try 
      {
      Agent.Search_Course_Status( function (err, rows)
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
      router.get('/Get_CourseType_Selection_Edit/:Agent_Id_?',function(req,res,next)
      { 
      try 
      {
       Agent.Get_CourseType_Selection_Edit(req.params.Agent_Id_, function (err, rows) 
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
router.post('/Save_Leads/',function(req,res,next)
{ 
try 
{
Agent.Save_Leads(req.body, function (err, rows) 
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
router.post('/Save_Student_Agent', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files
    var Photo_ = [];
    var tempFile_Nmae=''
    if (!file) {

     // const error = new Error('Please upload a file')
      //error.httpStatusCode = 400
    }
    else {
      for (var i = 0; i < file.length; i++) 
      {
        Photo_.push({ File_name: file[i].filename })
        tempFile_Nmae = Photo_[0].File_name;
      }
      
    }
    // var Photo_json = JSON.stringify(Photo_)
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

    };
    Agent.Save_Student_Agent(Student_Data, function (err, rows)
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
  }
);
router.get('/Search_Student_Agent', async function (req, res, next) {
  var result = '';
  try {
    result = await Agent.Search_Student_Agent(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.By_User_,
      req.query.Status_Id_, req.query.Is_Date_Check_,req.query.Page_Index1_, req.query.Page_Index2_, req.query.Login_User_Id_, 
      req.query.RowCount, req.query.RowCount2, req.query.Register_Value);

    res.json(result);
  }
  catch (e) {
    
  }
  finally {
  }
});
router.get('/Search_Leads', async function (req, res, next) {
  var result = '';
  try {
    result = await Agent.Search_Lead(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.Agent_Id,
      req.query.Is_Date_Check_,req.query.Page_Index1_, req.query.Page_Index2_, req.query.Login_User_Id_, 
      req.query.RowCount, req.query.RowCount2);

    res.json(result);
  }
  catch (e) {
    
  }
  finally {
  }
});

router.get('/Search_Agent_Typeahead',function(req,res,next)
{ 
try 
{
Agent.Search_Agent_Typeahead(req.query.Agent_Name, function (err, rows)
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
router.get('/Get_Leads/:Leads_Id_?',function(req,res,next)
{ 
try 
{
Agent.Get_Leads(req.params.Leads_Id_, function (err, rows) 
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
router.get('/Search_Lead_Report', async function (req, res, next) {
  var result = '';
  try {
    result = await Agent.Search_Lead_Report(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,req.query.Agent_Id,
      req.query.Is_Date_Check_, req.query.Login_User_Id_);

    res.json(result);
  }
  catch (e) {
    
  }
  finally {
  }
});
router.get('/Search_Student_Report', async function (req, res, next) {
  var result = '';
  try {
    result = await Agent.Search_Student_Report(req.query.From_Date_,req.query.To_Date_,req.query.SearchbyName_,
      req.query.Status_Id_, req.query.Is_Date_Check_,req.query.Login_User_Id_);
    res.json(result);
  }
  catch (e) {
    
  }
  finally {
  }
});

router.get('/Get_Print_Detials/:Agent_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent.Get_Print_Detials(req.params.Agent_Id_, function (err, rows) 
  {
  if (err) 
  {
    console.log(err);
    
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
    console.log(e);
    
  
  }
  finally 
  {
  }
  });
module.exports = router;

