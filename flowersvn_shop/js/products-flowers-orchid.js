var arrDataFlowersOrchid = [HL01, HL02, HL03, HL04, HL05, HL06, HL07, HL08,HL09, HL11, HL12, HL13, HL14, HL15, HL16];
var lengthDataFlowersOrchid=arrDataFlowersOrchid.length;

$(document).ready(function () {
    //products special    
    $('#content-products').append(getElementProduct(arrDataFlowersOrchid));
    //handle click shopping cart
    $('div.shopping-cart-div').click(function(){
        var _this =this;
          var lengthArrProductInCart = arrProductsInCart.length;
          // console.log(lengthArrProductInCart);
          var idProduct= $(this).attr('data-id-product');
          // console.log(idProduct);
          for (var i=0;i<lengthDataFlowersOrchid;i++){
              if(arrDataFlowersOrchid[i].id == idProduct){
                  arrProductsInCart.push(arrDataFlowersOrchid[i]);
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
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
})