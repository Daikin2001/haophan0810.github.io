var arrDataSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08];
var arrDataBestSell = [SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16];
var lengthArrDataSpecial = arrDataSpecial.length;
var lengthArrDataBestSell = arrDataBestSell.length;


$(document).ready(function () {
     $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
       
       showCartBottom();

    })
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
    
    // js slide
    var numberImgSlide = document.querySelectorAll('aside#wrap-slide ul li.slide');
    var imgs = document.querySelectorAll('ul li div.slide-img');
    var h2s= document.querySelectorAll('div.slide-description h2');
    var divLines = document.querySelectorAll('div.slide-line');
    var aShopNow = document.querySelectorAll('a.slide-shop-now');
    // console.log(imgs);
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
        // console.log(getIndex);
        
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
//test local storage

  // jquery handle when click focus shopping cart
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

//  handle when click preview

$('span.img-product-quick-view').click(function(){
    var idProduct = $(this).attr('data-id-product');
    var product;
    // console.log(idProduct);
    // looking for index 
    for(var i = 0; i< lengthArrDataSpecial;i++){
        if (idProduct == arrDataSpecial[i].id){
            product = arrDataSpecial[i];
        }
        if (idProduct == arrDataBestSell[i].id){
            product = arrDataBestSell[i];
        }
    }
    // console.log(product);

    // load content to preview-product
    $('h2.name-product-preview').html(product.name+"<span class='code-product'>("+product.id+")</span>");
    $('span.product-sale-cost').html(getCurrentCost(product));
    $('span.product-current-cost').html(product.cost);
    $('div#aside-right-des').html(product.description);
    $('div#aside-img-left img').attr('src',product.src);
    $('a.buy-now').attr('data-id-product',product.id);
    //add class show-preview 
    $('div#preview-product').addClass('preview-product-show');
})

// handle close prevew
$('i.preview-product,div.wrap-preview-product').click(function(){
    $('div#preview-product').removeClass('preview-product-show');
    
})

// handle click button buy-now
$('a.buy-now').click(function(){
    var idProductBuyNow =  $(this).attr('data-id-product');
    var isValid = true;
    var lengthArrProductInCart=arrProductsInCart.length;
    for(var i = 0; i<lengthArrProductInCart;i++){
        if(arrProductsInCart[i].id == idProductBuyNow){
            isValid=false;
        }
    }
    if (isValid){
        for(var i =0;i<lengthArrDataSpecial;i++){
            if(arrDataBestSell[i].id == idProductBuyNow){
                arrProductsInCart.push(arrDataBestSell[i]);
                numberCart++;
                addCart();
            }
            if(arrDataSpecial[i].id ==idProductBuyNow){
                arrProductsInCart.push(arrDataSpecial[i]);
                numberCart++;
                addCart();
            }
            
        }
    }    
    
})

})