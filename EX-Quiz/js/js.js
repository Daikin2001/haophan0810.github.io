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
 var nQ=document.getElementById("numberQuestion");
 var q= document.getElementById("question");
 var a1= document.getElementById("btnAnswer1");
 var a2= document.getElementById("btnAnswer2");
 var a3= document.getElementById("btnAnswer3");
 var a4= document.getElementById("btnAnswer4");
 var foot = document.getElementById("footer");
 var temp=1;
 var mark=0;

 nQ.innerHTML= "Câu số "+temp+":"; 
 q.innerHTML = arr[0].question;
 a1.innerHTML = arr[0].choose1;
 a2.innerHTML = arr[0].choose2;
 a3.innerHTML = arr[0].choose3;
 a4.innerHTML = arr[0].choose4;
 foot.innerHTML = "<p class='foot'>Câu số "+temp+ " / "+arr.length+"</p>";

 var btnElemt = document.getElementsByClassName("btnAnswer");
 
 for(var i=0; i<btnElemt.length; i++){
 	btnElemt[i].addEventListener("click",function(){
 		var res=this.innerText;
 		if(res==arr[temp-1].answer){
 			mark+=1;
 		}
 		console.log(this.innerText);
		if(temp<arr.length){

		nQ.innerHTML= "Câu số "+(temp+1)+":"; 
		 q.innerHTML = arr[temp].question;
		 a1.innerHTML = arr[temp].choose1;
		 a2.innerHTML = arr[temp].choose2;
		 a3.innerHTML = arr[temp].choose3;
		 a4.innerHTML = arr[temp].choose4;
 		foot.innerHTML = "<p class='foot'>Câu số "+(temp+1)+ " / "+arr.length+"</p>";

		}else if(mark==6){
			var win=document.getElementById("wrap");
			win.innerHTML= "<h1>Bạn đã chiến thắng, xin chúc mừng</h1>";
		}else {
			document.getElementById("questions").style.display="none";
			document.getElementById("answer").style.display="none";
			document.getElementById("footer").style.display="none";
			document.getElementById("resAlert1").innerHTML= "<h1>Rất tiếc bạn đã thất bại</h1>";
			document.getElementById("resAlert2").innerHTML= "<h3>Bạn đã trả lời đúng "+mark +" câu hỏi</h3>";
			document.getElementById("resAlert3").innerHTML="<button id='back' onclick='clickBtnBack()'>Chơi lại nào</button>";
		}
		
		temp+=1;
		 console.log(temp);
	})
 }
 
 function clickBtnBack (){
 	document.getElementById("resAlert1").innerHTML= "";
	document.getElementById("resAlert2").innerHTML= "";
	document.getElementById("resAlert3").innerHTML= "";
  	document.getElementById("questions").style.display="block";
	document.getElementById("answer").style.display="block";
	document.getElementById("footer").style.display="block";
	temp=1;
	mark=0;
	console.log(temp);
	nQ.innerHTML= "Câu số "+temp+":"; 
	 q.innerHTML = arr[0].question;
	 a1.innerHTML = arr[0].choose1;
	 a2.innerHTML = arr[0].choose2;
	 a3.innerHTML = arr[0].choose3;
	 a4.innerHTML = arr[0].choose4;
	 foot.innerHTML = "<p class='foot'>Câu số "+temp+ " / "+arr.length+"</p>";
 }