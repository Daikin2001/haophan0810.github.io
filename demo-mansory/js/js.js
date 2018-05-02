$(function(){

    var $effect=$('.main-content').isotope({
        // options
        itemSelector: '.post',
        layoutMode: 'masonry'
      });
    
      $effect.imagesLoaded().progress( function() {
        $effect.isotope('layout');
      });
      var isActive = false;
      var elmBtn = document.querySelectorAll('.filter');
      console.log('elmBtn :', elmBtn);
      for (let i = 0; i<elmBtn.length; i++){
          elmBtn[i].onclick=function(){
            var attr =  this.getAttribute("data-className");
            if (isActive){
                for (let j = 0; j< elmBtn.length; j++){
                    elmBtn[j].classList.remove('active');
                }
            }
           
            this.classList.add('active');
            $effect.isotope({
                filter:attr
            })
            console.log('attr :', attr);
              console.log('this :', this);
          }
          isActive=true;
          console.log('isActive :', isActive);
      }
})
