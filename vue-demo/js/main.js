// create a new Vue instance
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        isTrue:true,
        description: 'A pair of warm fuzzy socks',
        srcImage: 'https://source.unsplash.com/random/300x300',
        test: true,
        newif: false,
        details: ['111','232','3234'],
        products: [
            {
                ida:1,
                name:'ao'
            },
            {
                ida:2,
                name:'quan'
            },
            {
                ida:3,
                name:'mu'
            }
        ]
        
    },
    methods: {
        addCart: function(e){
            console.log('e :', e);
        }
    }


}) 
