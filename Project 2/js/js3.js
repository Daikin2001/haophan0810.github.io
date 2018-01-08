function getElementProduct (arr){
    var elmProduct = "";
    var arrLength = arr.length;
    var test=0;
    var test2=0;
    for (var i = 0; i < arrLength; i++) {        
        test2=(test%4+1)/10;
        test+=1;        
        elmProduct += 
        '<div class="product" id="' + arr[i].id + '">' +
            '<div class="content-product">' +
            ' <div class="image-product">' +
            '<img src="' + arr[i].src + '" alt="' + arr[i].alt + '" title="' + arr[i].title + '">' +
            '<div class="img-product-bg">'+
            '<div class="img-product-bg-a">'+
            '<a href="" class="img-product-bg-a">'+
            '<span class="img-product-quick-view" data-id-product="'+arr[i].id+'">'+
            '<i class="fa fa-plus img-quick-view" aria-hidden="true"></i>'+
            '</span>'+
            '</a>'+
            '</div>'+
            '</div>'+
            '</div>' +
            '<div class="descrition">' +
            '<div class="name-product">' +
            '<a href="">' +
            '<span>' + arr[i].name + '</span>' +
            '</a>' +
            '</div>' +
            '<div class="cost-product">' +
            '<span class="cost-product-sale ' + arr[i].classPromotion + '">' + arr[i].oldCost() + ' đ</span>' +
            '<span class="cost-product-not-sale">' + arr[i].curentCost() + ' đ</span>' +
            '</div>' +
            '<div class="rating-product">' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="shopping-cart">' +
            '<div class="shopping-cart-div" data-id-product="'+arr[i].id+'">' +
            
            '<i class="fa fa-shopping-cart product-cart" aria-hidden="true"></i>' +
            '<span class="shopping-cart-span">Thêm vào giỏ hàng</span>' +
            
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="special-product ' + arr[i].classPromotion + '">' +
            '<div class="hot-product">' +
            '<span class="promotion">' + arr[i].textPromotion() + '</span>' +
            '</div>' +
            '</div>' +
          
            '</div>' +
            '</div>'

        }
        return elmProduct;
    }
    var numberCart = 0;
    var arrProductsInCart=[];
$(document).ready(function(){
  
    $('sub.menu-cart').html(numberCart);
    $('sub.menu-cart').attr('data-number-product',numberCart);
    $('span.notification-number').html(numberCart+" sản phẩm");
    $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
        var a = $("html").scrollTop();
        

        // $('.test').html(a);
        if (a > 55) {
            //fix-nav
            
            $('#nav-down-wrap').addClass('testScroll');
            //fix-back-to-top
            $('div.back-to-top').addClass('show-back-to-top');
            // console.log( $('sub.menu-cart').attr('data-number-product'));
            // console.log(numberCart);
            if ($('sub.menu-cart').attr('data-number-product') != '0') {
                $('a.cart-scrolled').addClass('show-cart-bottom');
            }
          
        } else {
            $('#nav-down-wrap').removeClass('testScroll');
            $('div.back-to-top').removeClass('show-back-to-top');
            $('a.cart-scrolled').removeClass('show-cart-bottom');
        }
       


    })
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });


})