var express = require('express');
var router = express.Router();
var Job_Posting = require('../models/Job_Posting');
const upload = require('../helpers/multer-helper');
router.post('/Save_Job_Posting', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files
    var Photo_ = [];
    var tempFile_Nmae='';  
    if (!file) 
    {
    }
    else
    {
      for (var i = 0; i < file.length; i++) 
      {
        Photo_.push({ File_name: file[i].filename })
        tempFile_Nmae = Photo_[0].File_name;
      }
    }
    // var Photo_json = JSON.stringify(Photo_)
      var Job_Posting_ =
      {
            "Job_Posting_Id": req.body.Job_Posting_Id,
            "Job_Code": req.body.Job_Code,
            "Job_Title": req.body.Job_Title,
            "Descritpion": req.body.Descritpion,
            "Skills": req.body.Skills,
            "No_Of_Vaccancy": req.body.No_Of_Vaccancy,
            "Experience": req.body.Experience,
            "Experience_Name": req.body.Experience_Name,
            "Job_Location": req.body.Job_Location,
            "Qualification": req.body.Qualification,
            "Qualification_Name": req.body.Qualification_Name,
            "Functional_Area": req.body.Functional_Area,
            "Functional_Area_Name": req.body.Functional_Area_Name,
            "Specialization": req.body.Specialization,
            "Specialization_Name": req.body.Specialization_Name,
            "Salary": req.body.Salary,
            "Last_Date": req.body.Last_Date,
            "Company_Name": req.body.Company_Name,
            "Address": req.body.Address,
            "Contact_Name": req.body.Contact_Name,
            "Contact_No": req.body.Contact_No,
            "Email": req.body.Email,
            "Address1": req.body.Address1,
            "Address2": req.body.Address2,
            "Address3": req.body.Address3,
            "Address4": req.body.Address4,
            "Pincode": req.body.Pincode,
            "Status": req.body.Status,
            "Logo": tempFile_Nmae,
            "User_Id": req.body.User_Id
      };
    Job_Posting.Save_Job_Posting(Job_Posting_, function (err, rows)
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


router.get('/Search_Job_Posting', async function (req, res, next) {
  var result = '';
  try {
    result = await Job_Posting.Search_Job_Posting(req.query.Job_Code_,req.query.Job_Title_,req.query.Job_Location_,
     req.query.Experience_,req.query.Status_,req.query.Page_Start_,req.query.Page_End_,req.query.Page_Length_);
    res.json(result);
  }
  catch (e) {
    
  }
  finally {

  }
});
router.get('/Get_Job_Posting/:Job_Posting_Id_?',function(req,res,next)
  { 
  try 
  {
  Job_Posting.Get_Job_Posting(req.params.Job_Posting_Id_, function (err, rows) 
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
router.get('/Delete_Job_Posting/:Job_Posting_Id_?',function(req,res,next)
  { 
  try 
  {
  Job_Posting.Delete_Job_Posting(req.params.Job_Posting_Id_, function (err, rows) 
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

