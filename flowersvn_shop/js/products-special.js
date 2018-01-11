var arrDataSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08,SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16,SN16,SN18,SN19,SN20,SN21];
var lengthDataSpecial=arrDataSpecial.length;
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
    //products special    
    $('#content-products').append(getElementProduct(arrDataSpecial));
    //handle click shopping cart
    $('div.shopping-cart-div').click(function(){
        var _this =this;
          var lengthArrProductInCart = arrProductsInCart.length;
          // console.log(lengthArrProductInCart);
          var idProduct= $(this).attr('data-id-product');
          // console.log(idProduct);
          for (var i=0;i<lengthDataSpecial;i++){
              if(arrDataSpecial[i].id == idProduct){
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