$.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    jsonp: "callback",
    type: "GET",
    dataType: "jsonp",
    success: function (data) {
      alert(data);
    },
    xhrFields: {
      withCredentials: false
    }
  });