 var express = require('express');
 var router = express.Router();
 var Activity=require('../models/Activity');
 router.post('/Save_Activity/',function(req,res,next)
 { 
 try 
 {
  Activity.Save_Activity(req.body, function (err, rows) 
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
 router.get('/Search_Activity/',function(req,res,next)
 { 
 try 
 {
  Activity.Search_Activity(req.query.Activity_Name_, function (err, rows) 
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
  console.log(e)
 }
 finally 
 {
 }
  });
 router.get('/Get_Activity/:Activity_Id_?',function(req,res,next)
 { 
 try 
 {
  Activity.Get_Activity(req.params.Activity_Id_, function (err, rows) 
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
 router.get('/Delete_Activity/:Activity_Id_?',function(req,res,next)
 { 
 try 
 {
  Activity.Delete_Activity(req.params.Activity_Id_, function (err, rows) 
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
  router.get('/Search_Activity_For_University',function(req,res,next)
      { 
      try 
      {
        Activity.Search_Activity_For_University( function (err, rows)
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

