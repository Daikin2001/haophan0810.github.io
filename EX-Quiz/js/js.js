var question1 ={
	question:"Where's Paris?",
	choose1:"Viet Nam",
	choose2:"Thai Land",
	choose3:"France",
	choose4:"England",
	answer:"France"

}

var question2 ={
	question:"Đây là cửa khẩu nằm trên biên giới Lào - Việt?",
	choose1:"Cầu Treo",
	choose2:"Bà Xía",
	choose3:"Mộc Bài",
	choose4:"Lào Cai",
	answer:"Bà Xía"

}

var question3 ={
	question:"Đây là cảng biển mở lối ra biển thuận lợi cho vùng Đông Bắc Cam - pu - chia?",
	choose1:"Hải Phòng",
	choose2:"Lào Cai",
	choose3:"Bắc Kạn",
	choose4:"Nghệ An",
	answer:"Nghệ An"

}

var question4 ={
	question:"Quần đảo Trường Sa thuộc ...?",
	choose1:"Hải Phòng",
	choose2:"Vũng Tàu",
	choose3:"Khánh Hòa",
	choose4:"Nghệ An",
	answer:"Vũng Tàu"

}

var question5 ={
	question:"Loại gió có tác động thường xuyên đến toàn bộ lãnh thổ nước ta là?",
	choose1:"Gió Lào",
	choose2:"Gió mùa",
	choose3:"Gió phơn",
	choose4:"Gió địa phương",
	answer:"Gió Lào"

}

var question6 ={
	question:"Vấn đề chủ quyền biên giới quốc gia trên đất liền, Việt Nam cần tiếp tục đàm phán với?",
	choose1:"Trung Quốc",
	choose2:"Campuchia",
	choose3:"Lào",
	choose4:"Thái Lan",
	answer:"Trung Quốc"

}
 var arr = [question1,question2,question3,question4,question5,question6];

 var q= document.getElementById("questions");
 var a1= document.getElementById("btnAnswer1");
 var a2= document.getElementById("btnAnswer2");
 var a3= document.getElementById("btnAnswer3");
 var a4= document.getElementById("btnAnswer4");

 q.innerHTML = "<h2>"+ arr[0].question+"</h2>";
 a1.innerHTML = arr[0].choose1;
 a2.innerHTML = arr[0].choose2;
 a3.innerHTML = arr[0].choose3;
 a4.innerHTML = arr[0].choose4;

