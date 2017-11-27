function changeValue(n) {
    var m = parseInt(n.value) ;
    var re1 = 2 * m / Math.log2(m);
    var result = Math.ceil(re1);     
    var re3 = Math.round(re1)
    var re2 = re1.toFixed(1);
    
    if (n.value==1){
        console.log('dsd');
        $('#dialog').html('');
        $('#result').html('0');
        return;
    }
    if (n.value.length>3 | n.value.match(/^\d+$/)==null ){
        $('#dialog').html("Error! (Nhập số không quá 4 chữ số)");
        
    }else {
        $('#dialog').html('');
        console.log(re2);
        $('#result').html(re2);
    
    }
    
    
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


///c2
    
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