$(document).ready(function(){
    $('label.label-address,input#address').click(function(){
        $('div#show-address').slideDown(300);
    })
    $('label.label-shop,input#shop').click(function(){
        $('div#show-address').slideUp(300);
    })
    $('lbl-bill-cart,input#bill-cart').click(function(){
        $('div.bill-company').slideToggle(300);
    })





    console.log(arrProductsInCart);
})