$(document).ready(function(){



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
