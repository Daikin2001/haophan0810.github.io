const btn = $('.quote__btn')
function getQuote (){
    $.ajax({
        type: 'GET',
       headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    data:{someData:true}
  })
    .done (function(data){
        console.log('data :', data);
        $('.quote__text').html(data.quote);
        $('.quote__author').html(data.author);
 
      
    })
    .fail (function(jqXHR, textStatus){
        
    })
    .always (function(jqXHR,textStatus){
       
    })
    
  }
  getQuote();
  
  btn.click(function(){
  getQuote();
    
  })