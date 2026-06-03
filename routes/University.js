 var express = require('express');
 var router = express.Router();
 var University=require('../models/University');
 router.post('/Save_University/',function(req,res,next)
 { 
 try 
 {
University.Save_University(req.body, function (err, rows) 
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
 router.get('/Search_University/',function(req,res,next)
 { 
 try 
 {
University.Search_University(req.query.University_Name,req.query.Page_Start_,req.query.Page_End_,req.query.Page_Length_, function (err, rows) 
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
 router.get('/Get_University/:University_Id_?',function(req,res,next)
 { 
 try 
 {
University.Get_University(req.params.University_Id_, function (err, rows) 
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
 router.get('/Delete_University/:University_Id_?',function(req,res,next)
 { 
 try 
 {
University.Delete_University(req.params.University_Id_, function (err, rows) 
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
  router.get('/Get_Activity_Selection_Edit/:University_Id_?',function(req,res,next)
      { 
      try 
      {
        University.Get_Activity_Selection_Edit(req.params.University_Id_, function (err, rows) 
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

