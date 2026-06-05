 var express = require('express');
 var router = express.Router();
 var Exam_Master=require('../models/Exam_Master');
 var Exam_Details=require('../models/Exam_Details');

 router.post('/Save_Exam_Master/',function(req,res,next)
 { 
 try 
 {
  Exam_Master.Save_Exam_Master(req.body, function (err, rows) 
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

 router.get('/Search_Exam_Master/',function(req,res,next)
 { 
 try 
 {
  Exam_Master.Search_Exam_Master(req.query.Exam_Master_Name, function (err, rows) 
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

 router.get('/Get_Exam_Master/:Exam_Master_Id_?',function(req,res,next)
 { 
 try 
 {
  Exam_Master.Get_Exam_Master(req.params.Exam_Master_Id_, function (err, rows) 
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

 router.get('/Delete_Exam_Master/:Exam_Master_Id_?',function(req,res,next)
 { 
 try 
 {
  Exam_Master.Delete_Exam_Master(req.params.Exam_Master_Id_, function (err, rows) 
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

 // Get all exams registered by a specific student
 router.get('/Search_Exam_Master_By_Student/:Student_Id_?',function(req,res,next)
 { 
 try 
 {
  Exam_Master.Search_Exam_Master_By_Student(req.params.Student_Id_, function (err, rows) 
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

 // Get exam master by student Id (alternate route)
 router.get('/Get_Exam_Master_By_Student/:Student_Id_?',function(req,res,next)
 { 
   try 
   {
     Exam_Master.Get_Exam_Master_By_Student(req.params.Student_Id_, function (err, rows) 
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

 // Get exam details (questions, options, answers) by Exam_Master_Id
 router.get('/Get_Exam_Details_By_Master/:Exam_Master_Id_?',function(req,res,next)
 { 
 try 
 {
  Exam_Details.Get_Exam_Details_By_Master(req.params.Exam_Master_Id_, function (err, rows) 
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
