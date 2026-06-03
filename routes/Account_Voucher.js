var express = require('express');
var router = express.Router();
var Account_Voucher=require('../models/Account_Voucher');



// router.get('/Get_Location', function(req, res, next) {
//   request({
//     uri: 'http://geolocation-db.com/jsonp',
 
//   }).pipe(res
//     );

// });

router.post('/Save_Old_Student_Registration/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Save_Old_Student_Registration(req.body, function (err, rows) 
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
router.post('/Save_Account_Voucher_Mobile/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Save_Old_Student_Registration_Mobile(req.body, function (err, rows) 
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
router.get('/Search_Account_Voucher/:From_Date_?/:To_Date_?/:From_Account_Id_?/:To_Account_Id_?/:Voucher_No_?/:Is_Date_Check_?/:Employee_Id_?/:Payment_Status_?',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Search_Old_Student_Registration(req.params.From_Date_,req.params.To_Date_,  req.params.From_Account_Id_,
  req.params.To_Account_Id_, req.params.Voucher_No_,req.params.Is_Date_Check_,req.params.Employee_Id_,req.params.Payment_Status_, function (err, rows) 
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
router.get('/Get_Old_Student_Registration/:Old_Student_Registration_Id_?',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Get_Old_Student_Registration(req.params.Old_Student_Registration_Id_, function (err, rows) 
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
  
router.get('/Get_Old_Student_Registration_Mobile/:Old_Student_Registration_Id_?',function(req,res,next)
{ 
try 
{
  Old_Student_Registration.Get_Old_Student_Registration_Mobile(req.params.Old_Student_Registration_Id_, function (err, rows) 
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
router.get('/Delete_Old_Student_Registration/:Old_Student_Registration_Id_?',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Delete_Old_Student_Registration(req.params.Old_Student_Registration_Id_, function (err, rows) 
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
router.get('/Search_Old_Student_Registration_Type/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Search_Old_Student_Registration_Type( function (err, rows) 
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
router.get('/Ledger_Report/:FromDate_?/:ToDate_?/:Client_Id_?/:VoucherType_?',function(req,res,next)
  { 
  try 
  {
  
    Old_Student_Registration.Ledger_Report(req.params.FromDate_,req.params.ToDate_,req.params.Client_Id_,
  req.params.VoucherType_,function (err, rows) 
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
router.get('/DayBook_Report/:FromDate_?/:ToDate_?',function(req,res,next)
  { 
  try 
  {
 
    Old_Student_Registration.DayBook_Report(req.params.FromDate_,req.params.ToDate_,function (err, rows) 
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
  router.get('/Get_Sales_summary/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Client_Id_?/:VoucherType_?/:Employee_Id?',function(req,res,next)
  { 
  try 
  {
  
    Old_Student_Registration.Get_Sales_summary(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Client_Id_,
  req.params.VoucherType_,req.params.Employee_Id,function (err, rows) 
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
  
  router.get('/Search_Sales_Report_Details/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:Employee_Id_?/:Item_Id_?',function(req,res,next)
    { 
    try 
    {
 
      Old_Student_Registration.Search_Sales_Report_Details(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,
    req.params.Employee_Id_,req.params.Item_Id_,function (err, rows) 
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
router.get('/Customer_Sales_Report/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:Item_Id_?',function(req,res,next)
    { 
    try 
    {
    
      Old_Student_Registration.Customer_Sales_Report(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,
    req.params.Item_Id_,function (err, rows) 
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
router.get('/Employee_Sales_Report/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Employee_Id_?/:Item_Id_?',function(req,res,next)
    { 
    try 
    {
   
      Old_Student_Registration.Employee_Sales_Report(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Employee_Id_,
    req.params.Item_Id_,function (err, rows) 
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
  router.get('/Search_Sales_Report/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:Employee_Id_?/:Item_Id_?',function(req,res,next)
    { 
    try 
    {
      Old_Student_Registration.Search_Sales_Report(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,
    req.params.Employee_Id_,req.params.Item_Id_,function (err, rows) 
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
 router.get('/Search_Sales_Report_Monthly_Items/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:Employee_Id_?/:Item_Id_?',function(req,res,next)
    { 
    try 
    {
   
      Old_Student_Registration.Search_Sales_Report_Monthly_Items(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,
    req.params.Employee_Id_,req.params.Item_Id_,function (err, rows) 
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
  router.get('/Get_Sales_Details_report/:Is_Date_Check_ ?/:FromDate_?/:ToDate_?/:Client_Id_?/:VoucherType_?/:Bill_Type_?/:ItemId_?/:GroupId_?/:Barcode_?/:Employee_Id ?/:Store_Id ?',function(req,res,next)
  {
  try 
  {
    Old_Student_Registration.Get_Sales_Details_report(req.params.Is_Date_Check_,req.params.FromDate_,
    req.params.ToDate_,req.params.Client_Id_,
  req.params.VoucherType_,req.params.Bill_Type_,req.params.ItemId_,req.params.GroupId_,
  req.params.Barcode_,req.params.Employee_Id,req.params.Store_Id,function (err, rows) 
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
router.get('/Item_Expiry_Report/:Is_Date_Check_ ?/:FromDate_?/:ToDate_?/:Barcode_ ?/:ItemId_?/:GroupId_?/:Employee_Id ?',function(req,res,next)
  {
  try 
  {
  
    Old_Student_Registration.Item_Expiry_Report(req.params.Is_Date_Check_,req.params.FromDate_,  req.params.ToDate_,
    req.params.Barcode_,req.params.ItemId_,req.params.GroupId_,req.params.Employee_Id,
    function (err, rows) 
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
  router.get('/Get_Stock_Report/:Barcode_ ?/:ItemId_?/:GroupId_?/:Employee_Id ?/:Is_Check_ ?',function(req,res,next)
    {
    try 
    {
      Old_Student_Registration.Get_Stock_Report(req.params.Barcode_,req.params.ItemId_,req.params.GroupId_,req.params.Employee_Id,
      req.params.Is_Check_, function (err, rows) 
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
 router.get('/Client_Accounts_Typeahead/:Client_Accounts_Name_?',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Client_Accounts_Typeahead(req.params.Client_Old_Student_Registration_Name_, function (err, rows) 
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
router.get('/Search_Company/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Search_Company( function (err, rows) 
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
module.exports = router;

