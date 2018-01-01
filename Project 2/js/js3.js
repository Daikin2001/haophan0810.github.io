window.addEventListener('DOMContentLoaded', function () {
    var numberImgSlide = document.querySelectorAll('aside#wrap-slide ul li.slide');
    var imgs = document.querySelectorAll('ul li div.slide-img');

    var h2s= document.querySelectorAll('div.slide-description h2');
    var divLines = document.querySelectorAll('div.slide-line');
    var aShopNow = document.querySelectorAll('a.slide-shop-now');

    console.log(imgs);
    var numberCircle = document.querySelectorAll('div ul.slide-circle-routing li');
    var imgCurrentShow = document.querySelector('.show-circle');
    var indexCurrent = imgCurrentShow.getAttribute('data-index');
    var indexEachCircle =0;
    var lengthImg=numberCircle.length;
    var getIndex;
    var arrClassSlides = ["img-next-in0","img-next-in1","img-next-in0","img-next-in1","img-next-in0"];
    var autoSlide = setInterval(function(){
        if (indexCurrent==lengthImg-1){
            getIndex=0;
        }else {
            getIndex= parseInt(indexCurrent)+1;            
        }
        console.log(getIndex);
        
        for (var i = 0; i < lengthImg;i++){
            numberCircle[i].classList.remove('show-circle');
        }      
        numberCircle[indexCurrent].classList.remove('show-circle');
        numberCircle[getIndex].classList.add('show-circle');
        // img show remove class show
        for (var i =0; i<lengthImg;i++){
            numberImgSlide[i].classList.remove('show-img-slide','slide-current-out','slide-next-in');
            imgs[i].classList.remove(arrClassSlides[i]);
            h2s[i].classList.remove('slide-next-in');
            divLines[i].classList.remove('slide-next-in');
            aShopNow[i].classList.remove('slide-next-in');
            
        }
        //slide add 
        numberImgSlide[getIndex].classList.add('show-img-slide');        
        numberImgSlide[indexCurrent].classList.add('slide-current-out');
        numberImgSlide[getIndex].classList.add('slide-next-in');
        imgs[getIndex].classList.add(arrClassSlides[getIndex]);
        h2s[getIndex].classList.add('slide-next-in');
        divLines[getIndex].classList.add('slide-next-in');
        aShopNow[getIndex].classList.add('slide-next-in');
        indexCurrent=getIndex;


    },10000)
    // click each circle

  for (var i = 0; i<lengthImg; i++){
      numberCircle[i].addEventListener('click',function(){
        for (var i = 0; i < lengthImg;i++){
            numberCircle[i].classList.remove('show-circle');
        }
        // lay index click
        getIndex= this.getAttribute ('data-index');
        numberCircle[indexCurrent].classList.remove('show-circle');
        numberCircle[getIndex].classList.add('show-circle');
        // img show remove class show
        for (var i =0; i<lengthImg;i++){
            numberImgSlide[i].classList.remove('show-img-slide','slide-current-out','slide-next-in');
            imgs[i].classList.remove(arrClassSlides[i]);
            h2s[i].classList.remove('slide-next-in');
            divLines[i].classList.remove('slide-next-in');
            aShopNow[i].classList.remove('slide-next-in');
            
        }
        //slide add 
        numberImgSlide[getIndex].classList.add('show-img-slide');        
        numberImgSlide[indexCurrent].classList.add('slide-current-out');
        numberImgSlide[getIndex].classList.add('slide-next-in');
        imgs[getIndex].classList.add(arrClassSlides[getIndex]);
        h2s[getIndex].classList.add('slide-next-in');
        divLines[getIndex].classList.add('slide-next-in');
        aShopNow[getIndex].classList.add('slide-next-in');
        indexCurrent=getIndex;
        
      })
     
     
  }
 


})