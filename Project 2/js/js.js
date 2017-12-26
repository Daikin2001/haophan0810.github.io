$(document).ready(function () {
    new WOW().init();
   
    

    
    

    var objHeight = 0;
    $.each($('.slide-image'), function () {

        objHeight = $(this).height();
    });
    $('#slide-images').height(objHeight);

    

    //after load, show popup
    // $('#start-wrap').addClass('show-start-wrap');
    // $('#show-sale-start').addClass('show-sale-start');
    // var showPTitleStart = setInterval(function(){
    //     $('#title-sale-start').addClass('title-sale-start');

    //     clearInterval(showPTitleStart);
    // },500);
    // var showContentStart = setInterval(function(){
    //  $('p.content-sale-start,h1.content-sale-start').addClass('effect-content-sale-start');
    //     clearInterval(showContentStart);
    // },800);
    // //close when click x
    // $('i.content-sale-start').click(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');
    //     console.log(this);;
    // })
    // //au to close
    // var closeStartSale = setInterval(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');


    //     clearInterval(closeStartSale);
    // },5000);

    //Auto set height for div slide
    var slideImg = $('.slide-image');
    var circleSlide= $('.circle-slide');

    //Auto play slide
    setInterval(function(){
        $('#arrow-next').trigger('click');    

    },4000)
    //Click arrow Next
    $('#arrow-next').click(function () {
        $('.slide-image').removeClass('add-transition');        
        var nextSlide = $('.active').next();
        var _this = this;
        console.log(nextSlide.index());
        $(this).css('pointer-events', 'none');
        $('.active-circle').removeClass('active-circle');
        
        if (nextSlide.index() < slideImg.length) {
            $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
                $('.current-slide-out').removeClass('current-slide-out');
            });

            nextSlide.addClass('next-slide-in').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in').addClass('active').removeClass('next-slide-in');
                setTimeout(function () {
                    $(_this).css('pointer-events', 'auto');
                }, 500);
                
            });
           console.log(nextSlide.index());
           var index= nextSlide.index();
        //    $('.active-circle').removeClass('active-circle');
           $('.circle-slide:nth('+index+')').addClass('active-circle');
           console.log($('.circle-slide:nth('+index+')').index());
        } else {
            $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
                $('.current-slide-out').removeClass('current-slide-out');
            });
            $('.slide-image:first').addClass('next-slide-in').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in').addClass('active').removeClass('next-slide-in');
            });
            setTimeout(function () {
                $(_this).css('pointer-events', 'auto');
            }, 500);
            $('.circle-slide:first').addClass('active-circle');

        }
       

    })

    // handle arrow back

    $('#arrow-back').click(function () {
        $('.slide-image').removeClass('add-transition');
        
        var backSlide = $('.active').prev();
        var _this = this;
        console.log(backSlide.index());
        $(this).css('pointer-events', 'none');
        $('.active-circle').removeClass('active-circle');        
        if (backSlide.index() < 0) {
            $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
                $('.current-slide-out-right').removeClass('current-slide-out-right');
            });
            $('.slide-image:last').addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
            });
            setTimeout(function () {
                $(_this).css('pointer-events', 'auto');
            }, 500);
            $('.circle-slide:last').addClass('active-circle');
        } else {
            $(this).css('pointer-events', 'none');
            
                $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
                    $('.current-slide-out-right').removeClass('current-slide-out-right');
                });

                backSlide.addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
                    console.log('why');
                    $('.active').removeClass('active');

                    $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
                    setTimeout(function () {
                        $(_this).css('pointer-events', 'auto');
                    }, 500);

                });
                var index= backSlide.index();
                
           $('.circle-slide:nth('+index+')').addClass('active-circle');
           

        }


    })

    //Click circle in slide
    $('.circle-slide').click(function(){
        // $('.slide-image').addClass('add-transition');
        $('.circle-slide').css('pointer-events', 'none');
        console.log($(this).index());        
        $('.active').addClass('fadeOutLeft animated').one('webkitAnimationEnd', function () {
            $('.fadeOutLeft').removeClass('active fadeOutLeft animated');
            
        });
        
        $('.active-circle').removeClass('active-circle');        
        $(this).addClass('active-circle');        
        var index = $(this).index();
        $('.slide-image:nth('+index+')').addClass('active fadeInRight animated').one('webkitAnimationEnd',function(){
            $('.fadeInRight').removeClass('fadeInRight animated');
        });
        setTimeout(function () {
            $('.circle-slide').css('pointer-events', 'auto');
        }, 800);

    })
   
    // handle when scroll
    $(window).scroll(function(){
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
        var a = $("html").scrollTop();
        
        // $('.test').html(a);
        if (a>55){
            //fix-nav
            $('#nav-down-wrap').addClass('testScroll');
            //fix-back-to-top
            $('div.back-to-top').addClass('show-back-to-top');
            if($('sub.menu-cart').data('number-product')!= '0'){
                $('a.cart-scrolled').addClass('show-cart-bottom');
            }
        }else{
            $('#nav-down-wrap').removeClass('testScroll');
            $('div.back-to-top').removeClass('show-back-to-top');
            $('a.cart-scrolled').removeClass('show-cart-bottom');
        }
        console.log(a);
        if(a>200){
            $('.product').addClass('fadeInLeft animated');
        }

        
    })
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });

})  


// var html = document.querySelector('html')
// window.onbeforeunload = function(){
//     html.scrollTop = 0 ;
// }