var arrDataProductsSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08,SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16,SN16,SN18,SN19,SN20,SN21];
var lengthDataSpecial=arrDataProductsSpecial.length;

$(document).ready(function () {
    //products special    
    $('#content-products').append(getElementProduct(arrDataProductsSpecial));
    //handle click shopping cart
    $('div.shopping-cart-div').click(function(){
        var _this =this;
          var lengthArrProductInCart = arrProductsInCart.length;
          // console.log(lengthArrProductInCart);
          var idProduct= $(this).attr('data-id-product');
          // console.log(idProduct);
          for (var i=0;i<lengthDataSpecial;i++){
              if(arrDataProductsSpecial[i].id == idProduct){
                  arrProductsInCart.push(arrDataProductsSpecial[i]);
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
    
    $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
        var a = $("html").scrollTop();

        // $('.test').html(a);
        showCartBottom();

    })

    
//  handle when click preview

$('span.img-product-quick-view').click(function(){
    var idProduct = $(this).attr('data-id-product');
    var product;
    // console.log(idProduct);
    // looking for index 
    for(var i = 0; i< lengthDataSpecial;i++){
        if (idProduct == arrDataProductsSpecial[i].id){
            product = arrDataProductsSpecial[i];
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
    // var lengthArrProductInCart=arrProductsInCart.length;
    for(var i = 0; i<lengthDataSpecial;i++){
        if(arrProductsInCart[i].id == idProductBuyNow){
            isValid=false;
        }
    }
    if (isValid){
        for(var i =0;i<lengthArrDataProductsSpecial;i++){
            if(arrDataBestSell[i].id == idProductBuyNow){
                arrProductsInCart.push(arrDataBestSell[i]);
                numberCart++;
                addCart();
            }
            if(arrDataProductsSpecial[i].id ==idProductBuyNow){
                arrProductsInCart.push(arrDataProductsSpecial[i]);
                numberCart++;
                addCart();
            }
            
        }
    }    
    
})


    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
})