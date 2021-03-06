var arrDataSpecial = [SN01, LL01, HH03, LL03, TL02, TL01, HH09, SN08];
var arrDataBestSell = [TL03, SN02, HH03, HH02, LL02, LL05, TL10, TL16];
var lengthArrDataSpecial = arrDataSpecial.length;
var lengthArrDataBestSell = arrDataBestSell.length;


$(document).ready(function () {
    function getScrollTopElement (id){
        return $(id).offset().top;
    }
     $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var windowScrollTop =$('html').scrollTop();
        var promotionScrollTop = getScrollTopElement('#promotion');
        var promotionScrollTop2 = getScrollTopElement('#promotion-2');
        var promotionScrollTop3 = getScrollTopElement('#promotion-3');
        // console.log('pro1: ' +promotionScrollTop2);
        console.log(viewportHeight);
        // handle when scroll to div promotion
        if(windowScrollTop>promotionScrollTop-600 && windowScrollTop < getScrollTopElement('#products-hot')){
            $('div.promotion-description').addClass('promotion-right-in');
        }else{
            $('div.promotion-description').removeClass('promotion-right-in');
        }
        
        
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
       console.log(getScrollTopElement('#promotion'));

       showCartBottom();
    
    })
    
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
        $('span.product-sale-cost').html(getCurrentCost(product).toLocaleString()+ " đ");
        $('span.product-current-cost').html(product.cost.toLocaleString()+" đ");
        $('span.product-current-cost').removeClass('promotion-sale');        
        $('span.product-current-cost').addClass(product.classPromotion);        
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

    //validate submit email
    $('div.btn-follow').click(function(){
        if($('input#mail-follow').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null){
            alert("Sai định dạng email");
        }else{
            $('input#mail-follow').val('');
            alert('Đăng ký thành công');
        }
        
    })
    
    //validate send message
    $('a.send-message').click(function(){
        
    })

})