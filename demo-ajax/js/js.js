let getData=''

function getAPI (){
    $.ajax({
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
  $('#root').append(data.quote);
      
    })
    
  }
  getAPI();
  console.log('getData :', getData);