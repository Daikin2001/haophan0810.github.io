
   
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
    var register = {
        firstName:'',
        surname:'',
        mobileNumber:'',
        email:'',
        pass:'',
        birthday:'',
        sex:''
    }
    //page registed.html
    var parameters;
    function processForm()
    {
       parameters = location.search.substring(1).split("&");
      
    }
    processForm();
    console.log(parameters);
    $('.info').text(parameters) ;

