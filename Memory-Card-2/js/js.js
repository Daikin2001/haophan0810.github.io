$(document).ready(function () {
    var arrContainImg = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11];
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

    shuffle(arrContainImg);
    loadCard(arrContainImg);
    
    function loadCard(arr) {
        var divImg = '<div class="front"><img src="image/front.png" alt=""></div>';
        console.log("dasdasd");
        for (var i = 0; i < arr.length; i++) {
            var divImgBack = '<div class="back" ><img src="image/i' + arr[i] + '.jpg" alt=""></div>';
            $('#content').append('<div class="contain" >' + '<div class="card"  data-image="' + arr[i] + '">' + divImgBack + divImg + '</div></div>');
        }
            playSound('welcome');
        setTimeout(function(){
            playSound('music');
        },300)
        document.getElementById('welcome-sound').volume=0.5;
        document.getElementById('music-sound').volume=0.5;
        document.getElementById('correct-sound').volume=0.4;
        document.getElementById('wrong-sound').volume=0.4;
        document.getElementById('flip-sound').volume=0.5;
        // document.getElementById('welcome-sound').volume=0.6;

    }
    function playSound(n) {
        document.getElementById(n + "-sound").load(),
        document.getElementById(n + "-sound").play()
    }
    var check = null;
    $('.card').on('click', function () {
        playSound('flip');
        $(this).css('pointer-events', 'none');
        $(this).addClass('openned');
        var m = $(this).attr('data-image');
        console.log($(this));
        console.log(m);
        $(this).toggleClass('flipped');
        if (!check) {
            check = m;
            console.log("cheeck" + check);
        } else if (check != m) {
            playSound('wrong');
            $('.card').css('pointer-events', 'none');
            var imgsTrue = '[data-image=' + check + ']';
            console.log("sai");
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
            console.log('dung');
            var imgsTrue = '[data-image=' + check + ']';
            console.log(imgsTrue);
            setTimeout(function () {
                $(imgsTrue).css('opacity', '0');

            }, 500);


            check = null;

        }

    });












})