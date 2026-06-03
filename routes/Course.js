var express = require('express');
var router = express.Router();
var Course=require('../models/Course');
router.post('/Save_Course/',async function(req,res,next)
      { 
      try 
      {
        console.log(req)
        const resp = await Course.Save_Course(req.body);
         
         return res.send(resp);     
      }
      catch(e){
        console.log(e)
        
      return res.send(e);
      }
      });      
      router.post('/Save_Course_Fees_Details/',async function(req,res,next)
      { 
      try 
      {
        const resp = await Course.Save_Course_Fees_Details(req.body);
         
         return res.send(resp);     
      }
      catch(e){
      return res.send(e);
      }
      }); 
      router.post('/Save_Course_Subject_Details/',async function(req,res,next)
      { 
      try 
      {
        const resp = await Course.Save_Course_Subject_Details(req.body);
         
         return res.send(resp);     
      }
      catch(e){
      return res.send(e);
      }
      }); 
router.get('/Search_Course/',function(req,res,next)
{ 
try 
{
Course.Search_Course(req.query.Course_Name,req.query.Course_Type_Id,req.query.University_Id, function (err, rows) 
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

// Search_pending_Course
router.get('/Search_pending_Course/',function(req,res,next)
{ 
try 
{
Course.Search_pending_Course(req.query.Course_Name,req.query.Course_Type_Id,req.query.University_Id, function (err, rows) 
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
router.get('/Search_Subject_Typeahead/',function(req,res,next)
{ 
try 
{
  Course.Search_Subject_Typeahead(req.query.Subject_Name_, function (err, rows)
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
router.get('/Search_Part_Typeahead/',function(req,res,next)
{ 
try 
{
  Course.Search_Part_Typeahead(req.query.Part_Name_, function (err, rows)
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
router.get('/Get_Course/:Course_Id_?',function(req,res,next)
{ 
try 
{
Course.Get_Course(req.params.Course_Id_, function (err, rows) 
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
router.get('/Delete_Course/:Course_Id_?/:Request_Status',function(req,res,next)
{ 
try 
{
Course.Delete_Course(req.params.Course_Id_, req.params.Request_Status, function (err, rows) 
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
router.get('/Accept_Course/:Course_Id_?/:Request_Status',function(req,res,next)
{
try
{
Course.Accept_Course(req.params.Course_Id_, req.params.Request_Status, function (err, rows)
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
router.get('/Load_Course_DropDowns',function(req,res,next)
{ 
try 
{
  Course.Load_Course_DropDowns( function (err, rows)
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
router.get('/Load_University',function(req,res,next)
{ 
try 
{
  Course.Load_University( function (err, rows)
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
router.get('/Delete_Course_Fees_Details/:Course_Fees_Id_?',function(req,res,next)
  { 
  try 
  {
    Course.Delete_Course_Fees_Details(req.params.Course_Fees_Id_, function (err, rows) 
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
  router.get('/Delete_Course_Subject_Details/:Course_Subject_Id_?',function(req,res,next)
  { 
  try 
  {
    Course.Delete_Course_Subject_Details(req.params.Course_Subject_Id_, function (err, rows) 
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
router.get('/Get_Course_Subject_Details/:Course_Id_?',function(req,res,next)
{ 
try 
{
Course.Get_Course_Subject_Details(req.params.Course_Id_, function (err, rows) 
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
router.get('/Load_Duration_Type',function(req,res,next)
{ 
try 
{
Course.Load_Duration_Type( function (err, rows) 
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

