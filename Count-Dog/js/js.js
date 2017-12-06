var m=0;
// function countClick(n) {
    
//     m++;
//     document.getElementById('result').innerHTML=m;
//     console.log(m);

// }



var dog1 = {
    name:"dog1",
    count:0,
    src:'image/dog1.jpeg'
}
var dog2 = {
    name:"dog2",
    count:0,
    src:'image/dog2.jpeg'
}
var dog3 = {
    name:"dog3",
    count:0,
    src:'image/dog3.jpeg'
}
var dog4 = {
    name:"dog4",
    count:0,
    src:'image/dog4.jpeg'
}
var dog5 = {
    name:"dog5",
    count:0,
    src:'image/dog5.jpeg'

}
var arrDog = [dog1,dog2,dog3,dog4,dog5]
$('li').on('click',function(){
    var x= $(this).attr('data-name');
console.log(x);
    $('#anh1').attr('src',arrDog[x].src);
     $('#ten1').text(arrDog[x].name);
    $('#result').text(arrDog[x].count );


})

// for (var i=0;i<arrDog.length;i++){
// var test= $('li')[i];
// test.onclick=function(){
//     var x = test.attr
// }
// }

// $('#dog1').click(function(){
//     $('#anh1').attr('src',arrDog[0].src);
//     $('#ten1').text(arrDog[0].name);
//     $('#result').text(arrDog[0].count );
// })
// $('#dog2').click(function(){
//     $('#anh1').attr('src',arrDog[1].src);
//     $('#ten1').text(arrDog[1].name);
//     $('#result').text(arrDog[1].count );
// })
// $('#dog3').click(function(){
//     $('#anh1').attr('src',arrDog[2].src);
//     $('#ten1').text(arrDog[2].name);
//     $('#result').text(arrDog[2].count );
// })
// $('#dog4').click(function(){
//     $('#anh1').attr('src',arrDog[3].src);
//     $('#ten1').text(arrDog[3].name);
//     $('#result').text(arrDog[3].count );
// })
// $('#dog5').click(function(){
//     $('#anh1').attr('src',arrDog[4].src);
//     $('#ten1').text(arrDog[4].name);
//     $('#result').text(arrDog[4+].count );
// })
function countClick(n) {
    var countElement =$('img').attr('src');
    console.log(countElement);
    for (var i=0; i<arrDog.length;i++){
        if (arrDog[i].src==countElement){
            arrDog[i].count +=1;
            $('#result').text(arrDog[i].count );
        }
    }
   
   

    

}