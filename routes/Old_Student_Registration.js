var express = require('express');
var router = express.Router();
var Old_Student_Registration=require('../models/Old_Student_Registration');

router.post('/Save_Old_Student_Registration/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Save_Old_Student_Registration(req.body, function (err, rows) 
  {
  if (err) 
  {
  console.log(err);
  res.json(err);
  }
  else 
  {
  console.log(rows);
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
  router.get('/Search_Old_Student_Registration/',function(req,res,next)
  { 
  try 
  {
    Old_Student_Registration.Search_Old_Student_Registration(req.query.Student_Name_Search_,req.query.Registration_No_Search_, function (err, rows) 
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

