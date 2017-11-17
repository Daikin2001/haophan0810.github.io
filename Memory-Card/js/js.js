
var arrContainImg = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11];
var checkWin =0;
var check = null;
var conditionWin = arrContainImg.length/2;
function shuffle(arrContainImg) {
    var currentIndex = arrContainImg.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = arrContainImg[currentIndex];
        arrContainImg[currentIndex] = arrContainImg[randomIndex];
        arrContainImg[randomIndex] = temporaryValue;
    }

    return arrContainImg;
}
function loadCard(arr) {
    var nFront = Math.floor(3 * Math.random() + 1);
    var divImg = '<div class="front"><img src="image/front'+nFront+'.png" alt=""></div>';
    console.log("dasdasd");
    for (var i = 0; i < arr.length; i++) {
        var divImgBack = '<div class="back" ><img src="image/i' + arr[i] + '.jpg" alt=""></div>';
        $('#content').append('<div class="contain" >' + '<div class="card"  data-image="' + arr[i] + '">' + divImgBack + divImg + '</div></div>');
    }
    
    // document.getElementById('welcome-sound').volume=0.6;

}

function changeProgress (time){
    var temp;
    var valueProgress =100;
    var delay =135;
    var myProc = setInterval(function(){         
        valueProgress -=(100*(delay/1000))/time;
        console.log ('progress:'+checkWin);
        $('progress').attr('value',valueProgress);
        temp = valueProgress;        
        if (valueProgress<0){
            setTimeout(function(){
                gameLose();            
                clearInterval(myProc);
            },500);
           
        }
        if (checkWin==conditionWin){
            clearInterval(myProc);
            setTimeout(function(){
                gameWin();
                
            },300);
            
        }
    }, delay);
    
}

function playSound(n) {
    document.getElementById(n + "-sound").load(),
    document.getElementById(n + "-sound").play()
}
function playAgain (){
    window.location.href='index.html';
}
// function playAgain(){
//     check=null;
//     checkWin=null;
//     $('#content').empty();
//     shuffle(arrContainImg);
//     loadCard(arrContainImg);
//     $('#lose').css('display','none');   
   
//     $('#playMode').css('display','block');    
//     $('#wrap').css('opacity','0.4');
//     $('#snow').css('opacity','0.4');
//     $('progress').css('display','none');
//     document.getElementById('music-sound').volume=0;
//     playSound('victory');
// }
function gameWin (){
    $('#win').css('display','block');    
    $('#wrap').css('opacity','0.4');
    $('#snow').css('opacity','0.4');    
    document.getElementById('music-sound').volume=0;
    playSound('victory');
}
function gameLose (){
    $('#lose').css('display','block');    
    $('#wrap').css('opacity','0.4');
    $('#snow').css('opacity','0.4');   
    document.getElementById('music-sound').volume=0;
    playSound('lost');
}
function playMode(n) {
    console.log (n);
    $('#playMode').css('display','none');
    $('#wrap').css('opacity','1');
    $('#snow').css('opacity','1');
    $('progress').css('display','block');
        playSound('welcome');
        setTimeout(function(){
            playSound('music');
        },300)
    document.getElementById('welcome-sound').volume=0.5;
    document.getElementById('music-sound').volume=0.5;
    document.getElementById('correct-sound').volume=0.4;
    document.getElementById('wrong-sound').volume=0.4;
    document.getElementById('flip-sound').volume=0.5;
    changeProgress(n);
}

$(document).ready(function () {   
    var nBg = Math.floor(4 * Math.random() + 1);
    $("body").css("background", 'url("image/bg' + nBg + '.jpg")  no-repeat'),
    shuffle(arrContainImg);
    loadCard(arrContainImg);   
    
    $('.card').on('click', function () {
        playSound('flip');
        $(this).css('pointer-events', 'none');
        $(this).addClass('openned');
        var m = $(this).attr('data-image');
        $(this).toggleClass('flipped');
        if (!check) {
            check = m;
        } else if (check != m) {
            playSound('wrong');
            $('.card').css('pointer-events', 'none');
            var imgsTrue = '[data-image=' + check + ']';
            setTimeout(function () {
                $('.openned').toggleClass('flipped');
                $('.openned').removeClass('openned');
                setTimeout(function () {
                    $('.card').css('pointer-events', 'auto');
                }, 200);
            }, 500);
            check = null;
        } else {
            
            playSound('correct');
            var imgsTrue = '[data-image=' + check + ']';
           
            setTimeout(function () {
                $(imgsTrue).css('opacity', '0');

            }, 200);
            checkWin ++;
            check = null;
        }

    });












})