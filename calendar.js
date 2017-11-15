var today=new Date();
var year=today.getFullYear();//获取年份
var month=today.getMonth()+1;//获取月份
var day=today.getDate();//获取日期
function showMonth()
{
		var year_month=year+"年"+month+"月";
		document.getElementById("month").innerHTML=year_month;
}
var allday=0;
//计算当前月份总共有多多少天
function count()
{
	if (month !=2){
		if ((month==4) || (month==6) || (month==9) || (month==11)){
			allday=30;
		}
		else{
			allday=30;
		}
	}
	else{
		if(((year%4)==0&&(year%100)!=0)&&(year%400==0)){
			allday=29;
		}
		else{
			allday=28;
		}
	}	

}
//获取当前月份的第一天是星期几
function showDate()
{
	showMonth();//在显示板上显示当前日期
	count();//计算当前月份总共有多多少天
	//获取当前月份的第一天的日期对象
	var firstdate=new Date(year,month-1,1);
	//推算是星期几
	var xq=firstdate.getDay();
	//显示当前月份的日历
	//动态添加html元素
	var daterow=document.getElementById("day");
	daterow.innerHTML="";
	//给第一天前的每一天添加空白区域
	if (xq!=0){
		for(var i=0;i<xq;i++){
			var dayElement=document.createElement("div");
			dayElement.className="everyday";
			daterow.appendChild(dayElement);
		}
	}
	//使用循环语句显示当前月份的所有日期
	for(var j=1;j<=allday;j++){
		var dayElement=document.createElement("div");
		dayElement.className="everyday";
		dayElement.innerHTML=j+"";
		//如果日期为今天，用红色显示
		if(j==day){
			dayElement.style.color="red";
		}
		daterow.appendChild(dayElement);
	}
}
function lastMonth(){
if (month>1){
	month=month-1;
}
else{
	month=12;
	year=year-1;
}
showDate();
}
function nextMonth(){
if (month<12){
	month=month+1;
}
else{
	month=1;
	year=year+1;
}
showDate();
}