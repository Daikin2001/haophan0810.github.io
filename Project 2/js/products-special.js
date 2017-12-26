var arrDataSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08,SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16,SN16,SN18,SN19,SN20,SN21];

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
    var htmlProducts = "";
    for (var i = 0; i < arrDataSpecial.length; i++) {
        htmlProducts += '<div class="product wow fadeInUp" id="' + arrDataSpecial[i].id + '">' +
            '<div class="content-product">' +
            ' <div class="image-product">' +
            '<a href="product-description.html">' +
            '<img src="' + arrDataSpecial[i].src + '" alt="' + arrDataSpecial[i].alt + '" title="' + arrDataSpecial[i].title + '">' +
            '</a>' +
            '</div>' +
            '<div class="descrition">' +
            '<div class="name-product">' +
            '<a href="">' +
            '<span>' + arrDataSpecial[i].name + '</span>' +
            '</a>' +
            '</div>' +
            '<div class="cost-product">' +
            '<span class="cost-product-sale ' + arrDataSpecial[i].promotion + '">' + arrDataSpecial[i].oldCost() + ' đ</span>' +
            '<span class="cost-product-not-sale">' + arrDataSpecial[i].curentCost() + ' đ</span>' +
            '</div>' +
            '<div class="rating-product">' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="shopping-cart">' +
            '<div class="shopping-cart-div">' +
            '<a href="" class="shopping-cart-a">' +
            '<i class="fa fa-shopping-cart product-cart" aria-hidden="true"></i>' +
            '<span class="shopping-cart-span">Thêm vào giỏ hàng</span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="special-product ' + arrDataSpecial[i].classPromotion + '">' +
            '<div class="hot-product">' +
            '<span class="promotion">' + arrDataSpecial[i].textPromotion() + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="quick-view">' +
            '<a href="" title="Xem nhanh">' +
            '<i class="fa fa-search-plus" aria-hidden="true"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>'

    }

 
    $('#content-products').append(htmlProducts);
    
    new WOW().init();
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
})