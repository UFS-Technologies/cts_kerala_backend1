-- ============================================================
-- CTS Kerala – Full Migration Script
-- Generated : 2026-04-28T06:11:33.926Z
--
-- Schema source  : cts_kerala  (latest structure)
-- Data source    : cts_kerala_new  (live data)
--
-- STRATEGY:
--   1. Disable foreign keys
--   2. Create a fresh target DB: cts_kerala_migrated
--   3. Clone latest schema from cts_kerala
--   4. INSERT live data from cts_kerala_new (matching columns)
--   5. Re-enable foreign keys
-- ============================================================


-- ────────────────────────────────────────────────────────────
-- SAFETY PRELUDE
-- ────────────────────────────────────────────────────────────

SET NAMES utf8mb4;
SET TIME_ZONE = '+00:00';
SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';


-- ────────────────────────────────────────────────────────────
-- STEP 1 – Create target database: cts_kerala_migrated
-- ────────────────────────────────────────────────────────────

DROP DATABASE IF EXISTS `cts_kerala_migrated`;
CREATE DATABASE `cts_kerala_migrated`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE `cts_kerala_migrated`;


-- ────────────────────────────────────────────────────────────
-- STEP 2 – Clone latest schema from cts_kerala
-- ────────────────────────────────────────────────────────────

-- This recreates every table with the LATEST structure.
-- Foreign keys are disabled so order doesn't matter.

