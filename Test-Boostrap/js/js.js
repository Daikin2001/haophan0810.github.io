var imgs =$('.slide-image').children('img');
console.log(imgs);
var isNum = 0;
var count =0;
imgs.eq(count).show();

setInterval(function(){    
    
   imgs.eq(count).fadeOut(1000); 
   isNum+=1;    
   console
   count=isNum%5;
   console.log(count);
   imgs.eq(count).fadeIn(1000);    

},3000);

