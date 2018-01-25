
   

    var app = new Vue({
        el: '#app',
        data: {
          message: 'Do you wanna build a Vue app?',
          hello: function(){
              return 'hello';
          }
        }
      })


      var app2 = new Vue({
        el: '#app-2',
        data: {
          message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
        }
      })

      var app3 = new Vue({
        el: '#app-3',
        data: {
          seen: true
        }
      })


      var app4 = new Vue({
        el: '#app-4',
        data: {
          todos: [
            { text: 'Học JavaScript' },
            { text: 'Học Vue' },
            { text: 'Xây dựng cái gì đó hay ho' }
          ]
        }
      })

