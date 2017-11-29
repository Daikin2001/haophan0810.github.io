var  valueInput;
// function fressKey() {
//     console.log (valueInput);
//     var arrKeyCode =[8,46,37,49,17,91,18,93,18,112,113,114,115,116,117,118,119,120,121,123]
//     for (var i=0; i<arrKeyCode.length;i++){
//         if (window.event.keyCode==arrKeyCode[i] )
//         {
//             console.log(event.keyCode);
//             return true;
//         }
//     }
    
//     if (window.event.keyCode==69 ||valueInput.length>2){
//         console.log('asdas');
//         return false;
//     }else {
//         console.log('else');
//         return true;
//     }
// }
function changeValue(n) {
    valueInput=n.value;
    var m = parseInt(n.value) ;
    var re1 = 2 * m / Math.log2(m);
    var result = Math.ceil(re1);     
    var re3 = Math.round(re1)
    var re2 = re1.toFixed(1);
    
    if (n.value==1|n.value==''){
        console.log('dsd');
        $('#dialog').html('');
        $('#result').html('0');
        
    }else if (n.value.length >3) {
        $('#dialog').html("Error! (Nhập số không quá 4 chữ số)");
    }else {
        $('#dialog').html('');
        $('#result').html(re2);
    }
    // if (n.value.length>3 | n.value.match(/^\d+$/)==null ){
    //     $('#dialog').html("Error! (Nhập số không quá 4 chữ số)");
        
    // }else {
    //     $('#dialog').html('');
    //     console.log(re2);
    //     $('#result').html(re2);
    
    // }
    
    
}


    // var arrImg = ['1','2','3','4']
    // var temp = 1;
 
    // setInterval(function(){
        
    //     if (temp==arrImg.length){
    //         temp=0;
    //     }
    //     temp+=1;
    //     console.log ("dada");
    //     var img = '<img src="image/slide'+temp+'.jpg" alt="">';
    //     $('.slide').html(img);
    // },4000);
//


//slide2
    
 var imgs =$('.slide').children('img');
 console.log(imgs);
 var count =0;
 imgs.eq(count).show();
 
 setInterval(function(){
    imgs.eq(count).fadeOut(1000);
    count+=1; 
    imgs.eq(count).fadeIn(1000);
   if (count==imgs.length){
       count=-1;
       imgs.eq(0).fadeIn(1000);
   }        
},3500);