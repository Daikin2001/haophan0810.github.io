
var arrTittle = ['image','name','sex','email','phone'];


var naruto = {
    image:'naruto',
    name:'Naruto',
    sex:'male',
    email:'naruto@naruto.com',
    phone:'0123433489'
}
var hinata = {
    image:'hinata',
    name:'Hinata',
    sex:'female',
    email:'hinata@naruto.com',
    phone:'0923456789'
}
var hokage = {
    image:'hokage',
    name:'Hokage',
    sex:'male',
    email:'hokage@naruto.com',
    phone:'0823456789'
}
var itachi = {
    image:'itachi',
    name:'Itachi',
    sex:'male',
    email:'itachi@naruto.com',
    phone:'0163456789'
}

var kakashj = {
    image:'kakashj',
    name:'Kakashj',
    sex:'male',
    email:'kakashj@naruto.com',
    phone:'0953456789'
}
var konohamaru = {
    image:'konohamaru',
    name:'Konohamaru',
    sex:'male',
    email:'konohamaru@naruto.com',
    phone:'0963456789'
}
var lee = {
    image:'lee',
    name:'Lee',
    sex:'male',
    email:'lee@naruto.com',
    phone:'0153456789'
}
function sort (){
    alert("dashda");
}
var data = [naruto,lee,kakashj,hinata,konohamaru,hokage,itachi];
function loadTable (){
    var table = "<table><caption><span id='caption'>Naruto</span></caption><tr id='row0' >";
    
    for (var i =0;i<arrTittle.length;i++ ){
        table += "<th id='"+arrTittle[i]+"'>"+arrTittle[i]+"</th>";
    }
    table += "</tr>";
    var temp=0;
    
    for (var i=0;i<7;i++){
        table +="<tr class='row' id='row"+(i+1)+"'>";
        for (var j=0;j<5;j++){
            temp+=1;
            table += "<td class='cell "+arrTittle[j]+"' id='cell"+temp+"'></td>";
        }
        table += '</tr>';
    }
    table += "</table>";
    return table;
}
$("#wrap").append(loadTable());

for (var i=0; i<data.length;i++){
 $( $(".image")[i]).append("<img class='img-cell' src='image/"+data[i]['image']+".jpg' width='120px'>");
 $( $(".name")[i]).append(data[i]['name']);
 $( $(".sex")[i]).append(data[i]['sex']);
 $( $(".email")[i]).append(data[i]['email'] );
 $( $(".phone")[i]).append(data[i]['phone']);
 
}
$('th').append('<div onclick="sort()" class="img-sort"><img id="img-up" src="image/up1.png" width="20px" ></div>');
$('th').append('<div onclick="sort()" class="img-sort"><img id="img-down" src="image/down1.png" width="20px" ></div>');