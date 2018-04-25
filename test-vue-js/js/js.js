var apiURL = 'https://api.github.com/emojis'

var demo = new Vue({
  el: '#demo',
  data: { emojis: null },

  methods: {
    getData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.emojis = JSON.parse(xhr.responseText)
        console.log(this)
      }
      xhr.send()
    }
  }
})

  demo.getData()
  demo.emojis
