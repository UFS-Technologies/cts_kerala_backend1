require('dotenv').config(); // Reloaded env
var http = require('http');
var server = http.Server(app);

var apppath = '/';
//var apppath = '/';
 const port = process.env.PORT || 3506 ;
 
 // SendGrid API key is now in .env
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('./helpers//jwt');
var routes = require("./routes/index");
const errorHandler = require('./helpers/error-handler');
 
var Login = require("./routes/Login");
var Public_Data = require('./routes/Public_Data');
var Accounts = require('./routes/Accounts');
var Agent = require('./routes/Agent');
var Agent_Commision = require('./routes/Agent_Commision');
var Agent_Course_Type = require('./routes/Agent_Course_Type');
var Batch = require('./routes/Batch');
var Candidate = require('./routes/Candidate');
var Candidate_Followup = require('./routes/Candidate_Followup');
var Candidate_Job_Apply = require('./routes/Candidate_Job_Apply');
var Category = require('./routes/Category');
var Certificate_Request = require('./routes/Certificate_Request');
var Certificates = require('./routes/Certificates');
var Course = require('./routes/Course');
var Course_Fees = require('./routes/Course_Fees');
var Course_Import_Details = require('./routes/Course_Import_Details');
var Course_Import_Master = require('./routes/Course_Import_Master');
var Course_Subject = require('./routes/Course_Subject');
var Course_Type = require('./routes/Course_Type');
var Document = require('./routes/Document');
var Exam_Details = require('./routes/Exam_Details');
var Exam_Master = require('./routes/Exam_Master');
var Experience = require('./routes/Experience');
var Fees_Instalment = require('./routes/Fees_Instalment');
var Fees_Receipt = require('./routes/Fees_Receipt');
var Fees_Type = require('./routes/Fees_Type');
var Followup_Type = require('./routes/Followup_Type');
var Functionl_Area = require('./routes/Functionl_Area');
var Job_Posting = require('./routes/Job_Posting');
var Mark_List = require('./routes/Mark_List');
var Part = require('./routes/Part');
var Qualification = require('./routes/Qualification');
var Question = require('./routes/Question');
var Question_Import = require('./routes/Question_Import');
var Settings = require('./routes/Settings');
var Specialization = require('./routes/Specialization');
var Status = require('./routes/Status');
var Student = require('./routes/Student');
var Student_Course = require('./routes/Student_Course');
var Student_Course_Subject = require('./routes/Student_Course_Subject');
var Student_Followup = require('./routes/Student_Followup');
var Study_Materials = require('./routes/Study_Materials');
var Subject = require('./routes/Subject');
var University = require('./routes/University');
var University_Followup = require('./routes/University_Followup');
var User_Role = require('./routes/User_Role');
var User_Type = require('./routes/User_Type');
var Users = require('./routes/Users');
var GeneralFunctions = require('./routes/GeneralFunctions');
var Activity = require('./routes/Activity');
var Fees_Instalment = require('./routes/Fees_Instalment');
var Account_Voucher = require('./routes/Account_Voucher');
var Client_Accounts = require('./routes/Client_Accounts');
var Payment_Voucher = require('./routes/Payment_Voucher');
var Student_Document = require('./routes/Student_Document');
var Old_Student_Registration = require('./routes/Old_Student_Registration');

var app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);
app.use("/Login", Login);
app.use('/Public_Data',Public_Data);
app.use(jwt());

app.use(apppath+'Accounts', Accounts);
app.use(apppath+'Agent', Agent);
app.use(apppath+'Agent_Commision', Agent_Commision);
app.use(apppath+'Agent_Course_Type', Agent_Course_Type);
app.use(apppath+'Batch', Batch);
app.use(apppath+'Candidate', Candidate);
app.use(apppath+'Candidate_Followup', Candidate_Followup);
app.use(apppath+'Candidate_Job_Apply', Candidate_Job_Apply);
app.use(apppath+'Category', Category);
app.use(apppath+'Certificate_Request', Certificate_Request);
app.use(apppath+'Certificates', Certificates);
app.use(apppath+'Course', Course);
app.use(apppath+'Course_Fees', Course_Fees);
app.use(apppath+'Course_Import_Details', Course_Import_Details);
app.use(apppath+'Course_Import_Master', Course_Import_Master);
app.use(apppath+'Course_Subject', Course_Subject);
app.use(apppath+'Course_Type', Course_Type);
app.use(apppath+'Document', Document);
app.use(apppath+'Exam_Details', Exam_Details);
app.use(apppath+'Exam_Master', Exam_Master);
app.use(apppath+'Experience', Experience);
app.use(apppath+'Fees_Instalment', Fees_Instalment);
app.use(apppath+'Fees_Receipt', Fees_Receipt);
app.use(apppath+'Fees_Type', Fees_Type);
app.use(apppath+'Followup_Type', Followup_Type);
app.use(apppath+'Functionl_Area', Functionl_Area);
app.use(apppath+'Job_Posting', Job_Posting);
app.use(apppath+'Mark_List', Mark_List);
app.use(apppath+'Part', Part);
app.use(apppath+'Qualification', Qualification);
app.use(apppath+'Question', Question);
app.use(apppath+'Question_Import', Question_Import);
app.use(apppath+'Settings', Settings);
app.use(apppath+'Specialization', Specialization);
app.use(apppath+'Status', Status);
app.use(apppath+'Student', Student);
app.use(apppath+'Student_Course', Student_Course);
app.use(apppath+'Student_Course_Subject', Student_Course_Subject);
app.use(apppath+'Student_Followup', Student_Followup);
app.use(apppath+'Study_Materials', Study_Materials);
app.use(apppath+'Subject', Subject);
app.use(apppath+'University', University);
app.use(apppath+'University_Followup', University_Followup);
app.use(apppath+'User_Role', User_Role);
app.use(apppath+'User_Type', User_Type);
app.use(apppath+'Users', Users);
app.use(apppath+'GeneralFunctions', GeneralFunctions);
app.use(apppath+'Activity', Activity);
app.use(apppath+'Account_Voucher', Account_Voucher);
app.use(apppath+'Client_Accounts', Client_Accounts);
app.use(apppath+'Payment_Voucher', Payment_Voucher);
app.use(apppath+'Student_Document', Student_Document);
app.use(apppath+'Old_Student_Registration', Old_Student_Registration);

app.get('Edabraod/', (req, res) => {
  res.send('Hello World!')
})

// app.use(function(req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
 
// });
// app.listen(port, () => {
//   console.log(`started on port: ${port}`);
// });
// app.use(function (req, res, next) {
// console.log(`started on port`);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");console.log('1');
//   next();
// });
 
module.exports = app;
