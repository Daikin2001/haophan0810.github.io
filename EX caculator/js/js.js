// document.getElementById("number4").addEventListener("click", function(){
//     document.getElementById("txtDisplay").value += 4;
// })
var display=document.getElementById("txtDisplay");

var arrEle = document.getElementsByClassName ("btnInsertValue");
for (var i = 0; i<arrEle.length;i++) {
	arrEle[i].addEventListener("click",function(){
		var v =this.value;		
		display.value  += v;
	})
}

document.getElementById("clearAll").addEventListener("click",function () {
	display.value ="";
})

document.getElementById("equal").addEventListener("click",function () {
	if (display.value==""){
		return;
	}
	var exp = display.value.replace(/x/g,"*");
		exp = exp.replace(/÷/g,"/");
	console.log(exp);
	display.value = eval(exp);

})

document.getElementById("squareRoot").addEventListener("click",function () {
	var exp = display.value.replace(/x/g,"*");
		exp = exp.replace(/÷/g,"/");
	display.value = Math.sqrt(eval(exp));
})

document.getElementById("percent").addEventListener("click",function () {
	var exp = display.value.replace(/x/g,"*");
		exp = exp.replace(/÷/g,"/");
	display.value = eval(exp)/100;
})

document.getElementById("factorial").addEventListener("click",function(){
	var exp = display.value.replace(/x/g,"*");
		exp = exp.replace(/÷/g,"/");
	var res = factorial(eval(exp));
	display.value = res;
})
function factorial (num){
  var num;  
    var resuil=1
    if(num==1||num==0){        
      return resuil;
    }
    
    for(var i=2; i<=num;i++){
      resuil=resuil*i;     
     }      
    return resuil;
  
 
}

// document.getElementById("percent").addEventListener("click",function () {
// 	var v =this.value;	
// 	display.value += v;
// })
console.log(display.value);

// document.getElementById().addEventListener("click",function () {
// 	// body...
// })