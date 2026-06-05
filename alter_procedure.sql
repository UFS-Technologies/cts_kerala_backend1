DELIMITER //
DROP PROCEDURE IF EXISTS cts_db.Search_Student_SKP //
CREATE PROCEDURE cts_db.Search_Student_SKP( In Fromdate_ date,Todate_ date,
SearchbyName_ varchar(50),By_User_ int,Status_Id_ int,Is_Date_Check_ Tinyint,
Page_Index1_ int,Page_Index2_ int,Login_User_Id_ int,RowCount int ,RowCount2 int,Register_Value int,Agent_Id_ int)
Begin 
declare SearchbyName_Value varchar(2000);declare UnionQuery varchar(4000);declare Search_Date_ varchar(500);
declare Search_Date_union varchar(500);declare pos1frm int;declare pos1to int;declare pos2frm int;
declare pos2to int; declare PageSize int;declare Search_By_Registered varchar(500);declare User_Status int;declare more_info int;
declare Logged_In_Agent_Id int;
 set pos1frm=0;    set pos1to=0;    set pos2frm=0;    set pos2to=0;    set PageSize=10; set more_info=0;
 set SearchbyName_Value=''; set Search_Date_='';
 set User_Status= (select Working_Status from Users where Users_Id=Login_User_Id_ );
 set Logged_In_Agent_Id= (select Agent_Id from Users where Users_Id=Login_User_Id_ );
 if(SearchbyName_ !='') then
	set SearchbyName_Value = replace(replace(SearchbyName_Value,'+',''),' ','');
	SET SearchbyName_Value =   Concat( SearchbyName_Value,' and (student.Student_Name like ''%',SearchbyName_ ,'%'' or  replace(replace(student.Phone,''+'',''''),'' '','''') like ''%',SearchbyName_ ,'%''
	or  replace(replace(student.Whatsapp,''+'',''''),'' '','''')  like ''%',SearchbyName_ ,'%'' or  student.Email like ''%',SearchbyName_ ,'%'' or student.Alternative_Email like ''%',SearchbyName_ ,'%'') ') ;
end if;

if Register_Value=2 then
	Set SearchbyName_Value= Concat( SearchbyName_Value,' and student.Registered= ',1) ;
elseif Register_Value=3 then
    Set SearchbyName_Value= Concat( SearchbyName_Value,' and student.Registered= ',0) ;
end if;
if By_User_>0 then
	SET SearchbyName_Value =concat(SearchbyName_Value,' and student.By_User_Id =',By_User_);
end if;
if Status_Id_>0 then
	SET SearchbyName_Value =concat(SearchbyName_Value,' and student.Status =',Status_Id_);
end if;
if(SearchbyName_ !='') then
	set Is_Date_Check_=false;
end if;
if Agent_Id_>0 then
	SET SearchbyName_Value =concat(SearchbyName_Value,' and student.Agent_Id =',Agent_Id_);
end if;

if Logged_In_Agent_Id>0 then
	SET SearchbyName_Value =concat(SearchbyName_Value,' and student.Agent_Id =',Logged_In_Agent_Id   );
end if;

if Is_Date_Check_=true then
	set Search_Date_=concat( ' and date(student.Next_FollowUp_Date) >= ''', Fromdate_ ,''' and date(student.Next_FollowUp_Date) <= ''', Todate_,'''');
	set Search_Date_union=concat( ' and  date(student.Next_FollowUp_Date) < ''', Fromdate_,'''');
ELSE
	set Search_Date_= 'and 1 =1 ';
end if;
set UnionQuery='';

if Is_Date_Check_=true then
set UnionQuery=concat('  union select * from(select  CAST(CAST(2 AS UNSIGNED) AS SIGNED)   as tp,student.Student_Id,
student.Student_Name,student.Mobile,student.Remark,(Date_Format(student.Next_FollowUp_Date,''%d-%m-%Y'')) As Next_FollowUp_Date,
Status_Name,To_User_Name Users_Name,
CAST(CAST(ROW_NUMBER()OVER(ORDER BY student.Student_Id DESC,Student.Next_FollowUp_Date desc)AS UNSIGNED)AS SIGNED)AS
RowNo,student.Registered,1 as User_Status,0 as more_info,Agent_Name as Agent_Name
from student 
where student.DeleteStatus=0',SearchbyName_Value, ' ' ,Search_Date_union,'
)as lds WHERE RowNo >=',RowCount,' AND RowNo<= ',RowCount2
);
end if;
SET @query = Concat( 'select * from (select * from(select CAST(CAST(1 AS UNSIGNED) AS SIGNED)as tp,student.Student_Id,
student.Student_Name,student.Mobile,student.Remark,(Date_Format(student.Next_FollowUp_Date,''%d-%m-%Y'')) As Next_FollowUp_Date,
Status_Name,To_User_Name Users_Name,
CAST(CAST(ROW_NUMBER()OVER(ORDER BY student.Student_Id DESC,Student.Next_FollowUp_Date desc)AS UNSIGNED)AS SIGNED)AS
RowNo,student.Registered,1 as User_Status,0 as more_info,Agent_Name as Agent_Name
from student 
where student.DeleteStatus=0 ', SearchbyName_Value,' ',Search_Date_,'
)as lds  WHERE RowNo >=',Page_Index1_,' AND RowNo<= ', Page_Index2_,UnionQuery,'
)as ldtwo order by tp, RowNo LIMIT ',PageSize
);
PREPARE QUERY FROM @query;EXECUTE QUERY;

INSERT INTO data_log_ VALUES (0, @query, '');

END //
DELIMITER ;