-- Table: account_group
CREATE TABLE `account_group` (
  `Account_Group_Id` decimal(18,0) NOT NULL,
  `Primary_Id` decimal(18,0) DEFAULT NULL,
  `Group_Code` varchar(50) DEFAULT NULL,
  `Group_Name` varchar(200) DEFAULT NULL,
  `Link_Left` decimal(18,0) DEFAULT NULL,
  `Link_Right` decimal(18,0) DEFAULT NULL,
  `Under_Group` decimal(18,0) DEFAULT NULL,
  `IsPrimary` varchar(1) DEFAULT NULL,
  `CanDelete` varchar(1) DEFAULT NULL,
  `UserId` decimal(18,0) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Account_Group_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: account_voucher
CREATE TABLE `account_voucher` (
  `Account_Voucher_Id` decimal(18,0) NOT NULL,
  `Date` datetime DEFAULT NULL,
  `Voucher_No` decimal(18,0) DEFAULT NULL,
  `From_Account_Id` decimal(18,0) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `Payment_Mode` decimal(18,0) DEFAULT NULL,
  `User_Id` decimal(18,0) DEFAULT NULL,
  `Payment_Status` int DEFAULT NULL,
  `To_Account_Id` decimal(18,0) DEFAULT NULL,
  `Employee_Id` int DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Account_Voucher_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: account_years
CREATE TABLE `account_years` (
  `Account_Years_Id` decimal(18,0) NOT NULL,
  `Account_Year` varchar(50) DEFAULT NULL,
  `YearFrom` datetime DEFAULT NULL,
  `YearTo` datetime DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Account_Years_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: accounts
CREATE TABLE `accounts` (
  `Accounts_Id` int NOT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `Client_Id` decimal(18,0) DEFAULT NULL,
  `Dr` decimal(18,2) DEFAULT NULL,
  `Cr` decimal(18,2) DEFAULT NULL,
  `X_Client_Id` decimal(18,2) DEFAULT NULL,
  `Tran_Type` varchar(5) DEFAULT NULL,
  `Tran_Id` decimal(18,0) DEFAULT NULL,
  `Voucher_No` varchar(100) DEFAULT NULL,
  `VoucherType` decimal(18,0) DEFAULT NULL,
  `Description1` varchar(4000) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `DayBook` varchar(1) DEFAULT NULL,
  `Payment_Status` decimal(18,0) DEFAULT NULL,
  PRIMARY KEY (`Accounts_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: activity
CREATE TABLE `activity` (
  `Activity_Id` int NOT NULL,
  `Activity_Name` varchar(200) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Activity_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: activity_details
CREATE TABLE `activity_details` (
  `Activity_Details_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Activity_Id` int DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Descripition` varchar(200) DEFAULT NULL,
  `Additional_Remark` varchar(45) DEFAULT NULL,
  `NextFollowup_Date` datetime DEFAULT NULL,
  `Payment_Status` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Activity_Details_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: activity_status
CREATE TABLE `activity_status` (
  `Activity_Status_Id` int NOT NULL,
  `Activity_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Activity_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: agent
CREATE TABLE `agent` (
  `Agent_Id` int NOT NULL,
  `Agent_Name` varchar(100) DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Whatsapp` varchar(100) DEFAULT NULL,
  `DOB` datetime(6) DEFAULT NULL,
  `Gender` int DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Alternative_Email` varchar(100) DEFAULT NULL,
  `Passport_No` varchar(100) DEFAULT NULL,
  `Passport_Expiry` varchar(100) DEFAULT NULL,
  `User_Name` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Photo` varchar(100) DEFAULT NULL,
  `GSTIN` varchar(100) DEFAULT NULL,
  `Category_Id` int DEFAULT NULL,
  `Commission` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Expiry_Status` int DEFAULT NULL,
  `Payemt_Status` int DEFAULT NULL,
  `Expirty_Date` datetime DEFAULT NULL,
  `Verification_Code` varchar(100) DEFAULT NULL,
  `Reg_No` varchar(100) DEFAULT NULL,
  `Approval_Status` int DEFAULT NULL,
  `Comm_Address1` varchar(100) DEFAULT NULL,
  `Comm_Address2` varchar(100) DEFAULT NULL,
  `Comm_Address3` varchar(100) DEFAULT NULL,
  `Comm_Address4` varchar(100) DEFAULT NULL,
  `Comm_Pincode` varchar(100) DEFAULT NULL,
  `Comm_Mobile` varchar(100) DEFAULT NULL,
  `Center_Name` varchar(100) DEFAULT NULL,
  `Center_Code` varchar(100) DEFAULT NULL,
  `Client_Accounts_Id` int DEFAULT NULL,
  `Agent_Fees` decimal(18,2) DEFAULT NULL,
  `Is_Registered` tinyint DEFAULT NULL,
  `District_Id` int DEFAULT NULL,
  `Agent_No` int DEFAULT NULL,
  `Agent_District_No` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  `Subscription_Id` int DEFAULT NULL,
  `Subscription_Name` varchar(500) DEFAULT NULL,
  `Duration` int DEFAULT NULL,
  `Subscription_Amount` int DEFAULT NULL,
  `Subscription_Status_Id` int DEFAULT NULL,
  `Subscription_Status_Name` varchar(450) DEFAULT NULL,
  `Subscription_Payment_Status_Id` int DEFAULT NULL,
  `Subscription_Payment_Status_Name` varchar(450) DEFAULT NULL,
  `Subscription_Payment_Id` varchar(450) DEFAULT NULL,
  `Subscription_Start_Date` date DEFAULT NULL,
  `Subscription_End_Date` date DEFAULT NULL,
  PRIMARY KEY (`Agent_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: agent_commision
CREATE TABLE `agent_commision` (
  `Agent_Commision_Id` int NOT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Category_Id` int DEFAULT NULL,
  `Category_Name` varchar(100) DEFAULT NULL,
  `Commision_Per` varchar(100) DEFAULT NULL,
  `Commision_Amount` decimal(18,2) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Agent_Commision_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: agent_course_selection
CREATE TABLE `agent_course_selection` (
  `Agent_Course_Selection_Id` int NOT NULL AUTO_INCREMENT,
  `Agent_Id` int DEFAULT NULL,
  `Course_Type_Id` int DEFAULT NULL,
  `Agent_Amount` decimal(18,2) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Agent_Course_Selection_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=359 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: agent_course_type
CREATE TABLE `agent_course_type` (
  `Agent_Course_Type_Id` int NOT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Course_Type_Id` int DEFAULT NULL,
  `Cousrse_Type_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Agent_Course_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: agent_receipt
CREATE TABLE `agent_receipt` (
  `Agent_Receipt_Id` int NOT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Receipt_Date` datetime DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `Mode` int DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Agent_Receipt_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: branch
CREATE TABLE `branch` (
  `Branch_Id` int NOT NULL AUTO_INCREMENT,
  `Branch_Name` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `Location` varchar(50) DEFAULT NULL,
  `District` varchar(50) DEFAULT NULL,
  `State` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `PinCode` varchar(50) DEFAULT NULL,
  `Phone_Number` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Branch_Code` varchar(10) DEFAULT NULL,
  `Company` int DEFAULT NULL,
  `DeleteStatus` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`Branch_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: branch_department
CREATE TABLE `branch_department` (
  `Branch_Department_Id` int NOT NULL AUTO_INCREMENT,
  `Branch_Id` int DEFAULT NULL,
  `Department_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`Branch_Department_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: candidate
CREATE TABLE `candidate` (
  `Candidate_Id` int NOT NULL,
  `Candidate_Name` varchar(100) DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Whatsapp` varchar(100) DEFAULT NULL,
  `DOB` datetime(6) DEFAULT NULL,
  `Gender` int DEFAULT NULL,
  `Email` varchar(1000) DEFAULT NULL,
  `Alternative_Email` varchar(100) DEFAULT NULL,
  `Passport_No` varchar(100) DEFAULT NULL,
  `Passport_Expiry` varchar(100) DEFAULT NULL,
  `User_Name` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Photo` varchar(100) DEFAULT NULL,
  `Registered` tinyint DEFAULT NULL,
  `Registered_By` int DEFAULT NULL,
  `Registered_On` datetime DEFAULT NULL,
  `Client_Accounts_Id` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Functional_Area_Id` int DEFAULT NULL,
  `Functional_Area_Name` varchar(100) DEFAULT NULL,
  `Specialization_Id` int DEFAULT NULL,
  `Specialization_Name` varchar(100) DEFAULT NULL,
  `Experience_Id` int DEFAULT NULL,
  `Experience_Name` varchar(100) DEFAULT NULL,
  `Qualification_Id` int DEFAULT NULL,
  `Qualification_Name` varchar(100) DEFAULT NULL,
  `Resume` varchar(4000) DEFAULT NULL,
  `Postlookingfor` varchar(100) DEFAULT NULL,
  `Candidate_Followup_Id` int DEFAULT NULL,
  `Next_FollowUp_Date` datetime DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `By_User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime DEFAULT NULL,
  `Entry_Type` varchar(100) DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Candidate_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: candidate_followup
CREATE TABLE `candidate_followup` (
  `Candidate_Followup_Id` int NOT NULL AUTO_INCREMENT,
  `Candidate_Id` int DEFAULT NULL,
  `Entry_Date` datetime(6) DEFAULT NULL,
  `Next_FollowUp_Date` datetime(6) DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `By_User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime(6) DEFAULT NULL,
  `Entry_Type` varchar(100) DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Candidate_Followup_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: candidate_job_apply
CREATE TABLE `candidate_job_apply` (
  `Candidate_Job_Apply_Id` int NOT NULL AUTO_INCREMENT,
  `Candidate_Id` int DEFAULT NULL,
  `Job_Posting_Id` int DEFAULT NULL,
  `Entry_Date` datetime(6) DEFAULT NULL,
  `Followupdate` datetime(6) DEFAULT NULL,
  `Status_Id` int DEFAULT NULL,
  `Status_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Candidate_Job_Apply_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: category
CREATE TABLE `category` (
  `Category_Id` int NOT NULL,
  `Category_Name` varchar(100) DEFAULT NULL,
  `Commision_Percentage` decimal(18,2) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Category_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: certificate_request
CREATE TABLE `certificate_request` (
  `Certificate_Request_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `Certificates_Id` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Description` varchar(4000) DEFAULT NULL,
  `File_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Process_Date` datetime(6) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Certificate_Request_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: certificates
CREATE TABLE `certificates` (
  `Certificates_Id` int NOT NULL,
  `Certificates_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Certificates_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: client_accounts
CREATE TABLE `client_accounts` (
  `Client_Accounts_Id` int NOT NULL AUTO_INCREMENT,
  `Account_Group_Id` decimal(18,0) DEFAULT NULL,
  `Client_Accounts_Code` varchar(50) DEFAULT NULL,
  `Client_Accounts_Name` varchar(500) DEFAULT NULL,
  `Client_Accounts_No` varchar(50) DEFAULT NULL,
  `Address1` varchar(250) DEFAULT NULL,
  `Address2` varchar(250) DEFAULT NULL,
  `Address3` varchar(250) DEFAULT NULL,
  `Address4` varchar(50) DEFAULT NULL,
  `PinCode` varchar(50) DEFAULT NULL,
  `StateCode` varchar(50) DEFAULT NULL,
  `GSTNo` varchar(50) DEFAULT NULL,
  `PanNo` varchar(50) DEFAULT NULL,
  `State` varchar(1000) DEFAULT NULL,
  `Country` varchar(1000) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Mobile` varchar(50) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Opening_Balance` decimal(18,2) DEFAULT NULL,
  `Description1` varchar(1000) DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `UserId` decimal(18,0) DEFAULT NULL,
  `LedgerInclude` varchar(50) DEFAULT NULL,
  `CanDelete` varchar(2) DEFAULT NULL,
  `Commision` decimal(18,2) DEFAULT NULL,
  `Opening_Type` int DEFAULT NULL,
  `Employee_Id` decimal(18,0) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Client_Accounts_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1059 DEFAULT CHARSET=latin1;

-- Table: company
CREATE TABLE `company` (
  `Company_Id` int NOT NULL,
  `companyname` varchar(45) DEFAULT NULL,
  `Phone1` varchar(45) DEFAULT NULL,
  `Phone2` varchar(45) DEFAULT NULL,
  `Mobile` varchar(45) DEFAULT NULL,
  `Website` varchar(500) DEFAULT NULL,
  `Email` varchar(500) DEFAULT NULL,
  `Address1` varchar(1000) DEFAULT NULL,
  `Address2` varchar(1000) DEFAULT NULL,
  `Address3` varchar(1000) DEFAULT NULL,
  `Is_Delete` tinyint DEFAULT NULL,
  `Logo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Company_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course
CREATE TABLE `course` (
  `Course_Id` int NOT NULL,
  `Course_Name` varchar(100) NOT NULL,
  `Course_Type_Id` int DEFAULT NULL,
  `Course_Type_Name` varchar(100) DEFAULT NULL,
  `Course_Code` varchar(45) DEFAULT NULL,
  `Duration` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `University_Id` int DEFAULT NULL,
  `Duration_Type_Id` int DEFAULT NULL,
  `Course_Mode` int DEFAULT NULL,
  `Course_Term` int DEFAULT NULL,
  `Duration_Name` varchar(45) DEFAULT NULL,
  `Course_Fees` double DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  `Request_Status` int DEFAULT '0',
  PRIMARY KEY (`Course_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_duration
CREATE TABLE `course_duration` (
  `Course_Duration_Id` int NOT NULL AUTO_INCREMENT,
  `Course_Duration_Name` varchar(45) DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Duration_Type_Id` int DEFAULT NULL,
  `Duration` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Duration_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_fees
CREATE TABLE `course_fees` (
  `Course_Fees_Id` int NOT NULL AUTO_INCREMENT,
  `Course_Id` int DEFAULT NULL,
  `Fees_Type_Id` int DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `No_Of_Instalment` varchar(100) DEFAULT NULL,
  `Instalment_Period` varchar(100) DEFAULT NULL,
  `Instalment_Type_Id` int DEFAULT NULL,
  `Agent_Amount` decimal(18,2) DEFAULT NULL,
  `Total_Fees` decimal(18,2) DEFAULT NULL,
  `University_Amount` decimal(18,2) DEFAULT NULL,
  `Studymaterials_Fees` decimal(18,2) DEFAULT NULL,
  `Coaching_Fees` decimal(18,2) DEFAULT NULL,
  `Service_Fees` decimal(18,2) DEFAULT NULL,
  `From_Year` int DEFAULT NULL,
  `To_Year` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Fees_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=208 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_import_details
CREATE TABLE `course_import_details` (
  `Course_Import_Details_Id` int NOT NULL,
  `Course_Import_Master_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Import_Details_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_import_master
CREATE TABLE `course_import_master` (
  `Course_Import_Master_Id` int NOT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Import_Master_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_subject
CREATE TABLE `course_subject` (
  `Course_Subject_Id` int NOT NULL AUTO_INCREMENT,
  `Course_Id` int DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Minimum_Mark` varchar(100) DEFAULT NULL,
  `Maximum_Mark` varchar(100) DEFAULT NULL,
  `Online_Exam_Status` int DEFAULT NULL,
  `No_of_Question` varchar(100) DEFAULT NULL,
  `Exam_Duration` varchar(100) DEFAULT NULL,
  `Subject_Code` varchar(45) DEFAULT NULL,
  `External_Minimum_Mark` varchar(45) DEFAULT NULL,
  `External_Maximum_Mark` varchar(45) DEFAULT NULL,
  `Internal_Minimum_Mark` varchar(45) DEFAULT NULL,
  `Internal_Maximum_Mark` varchar(45) DEFAULT NULL,
  `Technical_Minimum_Mark` varchar(45) DEFAULT NULL,
  `Technical_Maximum_Mark` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Subject_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2261 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: course_type
CREATE TABLE `course_type` (
  `Course_Type_Id` int NOT NULL,
  `Course_Type_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Course_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: data_log_
CREATE TABLE `data_log_` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Description_` varchar(4000) DEFAULT NULL,
  `data_val` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=684 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: db_logs
CREATE TABLE `db_logs` (
  `Db_Logs_Id` int NOT NULL AUTO_INCREMENT,
  `Remark1` varchar(4000) DEFAULT NULL,
  `Remark2` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`Db_Logs_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: department
CREATE TABLE `department` (
  `Department_Id` int NOT NULL AUTO_INCREMENT,
  `Department_Name` varchar(50) DEFAULT NULL,
  `FollowUp` tinyint unsigned DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Department_Order` int DEFAULT NULL,
  `Color` varchar(50) DEFAULT NULL,
  `DeleteStatus` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`Department_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=326 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: district
CREATE TABLE `district` (
  `District_Id` int NOT NULL,
  `District_Name` varchar(45) DEFAULT NULL,
  `District_Code` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`District_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: document
CREATE TABLE `document` (
  `Document_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Document_Name` varchar(100) DEFAULT NULL,
  `Files` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Document_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: duration_type
CREATE TABLE `duration_type` (
  `Duration_Type_Id` int NOT NULL,
  `Duration_Type_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Duration_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: exam_details
CREATE TABLE `exam_details` (
  `Exam_Details_Id` int NOT NULL AUTO_INCREMENT,
  `Exam_Master_Id` int DEFAULT NULL,
  `Question_Id` int DEFAULT NULL,
  `Question_Name` varchar(100) DEFAULT NULL,
  `Option_1` varchar(100) DEFAULT NULL,
  `Option_2` varchar(100) DEFAULT NULL,
  `Option_3` varchar(100) DEFAULT NULL,
  `Option_4` varchar(100) DEFAULT NULL,
  `Question_Answer` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Exam_Details_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14588 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: exam_master
CREATE TABLE `exam_master` (
  `Exam_Master_Id` int NOT NULL,
  `Exam_Date` datetime(6) DEFAULT NULL,
  `Student_Id` int DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Start_Time` datetime(6) DEFAULT NULL,
  `End_Time` datetime(6) DEFAULT NULL,
  `Mark_Obtained` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Exam_Master_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: exam_status
CREATE TABLE `exam_status` (
  `Exam_Status_Id` int NOT NULL,
  `Exam_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Exam_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: experience
CREATE TABLE `experience` (
  `Experience_Id` int NOT NULL,
  `Experience_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Experience_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: fees_receipt
CREATE TABLE `fees_receipt` (
  `Fees_Receipt_Id` int NOT NULL,
  `Fees_Installment_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Student_Id` int DEFAULT NULL,
  `Fees_Type_Id` int DEFAULT NULL,
  `Fees_Type_Name` varchar(100) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Fees_Receipt_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: fees_type
CREATE TABLE `fees_type` (
  `Fees_Type_Id` int NOT NULL,
  `Fees_Type_Name` varchar(100) DEFAULT NULL,
  `User_Id` tinyint DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Fees_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: followup_type
CREATE TABLE `followup_type` (
  `Followup_Type_Id` int NOT NULL,
  `Followup_Type_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Followup_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: functionl_area
CREATE TABLE `functionl_area` (
  `Functionl_Area_Id` int NOT NULL,
  `Functionl_Area_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Functionl_Area_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: gender
CREATE TABLE `gender` (
  `Gender_Id` int NOT NULL,
  `Gender_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Gender_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: general_settings
CREATE TABLE `general_settings` (
  `General_Settings_Id` decimal(18,0) NOT NULL,
  `Invoice_No` decimal(18,0) DEFAULT NULL,
  `Purchase_Retrun_No` decimal(18,0) DEFAULT NULL,
  `Sales_Return_No` decimal(18,0) DEFAULT NULL,
  `Damage_No` decimal(18,0) DEFAULT NULL,
  `Contra_Voucher_No` decimal(18,0) DEFAULT NULL,
  `Journal_Voucher_No` decimal(18,0) DEFAULT NULL,
  `Receipt_Voucher_No` decimal(18,0) DEFAULT NULL,
  `Payment_Voucher_No` decimal(18,0) DEFAULT NULL,
  `Cess` decimal(18,2) DEFAULT NULL,
  `Voucher_No` int DEFAULT NULL,
  `Barcode` int DEFAULT NULL,
  PRIMARY KEY (`General_Settings_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: holiday_list
CREATE TABLE `holiday_list` (
  `Holiday_List_Id` int NOT NULL,
  `Day` int DEFAULT NULL,
  `Month` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Holiday_List_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: job_posting
CREATE TABLE `job_posting` (
  `Job_Posting_Id` int NOT NULL,
  `Job_Code` varchar(100) DEFAULT NULL,
  `Job_Title` varchar(100) DEFAULT NULL,
  `Descritpion` varchar(4000) DEFAULT NULL,
  `Skills` varchar(100) DEFAULT NULL,
  `No_Of_Vaccancy` varchar(100) DEFAULT NULL,
  `Experience` int DEFAULT NULL,
  `Experience_Name` varchar(100) DEFAULT NULL,
  `Job_Location` varchar(100) DEFAULT NULL,
  `Qualification` int DEFAULT NULL,
  `Qualification_Name` varchar(100) DEFAULT NULL,
  `Functional_Area` int DEFAULT NULL,
  `Functional_Area_Name` varchar(100) DEFAULT NULL,
  `Specialization` int DEFAULT NULL,
  `Specialization_Name` varchar(100) DEFAULT NULL,
  `Salary` varchar(100) DEFAULT NULL,
  `Last_Date` datetime(6) DEFAULT NULL,
  `Company_Name` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Contact_Name` varchar(100) DEFAULT NULL,
  `Contact_No` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Logo` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Job_Posting_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: leads
CREATE TABLE `leads` (
  `Leads_Id` int NOT NULL,
  `Leads_Name` varchar(100) DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Description` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Leads_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: mark_list
CREATE TABLE `mark_list` (
  `Mark_List_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Id` int DEFAULT NULL,
  `Student_Course_Part_Id` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Minimum_Mark` varchar(100) DEFAULT NULL,
  `Maximum_Mark` varchar(100) DEFAULT NULL,
  `Internal_Mark` varchar(100) DEFAULT NULL,
  `External_Mark` varchar(100) DEFAULT NULL,
  `Technical_Skill` varchar(100) DEFAULT NULL,
  `Mark_Obtained` varchar(100) DEFAULT NULL,
  `Grade` varchar(100) DEFAULT NULL,
  `Exam_Status_Id` int DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Part_Name` varchar(100) DEFAULT NULL,
  `Month_Id` int DEFAULT NULL,
  `Month_Name` varchar(100) DEFAULT NULL,
  `Year_Id` int DEFAULT NULL,
  `Year_Name` varchar(100) DEFAULT NULL,
  `Course_Subject_Id` int DEFAULT NULL,
  `Online_Exam_Mark` varchar(100) DEFAULT NULL,
  `Exam_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Mark_List_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25280 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: menu
CREATE TABLE `menu` (
  `Menu_Id` int NOT NULL,
  `Menu_Name` varchar(100) DEFAULT NULL,
  `Menu_Order` int DEFAULT NULL,
  `IsEdit` tinyint DEFAULT NULL,
  `IsSave` tinyint DEFAULT NULL,
  `IsDelete` tinyint DEFAULT NULL,
  `IsView` tinyint DEFAULT NULL,
  `Menu_Status` tinyint DEFAULT NULL,
  `Menu_Type` tinyint DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Menu_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: mode
CREATE TABLE `mode` (
  `Mode_Id` int NOT NULL,
  `Mode_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Mode_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: month_status
CREATE TABLE `month_status` (
  `Month_Status_Id` int NOT NULL,
  `Month_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Month_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: old_student_registration
CREATE TABLE `old_student_registration` (
  `Old_Student_Registration_Id` int NOT NULL,
  `Old_Student_Registration_Student_Name` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Date` datetime DEFAULT NULL,
  `Old_Student_Registration_No` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Address1` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Address2` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Address3` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Address4` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Phone` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Mobile` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_Email` varchar(100) DEFAULT NULL,
  `Old_Student_Registration_user_id` int DEFAULT NULL,
  `Old_Student_Registration_entry_Date` datetime DEFAULT NULL,
  `Program` varchar(500) DEFAULT NULL,
  `Section` varchar(100) DEFAULT NULL,
  `Result_Id` int DEFAULT NULL,
  `Result` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Old_Student_Registration_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: online_exam_status
CREATE TABLE `online_exam_status` (
  `Online_Exam_Status_Id` int NOT NULL,
  `Online_Exam_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Online_Exam_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: part
CREATE TABLE `part` (
  `Part_Id` int NOT NULL,
  `Part_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Part_SlNo` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Part_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: payment_mode
CREATE TABLE `payment_mode` (
  `Payment_Mode_Id` int NOT NULL,
  `Payment_Mode_Name` varchar(50) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Payment_Mode_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: payment_status
CREATE TABLE `payment_status` (
  `Payment_Status_Id` int NOT NULL,
  `Payment_Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Payment_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: payment_voucher
CREATE TABLE `payment_voucher` (
  `Payment_Voucher_Id` decimal(18,0) NOT NULL,
  `Date` datetime DEFAULT NULL,
  `Voucher_No` decimal(18,0) DEFAULT NULL,
  `From_Account_Id` decimal(18,0) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `To_Account_Id` decimal(18,0) DEFAULT NULL,
  `Payment_Mode` decimal(18,0) DEFAULT NULL,
  `User_Id` decimal(18,0) DEFAULT NULL,
  `Payment_Status` int DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Payment_Voucher_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: primary_details
CREATE TABLE `primary_details` (
  `Primary_Details_Id` decimal(18,0) NOT NULL,
  `Primary_Code` varchar(50) DEFAULT NULL,
  `Primary_Name` varchar(50) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Primary_Details_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: qualification
CREATE TABLE `qualification` (
  `Qualification_Id` int NOT NULL,
  `Qualification_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Qualification_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: question
CREATE TABLE `question` (
  `Question_Id` int NOT NULL AUTO_INCREMENT,
  `Question_Name` varchar(100) DEFAULT NULL,
  `Question_Import_Master_Id` int DEFAULT NULL,
  `Option_1` varchar(100) DEFAULT NULL,
  `Option_2` varchar(100) DEFAULT NULL,
  `Option_3` varchar(100) DEFAULT NULL,
  `Option_4` varchar(100) DEFAULT NULL,
  `Correct_Answer` varchar(100) DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Semester_Id` int DEFAULT NULL,
  `Semester_Name` varchar(100) DEFAULT NULL,
  `University_Id` int DEFAULT NULL,
  `University_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Question_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1540 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: question_import_details
CREATE TABLE `question_import_details` (
  `Question_Import_Details_Id` int NOT NULL,
  `Question_Import_Master_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Part_Name` varchar(100) DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Question_Id` int DEFAULT NULL,
  `Question_Name` varchar(500) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Question_Import_Details_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: question_import_master
CREATE TABLE `question_import_master` (
  `Question_Import_Master_Id` int NOT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Semester_Id` int DEFAULT NULL,
  `Semester_Name` varchar(100) DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `University_Id` int DEFAULT NULL,
  `University_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Question_Import_Master_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: receipt_voucher
CREATE TABLE `receipt_voucher` (
  `Receipt_Voucher_Id` int NOT NULL,
  `Date` datetime DEFAULT NULL,
  `Voucher_No` decimal(18,0) DEFAULT NULL,
  `From_Account_Id` decimal(18,0) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `Payment_Mode` decimal(18,0) DEFAULT NULL,
  `User_Id` decimal(18,0) DEFAULT NULL,
  `Payment_Status` int DEFAULT NULL,
  `To_Account_Id` decimal(18,0) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `Bill_No` varchar(1000) DEFAULT NULL,
  `Student_Course_Id` int DEFAULT NULL,
  `Fees_Type_Id` int DEFAULT NULL,
  `Center_Code` varchar(100) DEFAULT NULL,
  `Student_Fees_Installment_Details_Id` int DEFAULT NULL,
  `Service_Fees` decimal(18,2) DEFAULT NULL,
  `Service_Tax_Per` int DEFAULT NULL,
  `Coaching_Fees` decimal(18,2) DEFAULT NULL,
  `Coaching_Tax_Per` int DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Receipt_Voucher_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Table: settings
CREATE TABLE `settings` (
  `Settings_Id` int NOT NULL,
  `Settings_Name` varchar(100) DEFAULT NULL,
  `Settings_Group` int DEFAULT NULL,
  `Registration_No` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  `Registration_Fees` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`Settings_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: skp_status
CREATE TABLE `skp_status` (
  `Status_Id` int NOT NULL,
  `Status_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: specialization
CREATE TABLE `specialization` (
  `Specialization_Id` int NOT NULL,
  `Specialization_Name` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Specialization_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: status
CREATE TABLE `status` (
  `Status_Id` int NOT NULL,
  `Status_Name` varchar(100) DEFAULT NULL,
  `FollowUp` tinyint DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Group_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student
CREATE TABLE `student` (
  `Student_Id` int NOT NULL,
  `Student_Name` varchar(100) DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Whatsapp` varchar(100) DEFAULT NULL,
  `DOB` datetime(6) DEFAULT NULL,
  `Gender` int DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Alternative_Email` varchar(100) DEFAULT NULL,
  `Passport_No` varchar(100) DEFAULT NULL,
  `Passport_Expiry` varchar(100) DEFAULT NULL,
  `User_Name` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Photo` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Registered_By` int DEFAULT NULL,
  `Registered` tinyint DEFAULT NULL,
  `Registered_On` datetime DEFAULT NULL,
  `Student_Followup_Id` int DEFAULT NULL,
  `Next_FollowUp_Date` datetime DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `By_User_Id` int DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime DEFAULT NULL,
  `Registration_No` int DEFAULT NULL,
  `Role_No` varchar(100) DEFAULT NULL,
  `Client_Accounts_Id` int DEFAULT NULL,
  `Aadhaar` varchar(500) DEFAULT NULL,
  `Course_Name` varchar(200) DEFAULT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Status_Name` varchar(100) DEFAULT NULL,
  `Agent_Name` varchar(100) DEFAULT NULL,
  `By_User_Name` varchar(100) DEFAULT NULL,
  `To_User_Name` varchar(100) DEFAULT NULL,
  `Agent_Address` varchar(100) DEFAULT NULL,
  `Center_Name` varchar(100) DEFAULT NULL,
  `Center_Code` varchar(100) DEFAULT NULL,
  `Agent_District_Id` int DEFAULT NULL,
  `User_Details_Name` varchar(100) DEFAULT NULL,
  `Status_Followup` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  `SKP_Status_Id` int DEFAULT NULL,
  `SKP_Status_Name` varchar(450) DEFAULT NULL,
  `Aadhaar_Back` varchar(450) DEFAULT NULL,
  `SSLC_Certificate` varchar(450) DEFAULT NULL,
  `Plustwo_Certificate` varchar(450) DEFAULT NULL,
  `Registration_Fees` decimal(10,0) DEFAULT NULL,
  `Registration_Fees_Paid_Date` date DEFAULT NULL,
  `Registration_Fees_Status` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`Student_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_course
CREATE TABLE `student_course` (
  `Student_Course_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Entry_Date` datetime(6) DEFAULT NULL,
  `Course_Name_Details` varchar(100) DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Start_Date` datetime(6) DEFAULT NULL,
  `End_Date` datetime(6) DEFAULT NULL,
  `Join_Date` datetime(6) DEFAULT NULL,
  `By_User_Id` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Course_Type_Id` int DEFAULT NULL,
  `Course_Type_Name` varchar(100) DEFAULT NULL,
  `Duration` int DEFAULT NULL,
  `Agent_Amount` decimal(18,2) DEFAULT NULL,
  `Total_Fees` decimal(18,2) DEFAULT NULL,
  `University_Id` int DEFAULT NULL,
  `Certificate_Date` datetime DEFAULT NULL,
  `Certificate_Grade` varchar(100) DEFAULT NULL,
  `Duration_Type_Id` int DEFAULT NULL,
  `Starting_Month` int DEFAULT NULL,
  `Starting_Year` int DEFAULT NULL,
  `Ending_Month` int DEFAULT NULL,
  `Ending_Year` int DEFAULT NULL,
  `Course_Duration_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Course_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_course_part
CREATE TABLE `student_course_part` (
  `Student_Course_Part_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Id` int DEFAULT NULL,
  `Student_Course_Id` int DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Part_Name` varchar(100) DEFAULT NULL,
  `Month_Id` int DEFAULT NULL,
  `Month_Name` varchar(100) DEFAULT NULL,
  `Year_Id` int DEFAULT NULL,
  `Year_Name` varchar(100) DEFAULT NULL,
  `Mark_List_Issue_Date` datetime DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Course_Part_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_course_subject
CREATE TABLE `student_course_subject` (
  `Student_Course_Subject_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Minimum_Mark` varchar(100) DEFAULT NULL,
  `Maximum_Mark` varchar(100) DEFAULT NULL,
  `Online_Exam_Status` varchar(100) DEFAULT NULL,
  `No_of_Question` varchar(100) DEFAULT NULL,
  `Exam_Duration` varchar(100) DEFAULT NULL,
  `Exam_Attended_Status` int DEFAULT NULL,
  `Obtained_Mark` varchar(100) DEFAULT NULL,
  `Subject_Code` varchar(45) DEFAULT NULL,
  `Course_Subject_Id` int DEFAULT NULL,
  `Student_Course_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Course_Subject_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9249 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_document
CREATE TABLE `student_document` (
  `Student_Document_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Id` int DEFAULT NULL,
  `Entry_Date` datetime DEFAULT NULL,
  `File_Name` varchar(500) DEFAULT NULL,
  `Document_Name` varchar(300) DEFAULT NULL,
  `Document_Id` int DEFAULT NULL,
  `Document_File_Name` varchar(200) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Document_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_fees_installment_details
CREATE TABLE `student_fees_installment_details` (
  `Student_Fees_Installment_Details_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Fees_Installment_Master_Id` int DEFAULT NULL,
  `Instalment_Date` datetime DEFAULT NULL,
  `Fees_Amount` decimal(18,2) DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Tax_Percentage` decimal(18,2) DEFAULT NULL,
  `Balance_Amount` decimal(18,2) DEFAULT NULL,
  `Service_Fees` decimal(18,2) DEFAULT NULL,
  `Coaching_Fees` decimal(18,2) DEFAULT NULL,
  `Studymaterials_Fees` decimal(18,2) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Fees_Installment_Details_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=985 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_fees_installment_master
CREATE TABLE `student_fees_installment_master` (
  `Student_Fees_Installment_Master_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Student_Course_Id` int DEFAULT NULL,
  `Course_Fees_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Fees_Type_Id` int DEFAULT NULL,
  `Fees_Type_Name` varchar(100) DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `No_Of_Instalment` int DEFAULT NULL,
  `Instalment_Period` int DEFAULT NULL,
  `Instalment_Type_Id` int DEFAULT NULL,
  `Instalment_Type_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Fees_Installment_Master_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_followup
CREATE TABLE `student_followup` (
  `Student_Followup_Id` int NOT NULL AUTO_INCREMENT,
  `Student_Id` int DEFAULT NULL,
  `Entry_Date` datetime(6) DEFAULT NULL,
  `Next_FollowUp_Date` datetime(6) DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `By_User_Id` int DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime(6) DEFAULT NULL,
  `Status_Name` varchar(100) DEFAULT NULL,
  `By_User_Name` varchar(100) DEFAULT NULL,
  `To_User_Name` varchar(100) DEFAULT NULL,
  `Status_Followup` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Followup_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=843 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: student_study_materials
CREATE TABLE `student_study_materials` (
  `Student_Study_Materials_Id` int NOT NULL,
  `Student_Id` int DEFAULT NULL,
  `Study_Material_Id` int DEFAULT NULL,
  `Course_Id` int DEFAULT NULL,
  `Course_Name` varchar(100) DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Study_Material_Name` varchar(100) DEFAULT NULL,
  `File_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Student_Study_Materials_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: study_materials
CREATE TABLE `study_materials` (
  `Study_Materials_Id` int NOT NULL,
  `Course_Id` int DEFAULT NULL,
  `Part_Id` int DEFAULT NULL,
  `Subject_Id` int DEFAULT NULL,
  `Course_Subject_Id` int DEFAULT NULL,
  `Study_Materials_Name` varchar(100) DEFAULT NULL,
  `File_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Study_Materials_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: subject
CREATE TABLE `subject` (
  `Subject_Id` int NOT NULL,
  `Subject_Name` varchar(100) DEFAULT NULL,
  `Exam_status` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  `Request_Status` varchar(45) DEFAULT '0',
  PRIMARY KEY (`Subject_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: subscription
CREATE TABLE `subscription` (
  `Subscription_Id` int NOT NULL,
  `Subscription_Name` varchar(450) DEFAULT NULL,
  `Duration` int DEFAULT NULL,
  `Subscription_Amount` decimal(10,0) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Subscription_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: subscription_payment_status
CREATE TABLE `subscription_payment_status` (
  `Subscription_Payment_Status_Id` int NOT NULL,
  `Subscription_Payment_Status_Name` varchar(450) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Subscription_Payment_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: subscription_status
CREATE TABLE `subscription_status` (
  `Subscription_Status_Id` int NOT NULL,
  `Subscription_Status_Name` varchar(450) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Subscription_Status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: university
CREATE TABLE `university` (
  `University_Id` int NOT NULL,
  `University_Name` varchar(100) DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Website` varchar(100) DEFAULT NULL,
  `Description1` varchar(2000) DEFAULT NULL,
  `Description2` varchar(4000) DEFAULT NULL,
  `Description3` varchar(4000) DEFAULT NULL,
  `University_Followup_Id` int DEFAULT NULL,
  `Next_FollowUp_Date` datetime DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Followup_User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `Starting_Year` int DEFAULT NULL,
  `Client_Accounts_Id` int DEFAULT NULL,
  `Back_Status` tinyint DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`University_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: university_activity
CREATE TABLE `university_activity` (
  `University_Activity_Id` int NOT NULL AUTO_INCREMENT,
  `University_Id` int DEFAULT NULL,
  `Activity_Id` int DEFAULT NULL,
  `Amount` decimal(18,2) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`University_Activity_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=326 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: university_admission_month
CREATE TABLE `university_admission_month` (
  `University_Admission_Month_Id` int NOT NULL AUTO_INCREMENT,
  `University_Id` int DEFAULT NULL,
  `Month_Status_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`University_Admission_Month_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: university_exam_month
CREATE TABLE `university_exam_month` (
  `University_Exam_Month_Id` int NOT NULL AUTO_INCREMENT,
  `University_Id` int DEFAULT NULL,
  `Month_Status_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`University_Exam_Month_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=354 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: university_followup
CREATE TABLE `university_followup` (
  `University_Followup_Id` int NOT NULL,
  `University_Id` int DEFAULT NULL,
  `Entry_Date` datetime(6) DEFAULT NULL,
  `Next_FollowUp_Date` datetime(6) DEFAULT NULL,
  `FollowUp_Difference` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Remark` varchar(4000) DEFAULT NULL,
  `Remark_Id` int DEFAULT NULL,
  `FollowUp_Type` int DEFAULT NULL,
  `FollowUP_Time` varchar(100) DEFAULT NULL,
  `Actual_FollowUp_Date` datetime(6) DEFAULT NULL,
  `Entry_Type` varchar(100) DEFAULT NULL,
  `To_User_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`University_Followup_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: user_department
CREATE TABLE `user_department` (
  `User_Department_Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int DEFAULT NULL,
  `Department_Id` int DEFAULT NULL,
  `Branch_Id` int DEFAULT NULL,
  `View_Entry` tinyint unsigned DEFAULT NULL,
  `VIew_All` tinyint unsigned DEFAULT NULL,
  `DeleteStatus` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`User_Department_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=421 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: user_menu_selection
CREATE TABLE `user_menu_selection` (
  `User_Menu_Selection_Id` int NOT NULL AUTO_INCREMENT,
  `Menu_Id` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `IsEdit` tinyint DEFAULT NULL,
  `IsSave` tinyint DEFAULT NULL,
  `IsDelete` tinyint DEFAULT NULL,
  `IsView` tinyint DEFAULT NULL,
  `Menu_Status` tinyint DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`User_Menu_Selection_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1097 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: user_role
CREATE TABLE `user_role` (
  `User_Role_Id` int NOT NULL,
  `User_Role_Name` varchar(100) DEFAULT NULL,
  `Role_Under_Id` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`User_Role_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: user_status
CREATE TABLE `user_status` (
  `User_Status_Id` int NOT NULL AUTO_INCREMENT,
  `User_Status_Name` varchar(50) DEFAULT NULL,
  `Is_Delete` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`User_Status_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: user_type
CREATE TABLE `user_type` (
  `User_Type_Id` int NOT NULL,
  `User_Type_Name` varchar(100) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`User_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: users
CREATE TABLE `users` (
  `Users_Id` int NOT NULL,
  `Users_Name` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Working_Status` int DEFAULT NULL,
  `User_Type` int DEFAULT NULL,
  `Role_Id` int DEFAULT NULL,
  `Agent_Id` int DEFAULT NULL,
  `Address1` varchar(100) DEFAULT NULL,
  `Address2` varchar(100) DEFAULT NULL,
  `Address3` varchar(100) DEFAULT NULL,
  `Address4` varchar(100) DEFAULT NULL,
  `Pincode` varchar(200) DEFAULT NULL,
  `Mobile` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Employee_Id` int DEFAULT NULL,
  `Registration_Target` int DEFAULT NULL,
  `FollowUp_Target` int DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Users_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table: voucher_type
CREATE TABLE `voucher_type` (
  `Voucher_Type_Id` int NOT NULL,
  `Voucher_Type_Name` varchar(45) DEFAULT NULL,
  `DeleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`Voucher_Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- ────────────────────────────────────────────────────────────
-- STEP 3 – Schema Difference Report (informational)
-- ────────────────────────────────────────────────────────────

-- Tables NEW in cts_kerala (no data to migrate):
--   + skp_status
--   + subscription
--   + subscription_payment_status
--   + subscription_status

-- [DIFF] Table: agent
--   + Added column   : Subscription_Id (int) – will be NULL/DEFAULT
--   + Added column   : Subscription_Name (varchar(500)) – will be NULL/DEFAULT
--   + Added column   : Duration (int) – will be NULL/DEFAULT
--   + Added column   : Subscription_Amount (int) – will be NULL/DEFAULT
--   + Added column   : Subscription_Status_Id (int) – will be NULL/DEFAULT
--   + Added column   : Subscription_Status_Name (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : Subscription_Payment_Status_Id (int) – will be NULL/DEFAULT
--   + Added column   : Subscription_Payment_Status_Name (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : Subscription_Payment_Id (varchar(450)) – will be NULL/DEFAULT
--   - Removed column : Membership_No – data dropped

-- [DIFF] Table: client_accounts
--   - Removed column : Membership_No – data dropped

-- [DIFF] Table: course
--   + Added column   : Request_Status (int) – will be NULL/DEFAULT

-- [DIFF] Table: settings
--   + Added column   : Registration_Fees (decimal(10,0)) – will be NULL/DEFAULT

-- [DIFF] Table: student
--   + Added column   : SKP_Status_Id (int) – will be NULL/DEFAULT
--   + Added column   : SKP_Status_Name (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : Aadhaar_Back (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : SSLC_Certificate (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : Plustwo_Certificate (varchar(450)) – will be NULL/DEFAULT
--   + Added column   : Registration_Fees (decimal(10,0)) – will be NULL/DEFAULT
--   + Added column   : Registration_Fees_Paid_Date (date) – will be NULL/DEFAULT
--   + Added column   : Registration_Fees_Status (varchar(450)) – will be NULL/DEFAULT
--   - Removed column : Student_Reg_No – data dropped

-- [DIFF] Table: subject
--   + Added column   : Request_Status (varchar(45)) – will be NULL/DEFAULT


-- ────────────────────────────────────────────────────────────
-- STEP 4 – Migrate live data from cts_kerala_new
-- ────────────────────────────────────────────────────────────

-- Only columns that exist in BOTH schemas are SELECTed.
-- New columns in the target receive their DEFAULT / NULL value.
-- Columns removed from the new schema are silently dropped.

-- ── account_group ──
INSERT INTO `cts_kerala_migrated`.`account_group`
  (`Account_Group_Id`, `Primary_Id`, `Group_Code`, `Group_Name`, `Link_Left`, `Link_Right`, `Under_Group`, `IsPrimary`, `CanDelete`, `UserId`, `DeleteStatus`)
SELECT
    `Account_Group_Id`,
    `Primary_Id`,
    `Group_Code`,
    `Group_Name`,
    `Link_Left`,
    `Link_Right`,
    `Under_Group`,
    `IsPrimary`,
    `CanDelete`,
    `UserId`,
    `DeleteStatus`
FROM `cts_kerala_new`.`account_group`;

-- ── account_voucher ──
INSERT INTO `cts_kerala_migrated`.`account_voucher`
  (`Account_Voucher_Id`, `Date`, `Voucher_No`, `From_Account_Id`, `Amount`, `Payment_Mode`, `User_Id`, `Payment_Status`, `To_Account_Id`, `Employee_Id`, `Description`, `DeleteStatus`)
SELECT
    `Account_Voucher_Id`,
    `Date`,
    `Voucher_No`,
    `From_Account_Id`,
    `Amount`,
    `Payment_Mode`,
    `User_Id`,
    `Payment_Status`,
    `To_Account_Id`,
    `Employee_Id`,
    `Description`,
    `DeleteStatus`
FROM `cts_kerala_new`.`account_voucher`;

-- ── account_years ──
INSERT INTO `cts_kerala_migrated`.`account_years`
  (`Account_Years_Id`, `Account_Year`, `YearFrom`, `YearTo`, `DeleteStatus`)
SELECT
    `Account_Years_Id`,
    `Account_Year`,
    `YearFrom`,
    `YearTo`,
    `DeleteStatus`
FROM `cts_kerala_new`.`account_years`;

-- ── accounts ──
INSERT INTO `cts_kerala_migrated`.`accounts`
  (`Accounts_Id`, `Entry_Date`, `Client_Id`, `Dr`, `Cr`, `X_Client_Id`, `Tran_Type`, `Tran_Id`, `Voucher_No`, `VoucherType`, `Description1`, `Status`, `DayBook`, `Payment_Status`)
SELECT
    `Accounts_Id`,
    `Entry_Date`,
    `Client_Id`,
    `Dr`,
    `Cr`,
    `X_Client_Id`,
    `Tran_Type`,
    `Tran_Id`,
    `Voucher_No`,
    `VoucherType`,
    `Description1`,
    `Status`,
    `DayBook`,
    `Payment_Status`
FROM `cts_kerala_new`.`accounts`;

-- ── activity ──
INSERT INTO `cts_kerala_migrated`.`activity`
  (`Activity_Id`, `Activity_Name`, `Amount`, `DeleteStatus`)
SELECT
    `Activity_Id`,
    `Activity_Name`,
    `Amount`,
    `DeleteStatus`
FROM `cts_kerala_new`.`activity`;

-- ── activity_details ──
INSERT INTO `cts_kerala_migrated`.`activity_details`
  (`Activity_Details_Id`, `Student_Id`, `Activity_Id`, `Amount`, `Entry_Date`, `Status`, `Descripition`, `Additional_Remark`, `NextFollowup_Date`, `Payment_Status`, `DeleteStatus`)
SELECT
    `Activity_Details_Id`,
    `Student_Id`,
    `Activity_Id`,
    `Amount`,
    `Entry_Date`,
    `Status`,
    `Descripition`,
    `Additional_Remark`,
    `NextFollowup_Date`,
    `Payment_Status`,
    `DeleteStatus`
FROM `cts_kerala_new`.`activity_details`;

-- ── activity_status ──
INSERT INTO `cts_kerala_migrated`.`activity_status`
  (`Activity_Status_Id`, `Activity_Status_Name`, `DeleteStatus`)
SELECT
    `Activity_Status_Id`,
    `Activity_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`activity_status`;

-- ── agent ──
INSERT INTO `cts_kerala_migrated`.`agent`
  (`Agent_Id`, `Agent_Name`, `Entry_Date`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Phone`, `Mobile`, `Whatsapp`, `DOB`, `Gender`, `Email`, `Alternative_Email`, `Passport_No`, `Passport_Expiry`, `User_Name`, `Password`, `Photo`, `GSTIN`, `Category_Id`, `Commission`, `User_Id`, `Expiry_Status`, `Payemt_Status`, `Expirty_Date`, `Verification_Code`, `Reg_No`, `Approval_Status`, `Comm_Address1`, `Comm_Address2`, `Comm_Address3`, `Comm_Address4`, `Comm_Pincode`, `Comm_Mobile`, `Center_Name`, `Center_Code`, `Client_Accounts_Id`, `Agent_Fees`, `Is_Registered`, `District_Id`, `Agent_No`, `Agent_District_No`, `DeleteStatus`, `Subscription_Start_Date`, `Subscription_End_Date`)
SELECT
    `Agent_Id`,
    `Agent_Name`,
    `Entry_Date`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Phone`,
    `Mobile`,
    `Whatsapp`,
    `DOB`,
    `Gender`,
    `Email`,
    `Alternative_Email`,
    `Passport_No`,
    `Passport_Expiry`,
    `User_Name`,
    `Password`,
    `Photo`,
    `GSTIN`,
    `Category_Id`,
    `Commission`,
    `User_Id`,
    `Expiry_Status`,
    `Payemt_Status`,
    `Expirty_Date`,
    `Verification_Code`,
    `Reg_No`,
    `Approval_Status`,
    `Comm_Address1`,
    `Comm_Address2`,
    `Comm_Address3`,
    `Comm_Address4`,
    `Comm_Pincode`,
    `Comm_Mobile`,
    `Center_Name`,
    `Center_Code`,
    `Client_Accounts_Id`,
    `Agent_Fees`,
    `Is_Registered`,
    `District_Id`,
    `Agent_No`,
    `Agent_District_No`,
    `DeleteStatus`,
    `Subscription_Start_Date`,
    `Subscription_End_Date`
FROM `cts_kerala_new`.`agent`;

-- ── agent_commision ──
INSERT INTO `cts_kerala_migrated`.`agent_commision`
  (`Agent_Commision_Id`, `Agent_Id`, `Category_Id`, `Category_Name`, `Commision_Per`, `Commision_Amount`, `User_Id`, `DeleteStatus`)
SELECT
    `Agent_Commision_Id`,
    `Agent_Id`,
    `Category_Id`,
    `Category_Name`,
    `Commision_Per`,
    `Commision_Amount`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`agent_commision`;

-- ── agent_course_selection ──
INSERT INTO `cts_kerala_migrated`.`agent_course_selection`
  (`Agent_Course_Selection_Id`, `Agent_Id`, `Course_Type_Id`, `Agent_Amount`, `DeleteStatus`)
SELECT
    `Agent_Course_Selection_Id`,
    `Agent_Id`,
    `Course_Type_Id`,
    `Agent_Amount`,
    `DeleteStatus`
FROM `cts_kerala_new`.`agent_course_selection`;

-- ── agent_course_type ──
INSERT INTO `cts_kerala_migrated`.`agent_course_type`
  (`Agent_Course_Type_Id`, `Agent_Id`, `Course_Type_Id`, `Cousrse_Type_Name`, `DeleteStatus`)
SELECT
    `Agent_Course_Type_Id`,
    `Agent_Id`,
    `Course_Type_Id`,
    `Cousrse_Type_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`agent_course_type`;

-- ── agent_receipt ──
INSERT INTO `cts_kerala_migrated`.`agent_receipt`
  (`Agent_Receipt_Id`, `Agent_Id`, `Receipt_Date`, `Amount`, `Mode`, `Description`, `User_Id`, `DeleteStatus`)
SELECT
    `Agent_Receipt_Id`,
    `Agent_Id`,
    `Receipt_Date`,
    `Amount`,
    `Mode`,
    `Description`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`agent_receipt`;

-- ── branch ──
INSERT INTO `cts_kerala_migrated`.`branch`
  (`Branch_Id`, `Branch_Name`, `Address`, `Location`, `District`, `State`, `Country`, `PinCode`, `Phone_Number`, `Email`, `Branch_Code`, `Company`, `DeleteStatus`)
SELECT
    `Branch_Id`,
    `Branch_Name`,
    `Address`,
    `Location`,
    `District`,
    `State`,
    `Country`,
    `PinCode`,
    `Phone_Number`,
    `Email`,
    `Branch_Code`,
    `Company`,
    `DeleteStatus`
FROM `cts_kerala_new`.`branch`;

-- ── branch_department ──
INSERT INTO `cts_kerala_migrated`.`branch_department`
  (`Branch_Department_Id`, `Branch_Id`, `Department_Id`, `DeleteStatus`)
SELECT
    `Branch_Department_Id`,
    `Branch_Id`,
    `Department_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`branch_department`;

-- ── candidate ──
INSERT INTO `cts_kerala_migrated`.`candidate`
  (`Candidate_Id`, `Candidate_Name`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Phone`, `Mobile`, `Whatsapp`, `DOB`, `Gender`, `Email`, `Alternative_Email`, `Passport_No`, `Passport_Expiry`, `User_Name`, `Password`, `Photo`, `Registered`, `Registered_By`, `Registered_On`, `Client_Accounts_Id`, `User_Id`, `Functional_Area_Id`, `Functional_Area_Name`, `Specialization_Id`, `Specialization_Name`, `Experience_Id`, `Experience_Name`, `Qualification_Id`, `Qualification_Name`, `Resume`, `Postlookingfor`, `Candidate_Followup_Id`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `By_User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `Entry_Type`, `To_User_Id`, `DeleteStatus`)
SELECT
    `Candidate_Id`,
    `Candidate_Name`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Phone`,
    `Mobile`,
    `Whatsapp`,
    `DOB`,
    `Gender`,
    `Email`,
    `Alternative_Email`,
    `Passport_No`,
    `Passport_Expiry`,
    `User_Name`,
    `Password`,
    `Photo`,
    `Registered`,
    `Registered_By`,
    `Registered_On`,
    `Client_Accounts_Id`,
    `User_Id`,
    `Functional_Area_Id`,
    `Functional_Area_Name`,
    `Specialization_Id`,
    `Specialization_Name`,
    `Experience_Id`,
    `Experience_Name`,
    `Qualification_Id`,
    `Qualification_Name`,
    `Resume`,
    `Postlookingfor`,
    `Candidate_Followup_Id`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `By_User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `Entry_Type`,
    `To_User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`candidate`;

-- ── candidate_followup ──
INSERT INTO `cts_kerala_migrated`.`candidate_followup`
  (`Candidate_Followup_Id`, `Candidate_Id`, `Entry_Date`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `By_User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `Entry_Type`, `To_User_Id`, `DeleteStatus`)
SELECT
    `Candidate_Followup_Id`,
    `Candidate_Id`,
    `Entry_Date`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `By_User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `Entry_Type`,
    `To_User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`candidate_followup`;

-- ── candidate_job_apply ──
INSERT INTO `cts_kerala_migrated`.`candidate_job_apply`
  (`Candidate_Job_Apply_Id`, `Candidate_Id`, `Job_Posting_Id`, `Entry_Date`, `Followupdate`, `Status_Id`, `Status_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Candidate_Job_Apply_Id`,
    `Candidate_Id`,
    `Job_Posting_Id`,
    `Entry_Date`,
    `Followupdate`,
    `Status_Id`,
    `Status_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`candidate_job_apply`;

-- ── category ──
INSERT INTO `cts_kerala_migrated`.`category`
  (`Category_Id`, `Category_Name`, `Commision_Percentage`, `User_Id`, `DeleteStatus`)
SELECT
    `Category_Id`,
    `Category_Name`,
    `Commision_Percentage`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`category`;

-- ── certificate_request ──
INSERT INTO `cts_kerala_migrated`.`certificate_request`
  (`Certificate_Request_Id`, `Student_Id`, `Date`, `Certificates_Id`, `Status`, `Description`, `File_Name`, `User_Id`, `Process_Date`, `DeleteStatus`)
SELECT
    `Certificate_Request_Id`,
    `Student_Id`,
    `Date`,
    `Certificates_Id`,
    `Status`,
    `Description`,
    `File_Name`,
    `User_Id`,
    `Process_Date`,
    `DeleteStatus`
FROM `cts_kerala_new`.`certificate_request`;

-- ── certificates ──
INSERT INTO `cts_kerala_migrated`.`certificates`
  (`Certificates_Id`, `Certificates_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Certificates_Id`,
    `Certificates_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`certificates`;

-- ── client_accounts ──
INSERT INTO `cts_kerala_migrated`.`client_accounts`
  (`Client_Accounts_Id`, `Account_Group_Id`, `Client_Accounts_Code`, `Client_Accounts_Name`, `Client_Accounts_No`, `Address1`, `Address2`, `Address3`, `Address4`, `PinCode`, `StateCode`, `GSTNo`, `PanNo`, `State`, `Country`, `Phone`, `Mobile`, `Email`, `Opening_Balance`, `Description1`, `Entry_Date`, `UserId`, `LedgerInclude`, `CanDelete`, `Commision`, `Opening_Type`, `Employee_Id`, `DeleteStatus`)
SELECT
    `Client_Accounts_Id`,
    `Account_Group_Id`,
    `Client_Accounts_Code`,
    `Client_Accounts_Name`,
    `Client_Accounts_No`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `PinCode`,
    `StateCode`,
    `GSTNo`,
    `PanNo`,
    `State`,
    `Country`,
    `Phone`,
    `Mobile`,
    `Email`,
    `Opening_Balance`,
    `Description1`,
    `Entry_Date`,
    `UserId`,
    `LedgerInclude`,
    `CanDelete`,
    `Commision`,
    `Opening_Type`,
    `Employee_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`client_accounts`;

-- ── company ──
INSERT INTO `cts_kerala_migrated`.`company`
  (`Company_Id`, `companyname`, `Phone1`, `Phone2`, `Mobile`, `Website`, `Email`, `Address1`, `Address2`, `Address3`, `Is_Delete`, `Logo`)
SELECT
    `Company_Id`,
    `companyname`,
    `Phone1`,
    `Phone2`,
    `Mobile`,
    `Website`,
    `Email`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Is_Delete`,
    `Logo`
FROM `cts_kerala_new`.`company`;

-- ── course ──
INSERT INTO `cts_kerala_migrated`.`course`
  (`Course_Id`, `Course_Name`, `Course_Type_Id`, `Course_Type_Name`, `Course_Code`, `Duration`, `User_Id`, `University_Id`, `Duration_Type_Id`, `Course_Mode`, `Course_Term`, `Duration_Name`, `Course_Fees`, `DeleteStatus`)
SELECT
    `Course_Id`,
    `Course_Name`,
    `Course_Type_Id`,
    `Course_Type_Name`,
    `Course_Code`,
    `Duration`,
    `User_Id`,
    `University_Id`,
    `Duration_Type_Id`,
    `Course_Mode`,
    `Course_Term`,
    `Duration_Name`,
    `Course_Fees`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course`;

-- ── course_duration ──
INSERT INTO `cts_kerala_migrated`.`course_duration`
  (`Course_Duration_Id`, `Course_Duration_Name`, `Course_Id`, `Duration_Type_Id`, `Duration`, `DeleteStatus`)
SELECT
    `Course_Duration_Id`,
    `Course_Duration_Name`,
    `Course_Id`,
    `Duration_Type_Id`,
    `Duration`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_duration`;

-- ── course_fees ──
INSERT INTO `cts_kerala_migrated`.`course_fees`
  (`Course_Fees_Id`, `Course_Id`, `Fees_Type_Id`, `Amount`, `No_Of_Instalment`, `Instalment_Period`, `Instalment_Type_Id`, `Agent_Amount`, `Total_Fees`, `University_Amount`, `Studymaterials_Fees`, `Coaching_Fees`, `Service_Fees`, `From_Year`, `To_Year`, `DeleteStatus`)
SELECT
    `Course_Fees_Id`,
    `Course_Id`,
    `Fees_Type_Id`,
    `Amount`,
    `No_Of_Instalment`,
    `Instalment_Period`,
    `Instalment_Type_Id`,
    `Agent_Amount`,
    `Total_Fees`,
    `University_Amount`,
    `Studymaterials_Fees`,
    `Coaching_Fees`,
    `Service_Fees`,
    `From_Year`,
    `To_Year`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_fees`;

-- ── course_import_details ──
INSERT INTO `cts_kerala_migrated`.`course_import_details`
  (`Course_Import_Details_Id`, `Course_Import_Master_Id`, `Course_Id`, `DeleteStatus`)
SELECT
    `Course_Import_Details_Id`,
    `Course_Import_Master_Id`,
    `Course_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_import_details`;

-- ── course_import_master ──
INSERT INTO `cts_kerala_migrated`.`course_import_master`
  (`Course_Import_Master_Id`, `Date`, `User_Id`, `DeleteStatus`)
SELECT
    `Course_Import_Master_Id`,
    `Date`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_import_master`;

-- ── course_subject ──
INSERT INTO `cts_kerala_migrated`.`course_subject`
  (`Course_Subject_Id`, `Course_Id`, `Part_Id`, `Subject_Id`, `Subject_Name`, `Minimum_Mark`, `Maximum_Mark`, `Online_Exam_Status`, `No_of_Question`, `Exam_Duration`, `Subject_Code`, `External_Minimum_Mark`, `External_Maximum_Mark`, `Internal_Minimum_Mark`, `Internal_Maximum_Mark`, `Technical_Minimum_Mark`, `Technical_Maximum_Mark`, `DeleteStatus`)
SELECT
    `Course_Subject_Id`,
    `Course_Id`,
    `Part_Id`,
    `Subject_Id`,
    `Subject_Name`,
    `Minimum_Mark`,
    `Maximum_Mark`,
    `Online_Exam_Status`,
    `No_of_Question`,
    `Exam_Duration`,
    `Subject_Code`,
    `External_Minimum_Mark`,
    `External_Maximum_Mark`,
    `Internal_Minimum_Mark`,
    `Internal_Maximum_Mark`,
    `Technical_Minimum_Mark`,
    `Technical_Maximum_Mark`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_subject`;

-- ── course_type ──
INSERT INTO `cts_kerala_migrated`.`course_type`
  (`Course_Type_Id`, `Course_Type_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Course_Type_Id`,
    `Course_Type_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`course_type`;

-- ── data_log_ ──
INSERT INTO `cts_kerala_migrated`.`data_log_`
  (`id`, `Description_`, `data_val`)
SELECT
    `id`,
    `Description_`,
    `data_val`
FROM `cts_kerala_new`.`data_log_`;

-- ── db_logs ──
INSERT INTO `cts_kerala_migrated`.`db_logs`
  (`Db_Logs_Id`, `Remark1`, `Remark2`)
SELECT
    `Db_Logs_Id`,
    `Remark1`,
    `Remark2`
FROM `cts_kerala_new`.`db_logs`;

-- ── department ──
INSERT INTO `cts_kerala_migrated`.`department`
  (`Department_Id`, `Department_Name`, `FollowUp`, `Status`, `Department_Order`, `Color`, `DeleteStatus`)
SELECT
    `Department_Id`,
    `Department_Name`,
    `FollowUp`,
    `Status`,
    `Department_Order`,
    `Color`,
    `DeleteStatus`
FROM `cts_kerala_new`.`department`;

-- ── district ──
INSERT INTO `cts_kerala_migrated`.`district`
  (`District_Id`, `District_Name`, `District_Code`, `DeleteStatus`)
SELECT
    `District_Id`,
    `District_Name`,
    `District_Code`,
    `DeleteStatus`
FROM `cts_kerala_new`.`district`;

-- ── document ──
INSERT INTO `cts_kerala_migrated`.`document`
  (`Document_Id`, `Student_Id`, `Document_Name`, `Files`, `DeleteStatus`)
SELECT
    `Document_Id`,
    `Student_Id`,
    `Document_Name`,
    `Files`,
    `DeleteStatus`
FROM `cts_kerala_new`.`document`;

-- ── duration_type ──
INSERT INTO `cts_kerala_migrated`.`duration_type`
  (`Duration_Type_Id`, `Duration_Type_Name`, `DeleteStatus`)
SELECT
    `Duration_Type_Id`,
    `Duration_Type_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`duration_type`;

-- ── exam_details ──
INSERT INTO `cts_kerala_migrated`.`exam_details`
  (`Exam_Details_Id`, `Exam_Master_Id`, `Question_Id`, `Question_Name`, `Option_1`, `Option_2`, `Option_3`, `Option_4`, `Question_Answer`, `DeleteStatus`)
SELECT
    `Exam_Details_Id`,
    `Exam_Master_Id`,
    `Question_Id`,
    `Question_Name`,
    `Option_1`,
    `Option_2`,
    `Option_3`,
    `Option_4`,
    `Question_Answer`,
    `DeleteStatus`
FROM `cts_kerala_new`.`exam_details`;

-- ── exam_master ──
INSERT INTO `cts_kerala_migrated`.`exam_master`
  (`Exam_Master_Id`, `Exam_Date`, `Student_Id`, `Subject_Id`, `Subject_Name`, `Start_Time`, `End_Time`, `Mark_Obtained`, `User_Id`, `DeleteStatus`)
SELECT
    `Exam_Master_Id`,
    `Exam_Date`,
    `Student_Id`,
    `Subject_Id`,
    `Subject_Name`,
    `Start_Time`,
    `End_Time`,
    `Mark_Obtained`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`exam_master`;

-- ── exam_status ──
INSERT INTO `cts_kerala_migrated`.`exam_status`
  (`Exam_Status_Id`, `Exam_Status_Name`, `DeleteStatus`)
SELECT
    `Exam_Status_Id`,
    `Exam_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`exam_status`;

-- ── experience ──
INSERT INTO `cts_kerala_migrated`.`experience`
  (`Experience_Id`, `Experience_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Experience_Id`,
    `Experience_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`experience`;

-- ── fees_receipt ──
INSERT INTO `cts_kerala_migrated`.`fees_receipt`
  (`Fees_Receipt_Id`, `Fees_Installment_Id`, `Course_Id`, `Course_Name`, `Student_Id`, `Fees_Type_Id`, `Fees_Type_Name`, `Amount`, `Date`, `DeleteStatus`)
SELECT
    `Fees_Receipt_Id`,
    `Fees_Installment_Id`,
    `Course_Id`,
    `Course_Name`,
    `Student_Id`,
    `Fees_Type_Id`,
    `Fees_Type_Name`,
    `Amount`,
    `Date`,
    `DeleteStatus`
FROM `cts_kerala_new`.`fees_receipt`;

-- ── fees_type ──
INSERT INTO `cts_kerala_migrated`.`fees_type`
  (`Fees_Type_Id`, `Fees_Type_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Fees_Type_Id`,
    `Fees_Type_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`fees_type`;

-- ── followup_type ──
INSERT INTO `cts_kerala_migrated`.`followup_type`
  (`Followup_Type_Id`, `Followup_Type_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Followup_Type_Id`,
    `Followup_Type_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`followup_type`;

-- ── functionl_area ──
INSERT INTO `cts_kerala_migrated`.`functionl_area`
  (`Functionl_Area_Id`, `Functionl_Area_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Functionl_Area_Id`,
    `Functionl_Area_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`functionl_area`;

-- ── gender ──
INSERT INTO `cts_kerala_migrated`.`gender`
  (`Gender_Id`, `Gender_Name`, `DeleteStatus`)
SELECT
    `Gender_Id`,
    `Gender_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`gender`;

-- ── general_settings ──
INSERT INTO `cts_kerala_migrated`.`general_settings`
  (`General_Settings_Id`, `Invoice_No`, `Purchase_Retrun_No`, `Sales_Return_No`, `Damage_No`, `Contra_Voucher_No`, `Journal_Voucher_No`, `Receipt_Voucher_No`, `Payment_Voucher_No`, `Cess`, `Voucher_No`, `Barcode`)
SELECT
    `General_Settings_Id`,
    `Invoice_No`,
    `Purchase_Retrun_No`,
    `Sales_Return_No`,
    `Damage_No`,
    `Contra_Voucher_No`,
    `Journal_Voucher_No`,
    `Receipt_Voucher_No`,
    `Payment_Voucher_No`,
    `Cess`,
    `Voucher_No`,
    `Barcode`
FROM `cts_kerala_new`.`general_settings`;

-- ── holiday_list ──
INSERT INTO `cts_kerala_migrated`.`holiday_list`
  (`Holiday_List_Id`, `Day`, `Month`, `DeleteStatus`)
SELECT
    `Holiday_List_Id`,
    `Day`,
    `Month`,
    `DeleteStatus`
FROM `cts_kerala_new`.`holiday_list`;

-- ── job_posting ──
INSERT INTO `cts_kerala_migrated`.`job_posting`
  (`Job_Posting_Id`, `Job_Code`, `Job_Title`, `Descritpion`, `Skills`, `No_Of_Vaccancy`, `Experience`, `Experience_Name`, `Job_Location`, `Qualification`, `Qualification_Name`, `Functional_Area`, `Functional_Area_Name`, `Specialization`, `Specialization_Name`, `Salary`, `Last_Date`, `Company_Name`, `Address`, `Contact_Name`, `Contact_No`, `Email`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Status`, `Logo`, `User_Id`, `DeleteStatus`)
SELECT
    `Job_Posting_Id`,
    `Job_Code`,
    `Job_Title`,
    `Descritpion`,
    `Skills`,
    `No_Of_Vaccancy`,
    `Experience`,
    `Experience_Name`,
    `Job_Location`,
    `Qualification`,
    `Qualification_Name`,
    `Functional_Area`,
    `Functional_Area_Name`,
    `Specialization`,
    `Specialization_Name`,
    `Salary`,
    `Last_Date`,
    `Company_Name`,
    `Address`,
    `Contact_Name`,
    `Contact_No`,
    `Email`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Status`,
    `Logo`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`job_posting`;

-- ── leads ──
INSERT INTO `cts_kerala_migrated`.`leads`
  (`Leads_Id`, `Leads_Name`, `Entry_Date`, `Address1`, `Address2`, `Address3`, `Phone`, `Mobile`, `Email`, `User_Id`, `Agent_Id`, `Status`, `Description`, `DeleteStatus`)
SELECT
    `Leads_Id`,
    `Leads_Name`,
    `Entry_Date`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Phone`,
    `Mobile`,
    `Email`,
    `User_Id`,
    `Agent_Id`,
    `Status`,
    `Description`,
    `DeleteStatus`
FROM `cts_kerala_new`.`leads`;

-- ── mark_list ──
INSERT INTO `cts_kerala_migrated`.`mark_list`
  (`Mark_List_Id`, `Student_Id`, `Student_Course_Part_Id`, `User_Id`, `Subject_Id`, `Subject_Name`, `Minimum_Mark`, `Maximum_Mark`, `Internal_Mark`, `External_Mark`, `Technical_Skill`, `Mark_Obtained`, `Grade`, `Exam_Status_Id`, `Part_Id`, `Part_Name`, `Month_Id`, `Month_Name`, `Year_Id`, `Year_Name`, `Course_Subject_Id`, `Online_Exam_Mark`, `Exam_Status_Name`, `DeleteStatus`)
SELECT
    `Mark_List_Id`,
    `Student_Id`,
    `Student_Course_Part_Id`,
    `User_Id`,
    `Subject_Id`,
    `Subject_Name`,
    `Minimum_Mark`,
    `Maximum_Mark`,
    `Internal_Mark`,
    `External_Mark`,
    `Technical_Skill`,
    `Mark_Obtained`,
    `Grade`,
    `Exam_Status_Id`,
    `Part_Id`,
    `Part_Name`,
    `Month_Id`,
    `Month_Name`,
    `Year_Id`,
    `Year_Name`,
    `Course_Subject_Id`,
    `Online_Exam_Mark`,
    `Exam_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`mark_list`;

-- ── menu ──
INSERT INTO `cts_kerala_migrated`.`menu`
  (`Menu_Id`, `Menu_Name`, `Menu_Order`, `IsEdit`, `IsSave`, `IsDelete`, `IsView`, `Menu_Status`, `Menu_Type`, `DeleteStatus`)
SELECT
    `Menu_Id`,
    `Menu_Name`,
    `Menu_Order`,
    `IsEdit`,
    `IsSave`,
    `IsDelete`,
    `IsView`,
    `Menu_Status`,
    `Menu_Type`,
    `DeleteStatus`
FROM `cts_kerala_new`.`menu`;

-- ── mode ──
INSERT INTO `cts_kerala_migrated`.`mode`
  (`Mode_Id`, `Mode_Name`, `DeleteStatus`)
SELECT
    `Mode_Id`,
    `Mode_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`mode`;

-- ── month_status ──
INSERT INTO `cts_kerala_migrated`.`month_status`
  (`Month_Status_Id`, `Month_Status_Name`, `DeleteStatus`)
SELECT
    `Month_Status_Id`,
    `Month_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`month_status`;

-- ── old_student_registration ──
INSERT INTO `cts_kerala_migrated`.`old_student_registration`
  (`Old_Student_Registration_Id`, `Old_Student_Registration_Student_Name`, `Old_Student_Registration_Date`, `Old_Student_Registration_No`, `Old_Student_Registration_Address1`, `Old_Student_Registration_Address2`, `Old_Student_Registration_Address3`, `Old_Student_Registration_Address4`, `Old_Student_Registration_Phone`, `Old_Student_Registration_Mobile`, `Old_Student_Registration_Email`, `Old_Student_Registration_user_id`, `Old_Student_Registration_entry_Date`, `Program`, `Section`, `Result_Id`, `Result`, `DeleteStatus`)
SELECT
    `Old_Student_Registration_Id`,
    `Old_Student_Registration_Student_Name`,
    `Old_Student_Registration_Date`,
    `Old_Student_Registration_No`,
    `Old_Student_Registration_Address1`,
    `Old_Student_Registration_Address2`,
    `Old_Student_Registration_Address3`,
    `Old_Student_Registration_Address4`,
    `Old_Student_Registration_Phone`,
    `Old_Student_Registration_Mobile`,
    `Old_Student_Registration_Email`,
    `Old_Student_Registration_user_id`,
    `Old_Student_Registration_entry_Date`,
    `Program`,
    `Section`,
    `Result_Id`,
    `Result`,
    `DeleteStatus`
FROM `cts_kerala_new`.`old_student_registration`;

-- ── online_exam_status ──
INSERT INTO `cts_kerala_migrated`.`online_exam_status`
  (`Online_Exam_Status_Id`, `Online_Exam_Status_Name`, `DeleteStatus`)
SELECT
    `Online_Exam_Status_Id`,
    `Online_Exam_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`online_exam_status`;

-- ── part ──
INSERT INTO `cts_kerala_migrated`.`part`
  (`Part_Id`, `Part_Name`, `User_Id`, `Part_SlNo`, `DeleteStatus`)
SELECT
    `Part_Id`,
    `Part_Name`,
    `User_Id`,
    `Part_SlNo`,
    `DeleteStatus`
FROM `cts_kerala_new`.`part`;

-- ── payment_mode ──
INSERT INTO `cts_kerala_migrated`.`payment_mode`
  (`Payment_Mode_Id`, `Payment_Mode_Name`, `DeleteStatus`)
SELECT
    `Payment_Mode_Id`,
    `Payment_Mode_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`payment_mode`;

-- ── payment_status ──
INSERT INTO `cts_kerala_migrated`.`payment_status`
  (`Payment_Status_Id`, `Payment_Status_Name`, `DeleteStatus`)
SELECT
    `Payment_Status_Id`,
    `Payment_Status_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`payment_status`;

-- ── payment_voucher ──
INSERT INTO `cts_kerala_migrated`.`payment_voucher`
  (`Payment_Voucher_Id`, `Date`, `Voucher_No`, `From_Account_Id`, `Amount`, `To_Account_Id`, `Payment_Mode`, `User_Id`, `Payment_Status`, `Description`, `DeleteStatus`)
SELECT
    `Payment_Voucher_Id`,
    `Date`,
    `Voucher_No`,
    `From_Account_Id`,
    `Amount`,
    `To_Account_Id`,
    `Payment_Mode`,
    `User_Id`,
    `Payment_Status`,
    `Description`,
    `DeleteStatus`
FROM `cts_kerala_new`.`payment_voucher`;

-- ── primary_details ──
INSERT INTO `cts_kerala_migrated`.`primary_details`
  (`Primary_Details_Id`, `Primary_Code`, `Primary_Name`, `DeleteStatus`)
SELECT
    `Primary_Details_Id`,
    `Primary_Code`,
    `Primary_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`primary_details`;

-- ── qualification ──
INSERT INTO `cts_kerala_migrated`.`qualification`
  (`Qualification_Id`, `Qualification_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Qualification_Id`,
    `Qualification_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`qualification`;

-- ── question ──
INSERT INTO `cts_kerala_migrated`.`question`
  (`Question_Id`, `Question_Name`, `Question_Import_Master_Id`, `Option_1`, `Option_2`, `Option_3`, `Option_4`, `Correct_Answer`, `Subject_Id`, `Subject_Name`, `Course_Id`, `Course_Name`, `Semester_Id`, `Semester_Name`, `University_Id`, `University_Name`, `DeleteStatus`)
SELECT
    `Question_Id`,
    `Question_Name`,
    `Question_Import_Master_Id`,
    `Option_1`,
    `Option_2`,
    `Option_3`,
    `Option_4`,
    `Correct_Answer`,
    `Subject_Id`,
    `Subject_Name`,
    `Course_Id`,
    `Course_Name`,
    `Semester_Id`,
    `Semester_Name`,
    `University_Id`,
    `University_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`question`;

-- ── question_import_details ──
INSERT INTO `cts_kerala_migrated`.`question_import_details`
  (`Question_Import_Details_Id`, `Question_Import_Master_Id`, `Course_Id`, `Course_Name`, `Part_Id`, `Part_Name`, `Subject_Id`, `Subject_Name`, `Question_Id`, `Question_Name`, `DeleteStatus`)
SELECT
    `Question_Import_Details_Id`,
    `Question_Import_Master_Id`,
    `Course_Id`,
    `Course_Name`,
    `Part_Id`,
    `Part_Name`,
    `Subject_Id`,
    `Subject_Name`,
    `Question_Id`,
    `Question_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`question_import_details`;

-- ── question_import_master ──
INSERT INTO `cts_kerala_migrated`.`question_import_master`
  (`Question_Import_Master_Id`, `Date`, `User_Id`, `Course_Id`, `Course_Name`, `Semester_Id`, `Semester_Name`, `Subject_Id`, `Subject_Name`, `University_Id`, `University_Name`, `DeleteStatus`)
SELECT
    `Question_Import_Master_Id`,
    `Date`,
    `User_Id`,
    `Course_Id`,
    `Course_Name`,
    `Semester_Id`,
    `Semester_Name`,
    `Subject_Id`,
    `Subject_Name`,
    `University_Id`,
    `University_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`question_import_master`;

-- ── receipt_voucher ──
INSERT INTO `cts_kerala_migrated`.`receipt_voucher`
  (`Receipt_Voucher_Id`, `Date`, `Voucher_No`, `From_Account_Id`, `Amount`, `Payment_Mode`, `User_Id`, `Payment_Status`, `To_Account_Id`, `Description`, `Bill_No`, `Student_Course_Id`, `Fees_Type_Id`, `Center_Code`, `Student_Fees_Installment_Details_Id`, `Service_Fees`, `Service_Tax_Per`, `Coaching_Fees`, `Coaching_Tax_Per`, `Entry_Date`, `DeleteStatus`)
SELECT
    `Receipt_Voucher_Id`,
    `Date`,
    `Voucher_No`,
    `From_Account_Id`,
    `Amount`,
    `Payment_Mode`,
    `User_Id`,
    `Payment_Status`,
    `To_Account_Id`,
    `Description`,
    `Bill_No`,
    `Student_Course_Id`,
    `Fees_Type_Id`,
    `Center_Code`,
    `Student_Fees_Installment_Details_Id`,
    `Service_Fees`,
    `Service_Tax_Per`,
    `Coaching_Fees`,
    `Coaching_Tax_Per`,
    `Entry_Date`,
    `DeleteStatus`
FROM `cts_kerala_new`.`receipt_voucher`;

-- ── settings ──
INSERT INTO `cts_kerala_migrated`.`settings`
  (`Settings_Id`, `Settings_Name`, `Settings_Group`, `Registration_No`, `DeleteStatus`)
SELECT
    `Settings_Id`,
    `Settings_Name`,
    `Settings_Group`,
    `Registration_No`,
    `DeleteStatus`
FROM `cts_kerala_new`.`settings`;

-- ── specialization ──
INSERT INTO `cts_kerala_migrated`.`specialization`
  (`Specialization_Id`, `Specialization_Name`, `User_Id`, `DeleteStatus`)
SELECT
    `Specialization_Id`,
    `Specialization_Name`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`specialization`;

-- ── status ──
INSERT INTO `cts_kerala_migrated`.`status`
  (`Status_Id`, `Status_Name`, `FollowUp`, `User_Id`, `Group_Id`, `DeleteStatus`)
SELECT
    `Status_Id`,
    `Status_Name`,
    `FollowUp`,
    `User_Id`,
    `Group_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`status`;

-- ── student ──
INSERT INTO `cts_kerala_migrated`.`student`
  (`Student_Id`, `Student_Name`, `Entry_Date`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Phone`, `Mobile`, `Whatsapp`, `DOB`, `Gender`, `Email`, `Alternative_Email`, `Passport_No`, `Passport_Expiry`, `User_Name`, `Password`, `Photo`, `User_Id`, `Registered_By`, `Registered`, `Registered_On`, `Student_Followup_Id`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `By_User_Id`, `To_User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `Registration_No`, `Role_No`, `Client_Accounts_Id`, `Aadhaar`, `Course_Name`, `Agent_Id`, `Status_Name`, `Agent_Name`, `By_User_Name`, `To_User_Name`, `Agent_Address`, `Center_Name`, `Center_Code`, `Agent_District_Id`, `User_Details_Name`, `Status_Followup`, `DeleteStatus`)
SELECT
    `Student_Id`,
    `Student_Name`,
    `Entry_Date`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Phone`,
    `Mobile`,
    `Whatsapp`,
    `DOB`,
    `Gender`,
    `Email`,
    `Alternative_Email`,
    `Passport_No`,
    `Passport_Expiry`,
    `User_Name`,
    `Password`,
    `Photo`,
    `User_Id`,
    `Registered_By`,
    `Registered`,
    `Registered_On`,
    `Student_Followup_Id`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `By_User_Id`,
    `To_User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `Registration_No`,
    `Role_No`,
    `Client_Accounts_Id`,
    `Aadhaar`,
    `Course_Name`,
    `Agent_Id`,
    `Status_Name`,
    `Agent_Name`,
    `By_User_Name`,
    `To_User_Name`,
    `Agent_Address`,
    `Center_Name`,
    `Center_Code`,
    `Agent_District_Id`,
    `User_Details_Name`,
    `Status_Followup`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student`;

-- ── student_course ──
INSERT INTO `cts_kerala_migrated`.`student_course`
  (`Student_Course_Id`, `Student_Id`, `Entry_Date`, `Course_Name_Details`, `Course_Id`, `Course_Name`, `Start_Date`, `End_Date`, `Join_Date`, `By_User_Id`, `Status`, `Course_Type_Id`, `Course_Type_Name`, `Duration`, `Agent_Amount`, `Total_Fees`, `University_Id`, `Certificate_Date`, `Certificate_Grade`, `Duration_Type_Id`, `Starting_Month`, `Starting_Year`, `Ending_Month`, `Ending_Year`, `Course_Duration_Id`, `DeleteStatus`)
SELECT
    `Student_Course_Id`,
    `Student_Id`,
    `Entry_Date`,
    `Course_Name_Details`,
    `Course_Id`,
    `Course_Name`,
    `Start_Date`,
    `End_Date`,
    `Join_Date`,
    `By_User_Id`,
    `Status`,
    `Course_Type_Id`,
    `Course_Type_Name`,
    `Duration`,
    `Agent_Amount`,
    `Total_Fees`,
    `University_Id`,
    `Certificate_Date`,
    `Certificate_Grade`,
    `Duration_Type_Id`,
    `Starting_Month`,
    `Starting_Year`,
    `Ending_Month`,
    `Ending_Year`,
    `Course_Duration_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_course`;

-- ── student_course_part ──
INSERT INTO `cts_kerala_migrated`.`student_course_part`
  (`Student_Course_Part_Id`, `Student_Id`, `Student_Course_Id`, `Part_Id`, `Part_Name`, `Month_Id`, `Month_Name`, `Year_Id`, `Year_Name`, `Mark_List_Issue_Date`, `DeleteStatus`)
SELECT
    `Student_Course_Part_Id`,
    `Student_Id`,
    `Student_Course_Id`,
    `Part_Id`,
    `Part_Name`,
    `Month_Id`,
    `Month_Name`,
    `Year_Id`,
    `Year_Name`,
    `Mark_List_Issue_Date`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_course_part`;

-- ── student_course_subject ──
INSERT INTO `cts_kerala_migrated`.`student_course_subject`
  (`Student_Course_Subject_Id`, `Student_Id`, `Course_Id`, `Course_Name`, `Subject_Id`, `Subject_Name`, `Part_Id`, `Minimum_Mark`, `Maximum_Mark`, `Online_Exam_Status`, `No_of_Question`, `Exam_Duration`, `Exam_Attended_Status`, `Obtained_Mark`, `Subject_Code`, `Course_Subject_Id`, `Student_Course_Id`, `DeleteStatus`)
SELECT
    `Student_Course_Subject_Id`,
    `Student_Id`,
    `Course_Id`,
    `Course_Name`,
    `Subject_Id`,
    `Subject_Name`,
    `Part_Id`,
    `Minimum_Mark`,
    `Maximum_Mark`,
    `Online_Exam_Status`,
    `No_of_Question`,
    `Exam_Duration`,
    `Exam_Attended_Status`,
    `Obtained_Mark`,
    `Subject_Code`,
    `Course_Subject_Id`,
    `Student_Course_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_course_subject`;

-- ── student_document ──
INSERT INTO `cts_kerala_migrated`.`student_document`
  (`Student_Document_Id`, `Student_Id`, `Entry_Date`, `File_Name`, `Document_Name`, `Document_Id`, `Document_File_Name`, `Description`, `DeleteStatus`)
SELECT
    `Student_Document_Id`,
    `Student_Id`,
    `Entry_Date`,
    `File_Name`,
    `Document_Name`,
    `Document_Id`,
    `Document_File_Name`,
    `Description`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_document`;

-- ── student_fees_installment_details ──
INSERT INTO `cts_kerala_migrated`.`student_fees_installment_details`
  (`Student_Fees_Installment_Details_Id`, `Student_Fees_Installment_Master_Id`, `Instalment_Date`, `Fees_Amount`, `Status`, `Tax_Percentage`, `Balance_Amount`, `Service_Fees`, `Coaching_Fees`, `Studymaterials_Fees`, `DeleteStatus`)
SELECT
    `Student_Fees_Installment_Details_Id`,
    `Student_Fees_Installment_Master_Id`,
    `Instalment_Date`,
    `Fees_Amount`,
    `Status`,
    `Tax_Percentage`,
    `Balance_Amount`,
    `Service_Fees`,
    `Coaching_Fees`,
    `Studymaterials_Fees`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_fees_installment_details`;

-- ── student_fees_installment_master ──
INSERT INTO `cts_kerala_migrated`.`student_fees_installment_master`
  (`Student_Fees_Installment_Master_Id`, `Student_Id`, `Student_Course_Id`, `Course_Fees_Id`, `Course_Id`, `Fees_Type_Id`, `Fees_Type_Name`, `Amount`, `No_Of_Instalment`, `Instalment_Period`, `Instalment_Type_Id`, `Instalment_Type_Name`, `DeleteStatus`)
SELECT
    `Student_Fees_Installment_Master_Id`,
    `Student_Id`,
    `Student_Course_Id`,
    `Course_Fees_Id`,
    `Course_Id`,
    `Fees_Type_Id`,
    `Fees_Type_Name`,
    `Amount`,
    `No_Of_Instalment`,
    `Instalment_Period`,
    `Instalment_Type_Id`,
    `Instalment_Type_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_fees_installment_master`;

-- ── student_followup ──
INSERT INTO `cts_kerala_migrated`.`student_followup`
  (`Student_Followup_Id`, `Student_Id`, `Entry_Date`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `By_User_Id`, `To_User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `Status_Name`, `By_User_Name`, `To_User_Name`, `Status_Followup`, `DeleteStatus`)
SELECT
    `Student_Followup_Id`,
    `Student_Id`,
    `Entry_Date`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `By_User_Id`,
    `To_User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `Status_Name`,
    `By_User_Name`,
    `To_User_Name`,
    `Status_Followup`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_followup`;

-- ── student_study_materials ──
INSERT INTO `cts_kerala_migrated`.`student_study_materials`
  (`Student_Study_Materials_Id`, `Student_Id`, `Study_Material_Id`, `Course_Id`, `Course_Name`, `Subject_Id`, `Subject_Name`, `Study_Material_Name`, `File_Name`, `DeleteStatus`)
SELECT
    `Student_Study_Materials_Id`,
    `Student_Id`,
    `Study_Material_Id`,
    `Course_Id`,
    `Course_Name`,
    `Subject_Id`,
    `Subject_Name`,
    `Study_Material_Name`,
    `File_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`student_study_materials`;

-- ── study_materials ──
INSERT INTO `cts_kerala_migrated`.`study_materials`
  (`Study_Materials_Id`, `Course_Id`, `Part_Id`, `Subject_Id`, `Course_Subject_Id`, `Study_Materials_Name`, `File_Name`, `DeleteStatus`)
SELECT
    `Study_Materials_Id`,
    `Course_Id`,
    `Part_Id`,
    `Subject_Id`,
    `Course_Subject_Id`,
    `Study_Materials_Name`,
    `File_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`study_materials`;

-- ── subject ──
INSERT INTO `cts_kerala_migrated`.`subject`
  (`Subject_Id`, `Subject_Name`, `Exam_status`, `User_Id`, `DeleteStatus`)
SELECT
    `Subject_Id`,
    `Subject_Name`,
    `Exam_status`,
    `User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`subject`;

-- ── university ──
INSERT INTO `cts_kerala_migrated`.`university`
  (`University_Id`, `University_Name`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Phone`, `Mobile`, `Email`, `User_Id`, `Website`, `Description1`, `Description2`, `Description3`, `University_Followup_Id`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `Followup_User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `To_User_Id`, `Starting_Year`, `Client_Accounts_Id`, `Back_Status`, `DeleteStatus`)
SELECT
    `University_Id`,
    `University_Name`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Phone`,
    `Mobile`,
    `Email`,
    `User_Id`,
    `Website`,
    `Description1`,
    `Description2`,
    `Description3`,
    `University_Followup_Id`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `Followup_User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `To_User_Id`,
    `Starting_Year`,
    `Client_Accounts_Id`,
    `Back_Status`,
    `DeleteStatus`
FROM `cts_kerala_new`.`university`;

-- ── university_activity ──
INSERT INTO `cts_kerala_migrated`.`university_activity`
  (`University_Activity_Id`, `University_Id`, `Activity_Id`, `Amount`, `DeleteStatus`)
SELECT
    `University_Activity_Id`,
    `University_Id`,
    `Activity_Id`,
    `Amount`,
    `DeleteStatus`
FROM `cts_kerala_new`.`university_activity`;

-- ── university_admission_month ──
INSERT INTO `cts_kerala_migrated`.`university_admission_month`
  (`University_Admission_Month_Id`, `University_Id`, `Month_Status_Id`, `DeleteStatus`)
SELECT
    `University_Admission_Month_Id`,
    `University_Id`,
    `Month_Status_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`university_admission_month`;

-- ── university_exam_month ──
INSERT INTO `cts_kerala_migrated`.`university_exam_month`
  (`University_Exam_Month_Id`, `University_Id`, `Month_Status_Id`, `DeleteStatus`)
SELECT
    `University_Exam_Month_Id`,
    `University_Id`,
    `Month_Status_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`university_exam_month`;

-- ── university_followup ──
INSERT INTO `cts_kerala_migrated`.`university_followup`
  (`University_Followup_Id`, `University_Id`, `Entry_Date`, `Next_FollowUp_Date`, `FollowUp_Difference`, `Status`, `User_Id`, `Remark`, `Remark_Id`, `FollowUp_Type`, `FollowUP_Time`, `Actual_FollowUp_Date`, `Entry_Type`, `To_User_Id`, `DeleteStatus`)
SELECT
    `University_Followup_Id`,
    `University_Id`,
    `Entry_Date`,
    `Next_FollowUp_Date`,
    `FollowUp_Difference`,
    `Status`,
    `User_Id`,
    `Remark`,
    `Remark_Id`,
    `FollowUp_Type`,
    `FollowUP_Time`,
    `Actual_FollowUp_Date`,
    `Entry_Type`,
    `To_User_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`university_followup`;

-- ── user_department ──
INSERT INTO `cts_kerala_migrated`.`user_department`
  (`User_Department_Id`, `User_Id`, `Department_Id`, `Branch_Id`, `View_Entry`, `VIew_All`, `DeleteStatus`)
SELECT
    `User_Department_Id`,
    `User_Id`,
    `Department_Id`,
    `Branch_Id`,
    `View_Entry`,
    `VIew_All`,
    `DeleteStatus`
FROM `cts_kerala_new`.`user_department`;

-- ── user_menu_selection ──
INSERT INTO `cts_kerala_migrated`.`user_menu_selection`
  (`User_Menu_Selection_Id`, `Menu_Id`, `User_Id`, `IsEdit`, `IsSave`, `IsDelete`, `IsView`, `Menu_Status`, `DeleteStatus`)
SELECT
    `User_Menu_Selection_Id`,
    `Menu_Id`,
    `User_Id`,
    `IsEdit`,
    `IsSave`,
    `IsDelete`,
    `IsView`,
    `Menu_Status`,
    `DeleteStatus`
FROM `cts_kerala_new`.`user_menu_selection`;

-- ── user_role ──
INSERT INTO `cts_kerala_migrated`.`user_role`
  (`User_Role_Id`, `User_Role_Name`, `Role_Under_Id`, `DeleteStatus`)
SELECT
    `User_Role_Id`,
    `User_Role_Name`,
    `Role_Under_Id`,
    `DeleteStatus`
FROM `cts_kerala_new`.`user_role`;

-- ── user_status ──
INSERT INTO `cts_kerala_migrated`.`user_status`
  (`User_Status_Id`, `User_Status_Name`, `Is_Delete`)
SELECT
    `User_Status_Id`,
    `User_Status_Name`,
    `Is_Delete`
FROM `cts_kerala_new`.`user_status`;

-- ── user_type ──
INSERT INTO `cts_kerala_migrated`.`user_type`
  (`User_Type_Id`, `User_Type_Name`, `DeleteStatus`)
SELECT
    `User_Type_Id`,
    `User_Type_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`user_type`;

-- ── users ──
INSERT INTO `cts_kerala_migrated`.`users`
  (`Users_Id`, `Users_Name`, `Password`, `Working_Status`, `User_Type`, `Role_Id`, `Agent_Id`, `Address1`, `Address2`, `Address3`, `Address4`, `Pincode`, `Mobile`, `Email`, `Employee_Id`, `Registration_Target`, `FollowUp_Target`, `DeleteStatus`)
SELECT
    `Users_Id`,
    `Users_Name`,
    `Password`,
    `Working_Status`,
    `User_Type`,
    `Role_Id`,
    `Agent_Id`,
    `Address1`,
    `Address2`,
    `Address3`,
    `Address4`,
    `Pincode`,
    `Mobile`,
    `Email`,
    `Employee_Id`,
    `Registration_Target`,
    `FollowUp_Target`,
    `DeleteStatus`
FROM `cts_kerala_new`.`users`;

-- ── voucher_type ──
INSERT INTO `cts_kerala_migrated`.`voucher_type`
  (`Voucher_Type_Id`, `Voucher_Type_Name`, `DeleteStatus`)
SELECT
    `Voucher_Type_Id`,
    `Voucher_Type_Name`,
    `DeleteStatus`
FROM `cts_kerala_new`.`voucher_type`;

-- Tables only in new schema (empty after migration – no source data):
--   skp_status
--   subscription
--   subscription_payment_status
--   subscription_status


-- ────────────────────────────────────────────────────────────
-- STEP 5 – Restore MySQL settings
-- ────────────────────────────────────────────────────────────

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- ============================================================
-- Migration complete!
-- Verify with:
--   SELECT TABLE_NAME, TABLE_ROWS
--   FROM information_schema.TABLES
--   WHERE TABLE_SCHEMA = 'cts_kerala_migrated';
-- ============================================================