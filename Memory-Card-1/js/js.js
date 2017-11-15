$(document).ready(function(){
    var arrContainImg = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11];
    function shuffle(arrContainImg) {
        var currentIndex = arrContainImg.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = arrContainImg[currentIndex];
            arrContainImg[currentIndex] = arrContainImg[randomIndex];
            arrContainImg[randomIndex] = temporaryValue;
      }
    
      return arrContainImg;
    }
    shuffle(arrContainImg);
    loadCard(arrContainImg);
    function loadCard (arr){    
        var divImg ='<div class="front"><img src="image/front.png" alt=""></div>';   
        console.log ("dasdasd");
        for (var i=0; i<arr.length; i++){
            var divImgBack='<div class="back"><img src="image/i'+arr[i]+'.jpg" alt=""></div>';
            $('#content').append ('<div class="contain">'+'<div class="card">'+divImgBack+divImg+'</div></div>');
        }
    }

    $('.card').on('click',function(){
        console.log($(this));
        $(this).addClass('flipped');
        
    });











    
})