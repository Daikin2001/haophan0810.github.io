var arrDataProductsBirthday = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08,SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16,SN16,SN18,SN19,SN20,SN21];
var lengthDataSpecial=arrDataProductsBirthday.length;

$(document).ready(function () {
    //products special    
    $('#content-products').append(getElementProduct(arrDataProductsBirthday));
    //handle click shopping cart
    $('div.shopping-cart-div').click(function(){
        var _this =this;          
        // console.log(lengthArrProductInCart);
        var idProduct= $(this).attr('data-id-product');
        // console.log(idProduct);
        clickedShoppingCart(idProduct,arrProductsInCart,arrDataProductsBirthday,_this);
          
         })           
    
    $(window).scroll(function () {
        showCartBottom();
    })
//  handle when click preview

$('span.img-product-quick-view').click(function(){
    var idProduct = $(this).attr('data-id-product');
    var product;  
    loadDataToQuickView(idProduct,product,arrDataProductsBirthday);
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
        for(var i =0;i<lengthArrDataProductsBirthday;i++){
            if(arrDataBestSell[i].id == idProductBuyNow){
                arrProductsInCart.push(arrDataBestSell[i]);
                numberCart++;
                addCart();
            }
            if(arrDataProductsBirthday[i].id ==idProductBuyNow){
                arrProductsInCart.push(arrDataProductsBirthday[i]);
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