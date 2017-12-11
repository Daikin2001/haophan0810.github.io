$(document).ready(function(){
   
var model = {
    
    dogs : [
        {
        name:"Phu Quoc",
        count:0,
        src:'image/dog1.jpeg'
    },
    {
        name:"Phoc",
        count:0,
        src:'image/dog2.jpeg'
    },
    {
        name:"Bac Kinh",
        count:0,
        src:'image/dog3.jpeg'
    },
    {
        name:"Ngao Tay Tang",
        count:0,
        src:'image/dog4.jpeg'
    },    
    {
        name:"Dan Toc",
        count:0,
        src:'image/dog5.jpeg'
    
    }
    ],
    curentDog: {
        name: "phoc",
        count:0,
        src:'image/dog2.jpeg'
    }
    
}

var controller = {
    
    getListNames : function(){
        var dogs=model.dogs;
        var dogNames = [];
        for (var i =0; i<dogs.length;i++){
            dogNames.push(dogs[i].name);
        }
        
        return dogNames;
    },    
    getCurentDog: function(){
        return model.curentDog;
    },
    getDogs: function(){
        // console.log("mang: "+model.dogs);
        return model.dogs;
    },
    batdau:function(){
        view.khoitao();
    }

}
var view ={
    khoitao : function(){
        
        this.listDogNames = controller.getListNames();
        this.curentDog = controller.getCurentDog();
        this.dogs=controller.getDogs();
        // console.log(this.dogs[1].src);
        view.hienthi();
    },
    hienthi : function(){
        
        var listDogNames = this.listDogNames;
         console.log(this.dogs);
        var arrDogs = this.dogs;
        var crDog= this.curentDog;
        // console.log(listDogNames);
        var html = '';
        for (var i=0;i<listDogNames.length;i++){
            html += "<li data-name='"+i+"'>" +listDogNames[i]+"</>";
        }
        
        $('img').click( function() {
            var countElement =$('img').attr('src');
            console.log(countElement);
            for (var i=0; i<arrDogs.length;i++){
                if (arrDogs[i].src==countElement){
                    arrDogs[i].count +=1;
                    $('#count-dog').text(arrDogs[i].count );
                }
            }        
        })

        $('#danhsach').html(html);
        $('#name-dog').text(this.curentDog.name);
        $('img').attr('src',this.curentDog.src);
        $('#count-dog').text(this.curentDog.count);        
            $('li').on('click',function(){
                var x= $(this).attr('data-name');
                 crDog=arrDogs[x];
                 console.log('dasdasd');
                 console.log(crDog);
            $('#name-dog').text(crDog.name);
            $('img').attr('src',crDog.src);
            $('#count-dog').text(crDog.count);
            
            
            })
        
    }
    
}
controller.batdau();

})