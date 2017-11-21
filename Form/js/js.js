
   
    for (var i = 1; i<32;i++){
        if (i==8){
        $('#day-birthday').append('<option value="'+i+'" selected="1">'+i+'</option>');
        
        }else {
        $('#day-birthday').append('<option value="'+i+'" >'+i+'</option>');
        
        }
    }
    for (var i = 1; i<13;i++){
        if (i==10){
        $('#month-birthday').append('<option value="'+i+'" selected="1">'+i+'</option>');
        
        }else {
        $('#month-birthday').append('<option value="'+i+'" >'+i+'</option>');
        
        }
    } 
    for (var i = 1980; i<2018;i++){
        if (i==1990){
        $('#year-birthday').append('<option value="'+i+'" selected="1">'+i+'</option>');
        
        }else {
        $('#year-birthday').append('<option value="'+i+'" >'+i+'</option>');
        
        }
    } 
    
    //page registed.html
    var parameters;
    var dataForm=[];
    parameters = location.search.substring(1).split("&");
    
    for (var i=0;i<parameters.length;i++){
        var index= parameters[i].indexOf('=');
        console.log(index);
        var temp;
        temp=parameters[i].slice(index+1);
        // dataForm[i]=temp.replace(/+/g,"*");
        dataForm[i]=decodeURIComponent(temp.split('+').join(' '));
        
        
    }
    var register = {
        firstName:dataForm[0],
        surname:dataForm[1],
        fullName:dataForm[0]+' '+dataForm[1],
        mobileNumber:dataForm[2],
        email:dataForm[3],
        pass:dataForm[4],
        birthday:dataForm[5]+' - '+dataForm[6]+' - '+dataForm[7],
        sex:dataForm[8]
    }
    console.log(register);
    $('.info').append('<h2>Full Name: <span>'+register['fullName']+'</span></h2>') ;
    // $('.info').append('<h2>Surname: <span>'+register['surname']+'</span></h2>') ;
    
    $('.info').append('<h2>Mobile Number: <span>'+register['mobileNumber']+'</span></h2>') ;
    
    $('.info').append('<h2>Email: <span>'+register['email']+'</span></h2>') ;
    
    $('.info').append('<h2>Birthday: <span>'+register['birthday']+'</span></h2>') ;
    
    $('.info').append('<h2>Sex: <span>'+register['sex']+'</span></h2>') ;
    
  
