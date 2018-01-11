var productsCategory=[SN01, SN02, SN03, SN04];
console.log(productsCategory);


$(document).ready(function(){

$('div#products-category').append(getElementProduct(productsCategory));
addCart();
$(window).scroll(function () { 
   showCartBottom();
})
    
})