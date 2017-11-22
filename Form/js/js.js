
   function clog (a,b){
       console.log(a + ' : ' +b);
       console.log('--------------------');
   }
    for (var i = 1; i<32;i++){
        $('#day-birthday').append('<option value="'+i+'" >'+i+'</option>');
    }
    for (var i = 1; i<13;i++){
        $('#month-birthday').append('<option value="'+i+'" >'+i+'</option>');
        
    } 
    for (var i = 1980; i<2018;i++){
        $('#year-birthday').append('<option value="'+i+'" >'+i+'</option>');
        
    } 
    
    //page registed.html
    var parameters;
    var dataForm=[];
    parameters = location.search.substring(1).split("&");
    
    for (var i=0;i<parameters.length;i++){
        var index= parameters[i].indexOf('=');       
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
        birthday:dataForm[5]+'  '+dataForm[6]+'  '+dataForm[7],
        sex:dataForm[8]
    }
    
    $('.info').append('<h2>Full Name: <span>'+register['fullName']+'</span></h2>') ;
    // $('.info').append('<h2>Surname: <span>'+register['surname']+'</span></h2>') ;
    
    $('.info').append('<h2>Mobile Number: <span>'+register['mobileNumber']+'</span></h2>') ;
    
    $('.info').append('<h2>Email: <span>'+register['email']+'</span></h2>') ;
    
    $('.info').append('<h2>Birthday: <span>'+register['birthday']+'</span></h2>') ;
    if (register['sex']==undefined){
        $('.info').append('<h2>Sex: </h2>') ;
    }else {
        $('.info').append('<h2>Sex: <span>'+register['sex']+'</span></h2>') ;
    }
    
// validate
$('#form-register').on('submit',function(){
    var isValid = true;
    
    // if ($('#full-name').val().match(/(?=^.{6,51}$)([A-Za-z]{1})([A-Za-z0-9!@#$%_\^\&amp;\*\-\.\?]{5,49})$/)==null){
    //     clog("check",isValid);
    //     isValid=false;

    // }
    // if ($('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null){
    //     clog('check email',isValid);
    //     isValid=false;
    // }
   
    // if ($('#new-password').val().match(/^(?=.*\d).{4,8}$/)==null){
    //     clog('password',"wrong");
    //     isValid=false;
    // }
   
    // if ($('#mobile-number').val().match(/^0[0-9]\w{8,9}$/)==null){
    //     clog('mobile',"false");
        
    // }else {
    //     console.log('else');
    // }
    if($('#day-birthday').val()==''){
        console.log("dasdas");
        $('#day-birthday').css('border-color','red');
    }
    if($('#month-birthday').val()==''){
        console.log("dasdas");
        $('#month-birthday').css('border-color','red');
    }
    if($('#year-birthday').val()==''){
        console.log("dasdas");
        $('#year-birthday').css('border-color','red');
    }
    
    if(register['sex']==undefined){
        console.log(register['sex']);
        $('#sex').css('border-width','1px');
    }
    return false;


})
    
  
