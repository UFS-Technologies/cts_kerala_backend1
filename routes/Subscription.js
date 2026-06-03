 var express = require('express');
 var router = express.Router();
 var Subscription=require('../models/Subscription');
router.post('/Save_Subscription/',function(req,res,next)
{ 
try 
{
Subscription.Save_Subscription(req.body, function (err, rows) 
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
 router.get('/Search_Subscription/',function(req,res,next)
 { 
 try 
 {
Subscription.Search_Subscription(req.query.Subscription_Name, function (err, rows) 
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
 router.get('/Get_Subscription/:Subscription_Id_?',function(req,res,next)
 { 
 try 
 {
Subscription.Get_Subscription(req.params.Subscription_Id_, function (err, rows) 
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
 router.get('/Delete_Subscription/:Subscription_Id_?',function(req,res,next)
 { 
 try 
 {
Subscription.Delete_Subscription(req.params.Subscription_Id_, function (err, rows) 
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

