var arrDataSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08];
var arrDataBestSell = [SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16];
var lengthArrDataSpecial = arrDataSpecial.length;
var lengthArrDataBestSell = arrDataBestSell.length;
var ABC = {
    name: 'Sinh Nhật Ngọt Ngào',
    category: 'birthday',
    description: 'Làm ngọt theo cách bạn thể hiện mình với sự sắp xếp hoa hồng và hoa cẩm chướng tươi tắn và tươi tắn này. Những bông hồng và hoa cẩm chướng. Những bông hồng và hoa màu trắng nở lên cho dịp này, làm ấm trái tim của người đặc biệt đó trong cuộc sống của bạn.',
    title: 'Giỏ hoa sinh nhật ngọt ngào',
    alt: 'Giỏ hoa sinh nhật ngọt ngào',
    rating: 4,
    cost: 1000000,
    //promotion sale||new||hot 
    classPromotion: 'promotion-new',
    namePromotion: 'New',
    sale: 10,
    src: 'images/birthday/SN01.jpg',
    //codePromotion S:sale N:new H:hot D:default
    codePromotion: 'S',
    curentCost: function () {
        if (this.codePromotion !== 'S') {
            return this.cost;
        } else {
            let m = this.cost - (this.cost * this.sale) / 100;
            return m;
        };
    }
   

    
}

