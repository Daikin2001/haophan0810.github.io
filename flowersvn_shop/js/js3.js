var numberCart = 0;
var arrProductsInCart = [];
function getElementProduct(arr) {
    var elmProduct = "";
    var arrLength = arr.length;
    var test = 0;
    var test2 = 0;
    for (var i = 0; i < arrLength; i++) {
        test2 = (test % 4 + 1) / 10;
        test += 1;
        elmProduct +=
            '<div class="product" id="' + arr[i].id + '">' +
            '<div class="content-product">' +
            ' <div class="image-product" style="background-image:url(\''+arr[i].src+'\')" title="' + arr[i].title + '">' +
            // '<img src="' + arr[i].src + '" alt="' + arr[i].alt + '" title="' + arr[i].title + '">' +
            '<div class="img-product-bg">' +
            '<div class="img-product-bg-a">' +
            '<a href="./product-description.html" class="img-product-bg-a">' +
            '</a>' +
            '<span class="img-product-quick-view" data-id-product="' + arr[i].id + '">' +
            '<i class="fa fa-plus img-quick-view" aria-hidden="true"></i>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="descrition">' +
            '<div class="name-product">' +
            '<a href="">' +
            '<span>' + arr[i].name + '</span>' +
            '</a>' +
            '</div>' +
            '<div class="cost-product">' +
            '<span class="cost-product-sale ' + arr[i].classPromotion + '" data-old-cost="' + arr[i].cost + '">' + arr[i].cost.toLocaleString() + ' đ</span>' +
            '<span class="cost-product-not-sale" data-current-cost="' + getCurrentCost(arr[i]) + '">' + getCurrentCost(arr[i]).toLocaleString() + ' đ</span>' +
            '</div>' +
            '<div class="rating-product">' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="shopping-cart">' +
            '<div class="shopping-cart-div" data-id-product="' + arr[i].id + '">' +

            '<i class="fa fa-shopping-cart product-cart" aria-hidden="true"></i>' +
            '<span class="shopping-cart-span">Thêm vào giỏ hàng</span>' +

            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="special-product ' + arr[i].classPromotion + '">' +
            '<div class="hot-product">' +
            '<span class="promotion">' + arr[i].codePromotion + '</span>' +
            '</div>' +
            '</div>' +

            '</div>' +
            '</div>'

    }
    return elmProduct;
}

function getCurrentCost(dataProduct) {
    var currentCost;
    if (dataProduct.classPromotion == 'promotion-sale') {
        currentCost = dataProduct.cost - (dataProduct.cost * dataProduct.sale) / 100;
    } else {
        currentCost = dataProduct.cost;
    }
    return Math.round(currentCost);
}
function loadDataToQuickView(idProduct,product,arr){
    var lengthProducts = arr.length;
    for(var i = 0; i< lengthProducts;i++){
        if (idProduct == arr[i].id){
            product = arr[i];
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
}
function clickedShoppingCart(idProduct,arrProductsInCart,arrProductsCurrent,_this){
    var lengthArrProductInCart = arrProductsInCart.length;
    var lengthArrProductsCurrent = arrProductsCurrent.length;
    for (var i=0;i<lengthArrProductsCurrent;i++){
        if(arrProductsCurrent[i].id == idProduct){
            arrProductsInCart.push(arrProductsCurrent[i]);
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
}

function addCart() {
    $('sub.menu-cart').html(numberCart);
    $('sub.menu-cart').attr('data-number-product', numberCart);
    $('span.notification-number').html(numberCart + " sản phẩm");
}
function showCartBottom() {
    var positionScroll = $("html").scrollTop();


    // $('.test').html(a);
    if (positionScroll > 55) {
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
}
$(document).ready(function () {

    addCart();
    // $(window).scroll(function () {
    //     var viewportWidth = $("body").innerWidth();
    //     var viewportHeight = $("body").innerHeight();
    //     var c = document.body.clientHeight;
    //     var b = $(window).scrollTop();

    // })
    var isStatusShortcutMenu = true;
    // click icon menu bar
    $('div#shortcut-menu').click(function () {
        console.log('click');
        if (isStatusShortcutMenu) {
            $('div#nav-down-wrap').css('display', 'block');
            isStatusShortcutMenu = false;
        } else {
            $('div#nav-down-wrap').css('display', 'none');
            isStatusShortcutMenu = true;

        }
    })
    //li-level-2 click
    var blurUl;
    $('li.list-item.level-2').click(function(){
        $('ul.menu-level-2').removeClass('show-menu-level-2');        
        var ulChild=$(this).children()[1];
        blurUl = ulChild;
        $(ulChild).addClass('show-menu-level-2');      
        
    })
   $('footer,#nav-up-wrap,aside,section').click(function(){
    $('ul.menu-level-2').removeClass('show-menu-level-2');        
       
   })
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
})