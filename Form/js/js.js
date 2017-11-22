
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
        userName:dataForm[0],        
        email:dataForm[1],        
        pass:dataForm[2],
        facebook:dataForm[3],
        mobileNumber:dataForm[4],
        birthday:dataForm[5]+' - '+dataForm[6]+' - '+dataForm[7],
        sex:dataForm[8]
    }
    
    $('.info').append('<h2>User Name: <span>'+register['userName']+'</span></h2>') ;
    $('.info').append('<h2>Email: <span>'+register['email']+'</span></h2>') ;
    $('.info').append('<h2>Facebook: <span>'+register['facebook']+'</span></h2>') ;    
    $('.info').append('<h2>Mobile Number: <span>'+register['mobileNumber']+'</span></h2>') ;
    $('.info').append('<h2>Birthday: <span>'+register['birthday']+'</span></h2>') ;
    if (register['sex']==undefined){
        $('.info').append('<h2>Sex: </h2>') ;
    }else {
        $('.info').append('<h2>Sex: <span>'+register['sex']+'</span></h2>') ;
    }
    var checkSex = false;
    function check(){
       checkSex=true;
    }
    
// validate
$('#form-register').on('submit',function(){
    var isValid = true;
    
    if ($('#full-name').val().match(/^\D\w{5,20}/)==null){
        console.log('sai');
        $('.full-name>div>span').text('User name phải bắt đầu bằng chữ thường, 6 đến 20 ký tự (eg:haophan0810)');
        $('.full-name>.err').css('display','block');
        $('#full-name').css('border-color','red');
        isValid=false;
    }else {
        $('.full-name>.err').css('display','none');
        $('.full-name>div>span').text('');
        $('#full-name').css('border-color','#bdc7d8');
    }
    if ($('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)==null){
        $('.email>div>span').text('Error! (eg:joe@aol.com hoặc a@b.cc)');
        $('.email>.err').css('display','block');
        $('#email').css('border-color','red');
        isValid=false;
    }else {
        $('.email>.err').css('display','none');
        $('.email>div>span').text('');
        $('#email').css('border-color','#bdc7d8');
    }
   
    if ($('#new-password').val().match(/^(?=.*\d).{6,16}$/)==null){
        $('.new-password>div>span').text('Password phải có 6 đến 18 ký tự và chứa ít nhất 1 số (eg:haophan1)');
        $('.new-password>.err').css('display','block');
        $('#new-password').css('border-color','red');
        isValid=false;
    }else {
        $('.new-password>.err').css('display','none');
        $('.new-password>div>span').text('');
        $('#new-password').css('border-color','#bdc7d8');
    }
    if ($('#facebook').val().match(/^(facebook.com\/|fb.com\/)([^\/^\s]$)/)==null){
        $('.facebook>div>span').text('Tên miền phải 1 trong 2 dạng facebook.com/abc hoặc fb.com/abc');
        $('.facebook>.err').css('display','block');
        $('#facebook').css('border-color','red');
        isValid=false;
    }else {
        $('.facebook>.err').css('display','none');
        $('.facebook>div>span').text('');
        $('#facebook').css('border-color','#bdc7d8');
    }
    
    if ($('#mobile-number').val().match(/^0[0-9]\w{8,9}$/)==null){
        $('.mobile-number>div>span').text('Số điện thoại di động phải chứa 10 hoặc 11 số, bắt đầu bằng 0 (eg:01642248648)');
        $('.mobile-number>.err').css('display','block');
        $('#mobile-number').css('border-color','red');
        isValid=false;
    }else {
        $('.mobile-number>.err').css('display','none');
        $('.mobile-number>div>span').text('');
        $('#mobile-number').css('border-color','#bdc7d8');
    }

    if($('#day-birthday').val()==''){
        $('.birthday>div>span').text('Phải chọn ngày tháng và năm');
        $('.birthday>.err').css('display','block');
        $('#day-birthday').css('border-color','red');   
        isValid=false;
    }else {
        $('.birthday>.err').css('display','none');
        $('.birthday>div>span').text('');
        $('#day-birthday').css('border-color','#bdc7d8'); 
    }

    if($('#month-birthday').val()==''){
        $('.birthday>div>span').text('Phải chọn ngày tháng và năm');
        $('.birthday>.err').css('display','block');
        $('#month-birthday').css('border-color','red');   
        isValid=false;
    }else {
        $('.birthday>.err').css('display','none');
        $('.birthday>div>span').text('');
        $('#month-birthday').css('border-color','#bdc7d8'); 
    }

    if($('#year-birthday').val()==''){
        $('.birthday>div>span').text('Phải chọn ngày tháng và năm');
        $('.birthday>.err').css('display','block');
        $('#year-birthday').css('border-color','red');   
        isValid=false;
    }else {
        $('.birthday>.err').css('display','none');
        $('.birthday>div>span').text('');
        $('#year-birthday').css('border-color','#bdc7d8'); 
    }
   console.log("ddasa"+checkSex);
   
    if(!checkSex){
        $('#sex>.err').css('display','block');
        $('#sex>div.test2>span').text('Phải chọn giới tính');
        $('.sex-div').css('border-width','1px');
        isValid=false;
    }else {
        $('#sex>.err').css('display','none');
        $('#sex>div.test2>span').text('');
        $('.sex-div').css('border','none');
    }
    return isValid;


})
    
  