$(document).ready(function () {
   
      //products Accessories
    //   var htmlAccessories = "";
    //   var testAccs=0;
    //   var testAccs2=0;
    //   for (var i = 0; i < arrDataAccessories.length; i++) {
    //       testAccs2=(testAccs%8+1)/10;
    //       testAccs+=1;         
    //       htmlAccessories += 
    //       '<div class="product-accessories wow fadeInUp" data-wow-duration="0,5s" data-wow-delay="'+testAccs2+'s" id="' + arrDataAccessories[i].id + '">' +
    //         '<div class="content-product-accessories">' +
    //             '<div class="image-product-acessories">' +
    //                 '<a href="product-description.html">' +
    //                      '<img src="' + arrDataAccessories[i].src + '" alt="' + arrDataAccessories[i].alt + '" title="' + arrDataAccessories[i].title + '">' +
    //                  '</a>' +
    //             '</div>' +
    //             '<div class="descrition-acessories">' +
    //                 '<div class="name-product-acessories">' +
    //                      '<a href="">' +
    //                          '<span class="span-accessories">' + arrDataAccessories[i].name + '</span>' +
    //                      '</a>' +
    //                 '</div>' +
    //                 '<div class="cost-product-acessories">' +
    //                      '<div class="cost-product-not-sale-acessories">' + arrDataAccessories[i].curentCost() + ' đ</div>' +
    //                      '<div class="cost-product-sale-acessories ' + arrDataAccessories[i].promotion + '">' + arrDataAccessories[i].oldCost() + ' đ</div>' +
    //                 '</div>' +
    //             '</div>' +
    //             '<div class="quick-view-acessories">' +
    //                 '<a href="" title="Xem nhanh">' +
    //                     '<i class="fa fa-search-plus" aria-hidden="true"></i>' +
    //                 '</a>' +
    //             '</div>' +
    //             '</div>' +
    //         '</div>'
  
    //   }
    $('#content-products-special').append(getElementProduct(arrDataSpecial));
    $('#content-products-best-sellest').append(getElementProduct(arrDataBestSell));
    // $('#accessories-products').append(htmlAccessories);
    new WOW().init();
    var objHeight = 0;
    $.each($('.slide-image'), function () {

        objHeight = $(this).height();
    });
    $('#slide-images').height(objHeight);

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
  $('div.shopping-cart-div').click(function(){
      var _this =this;
        var lengthArrProductInCart = arrProductsInCart.length;
        // console.log(lengthArrProductInCart);
        var idProduct= $(this).attr('data-id-product');
        // console.log(idProduct);
        for (var i=0;i<lengthArrDataSpecial;i++){
            if(arrDataBestSell[i].id == idProduct){
                arrProductsInCart.push(arrDataBestSell[i]);
            }else if (arrDataSpecial[i].id == idProduct){
                arrProductsInCart.push(arrDataSpecial[i]);
            }
        }
        $(_this).css('pointer-events', 'none');

        $(_this).html("Đã thêm vào giỏ hàng");
        numberCart++;
        console.log(arrProductsInCart);
        $('sub.menu-cart').html(numberCart);
        $('sub.menu-cart').attr('data-number-product',numberCart);
        $('span.notification-number').html(numberCart+" sản phẩm");
        $('a.cart-scrolled').addClass('show-cart-bottom');
       })           

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
    // $('i.content-sale-start,#start-wrap').click(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');
    //     console.log(this);;
    // })
    // //auto close
    // var closeStartSale = setInterval(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');


    //     clearInterval(closeStartSale);
    // },5000);

    //Auto set height for div slide
    // var slideImg = $('.slide-image');
    // var circleSlide = $('.circle-slide');

    // //Auto play slide
    // setInterval(function () {
    //     $('#arrow-next').trigger('click');

    // }, 4000)
    // //Click arrow Next
    // $('#arrow-next').click(function () {
    //     $('.slide-image').removeClass('add-transition');
    //     var nextSlide = $('.active').next();
    //     var _this = this;
    //     // console.log(nextSlide.index());
    //     $(this).css('pointer-events', 'none');
    //     $('.active-circle').removeClass('active-circle');

    //     if (nextSlide.index() < slideImg.length) {
    //         $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
    //             $('.current-slide-out').removeClass('current-slide-out');
    //         });

    //         nextSlide.addClass('next-slide-in').one('webkitAnimationEnd', function () {
    //             // console.log('why');
    //             $('.active').removeClass('active');

    //             $('.next-slide-in').addClass('active').removeClass('next-slide-in');
    //             setTimeout(function () {
    //                 $(_this).css('pointer-events', 'auto');
    //             }, 500);

    //         });
    //         // console.log(nextSlide.index());
    //         var index = nextSlide.index();
    //         //    $('.active-circle').removeClass('active-circle');
    //         $('.circle-slide:nth(' + index + ')').addClass('active-circle');
    //         // console.log($('.circle-slide:nth(' + index + ')').index());
    //     } else {
    //         $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
    //             $('.current-slide-out').removeClass('current-slide-out');
    //         });
    //         $('.slide-image:first').addClass('next-slide-in').one('webkitAnimationEnd', function () {
    //             // console.log('why');
    //             $('.active').removeClass('active');

    //             $('.next-slide-in').addClass('active').removeClass('next-slide-in');
    //         });
    //         setTimeout(function () {
    //             $(_this).css('pointer-events', 'auto');
    //         }, 500);
    //         $('.circle-slide:first').addClass('active-circle');

    //     }


    // })

    // // handle arrow back

    // $('#arrow-back').click(function () {
    //     $('.slide-image').removeClass('add-transition');

    //     var backSlide = $('.active').prev();
    //     var _this = this;
    //     // console.log(backSlide.index());
    //     $(this).css('pointer-events', 'none');
    //     $('.active-circle').removeClass('active-circle');
    //     if (backSlide.index() < 0) {
    //         $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
    //             $('.current-slide-out-right').removeClass('current-slide-out-right');
    //         });
    //         $('.slide-image:last').addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
    //             // console.log('why');
    //             $('.active').removeClass('active');

    //             $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
    //         });
    //         setTimeout(function () {
    //             $(_this).css('pointer-events', 'auto');
    //         }, 500);
    //         $('.circle-slide:last').addClass('active-circle');
    //     } else {
    //         $(this).css('pointer-events', 'none');

    //         $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
    //             $('.current-slide-out-right').removeClass('current-slide-out-right');
    //         });

    //         backSlide.addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
    //             // console.log('why');
    //             $('.active').removeClass('active');

    //             $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
    //             setTimeout(function () {
    //                 $(_this).css('pointer-events', 'auto');
    //             }, 500);

    //         });
    //         var index = backSlide.index();

    //         $('.circle-slide:nth(' + index + ')').addClass('active-circle');


    //     }


    // })

    // //Click circle in slide
    // $('.circle-slide').click(function () {
    //     // $('.slide-image').addClass('add-transition');
    //     $('.circle-slide').css('pointer-events', 'none');
    //     // console.log($(this).index());
    //     $('.active').addClass('fadeOutLeft animated').one('webkitAnimationEnd', function () {
    //         $('.fadeOutLeft').removeClass('active fadeOutLeft animated');

    //     });

    //     $('.active-circle').removeClass('active-circle');
    //     $(this).addClass('active-circle');
    //     var index = $(this).index();
    //     $('.slide-image:nth(' + index + ')').addClass('active fadeInRight animated').one('webkitAnimationEnd', function () {
    //         $('.fadeInRight').removeClass('fadeInRight animated');
    //     });
    //     setTimeout(function () {
    //         $('.circle-slide').css('pointer-events', 'auto');
    //     }, 800);

    // })

    // handle when scroll
    // $(window).scroll(function () {
    //     var viewportWidth = $("body").innerWidth();
    //     var viewportHeight = $("body").innerHeight();
    //     var c = document.body.clientHeight;
    //     var b = $(window).scrollTop();
    //     var a = $("html").scrollTop();

    //     // $('.test').html(a);
    //     if (a > 55) {
    //         //fix-nav
    //         $('#nav-down-wrap').addClass('testScroll');
    //         //fix-back-to-top
    //         $('div.back-to-top').addClass('show-back-to-top');
    //         if ($('sub.menu-cart').data('number-product') != '0') {
    //             $('a.cart-scrolled').addClass('show-cart-bottom');
    //         }
    //     } else {
    //         $('#nav-down-wrap').removeClass('testScroll');
    //         $('div.back-to-top').removeClass('show-back-to-top');
    //         $('a.cart-scrolled').removeClass('show-cart-bottom');
    //     }
    //     // console.log(a);
    //     if (a > 200) {
    //         $('.product').addClass('fadeInLeft animated');
    //     }


    // })
    // $(window).on('beforeunload', function () {
    //     $(window).scrollTop(0);
    // });


})