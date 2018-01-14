//freeCOdeCamp

// Reverse String
// input "hello how are you"
// output "reverseString("hello how are you");

function reverseString2(str) {
  
    return str.split('').reverse().join('');
  }
function reverseString (str){
    str = str.split(' ').reverse();
    console.log(str);
    var lengthStr = str.length;
    for (var i = 0; i<lengthStr;i++){
        str[i]=str[i].split('').reverse().join('');
        console.log(str[i]);
    }
    str=str.join(' ');
    console.log(str);
    return str;
}
// console.log(reverseString2("how are you"));

function factorialNumber (num){
    if(num===0){
        num=1;
    }else{
        var isNum =1;
        for(var i=1;i<num;i++){
            isNum*=i+1;
        }
        num=isNum;
    }
    return num;
}
// console.log(factorialNumber(10));

function titleCase(str) {
    str=str.toLowerCase();
    str=str.split(' ');
    for(var i=0;i<str.length;i++){
     m=str[i].split('');
     
      m[0]=m[0].toUpperCase();
      str[i]=m.join('');
      
    }
    str=str.join(' ');
    return str;
  }
  
  titleCase("I'm a little tea pot");
  