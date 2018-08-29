$('.b1').on('click', function() {
    $('.t1').css( 'color', 'green');
});

$('.b1').on('click', function() {
    $(this).css( 'color', 'green');
});

$('.b2').on('click', function() {
    $('.t2').css( 'background-color', 'yellow');
});

$('.b3').on('click', function() {
    $('.t3 a').attr('href', 'https://ebanoe.it/');
});

$('.b4').on('click', function () {
    $('.t4 img').attr('src', 'images/silvia.jpg');
});

$('.b5').on('click', function () {
    $('.t5').attr('id', 'ba');
});

$('.b6').on('click', function () {
    $('.t6').text('id');
});

$('.b7').on('click', function () {
    $('.t7').html('<i>Носки</i>');
});

$('.b8').on('click', function () {
    $('.t8 ').css('font-size', '25px');
});

$('.b9').on('click', function () {
    $('.t9').addClass('hi');
});

$('.b10').on('click', function () {
    $('.t10').removeClass('hi');
});

$('.b11').on('click', function () {
    $('.t11').toggleClass('hi');
});

$('body').on('click', function (event) {
    $('.t12').html($(event.target).attr('class'));
});

$('.b13').on('click', function () {
    $('.t13').text($('.t13').attr('data-en'));
});

$('.b14').on('click', function () {
    var newWhore =  ('<div class="whore whore_jasmin"></div>');

    $('.whores-container').append(newWhore);
    $('.whore_jasmin').html(
        '<div class="whore-name">'+ whore.name +'</div>' +
        '<img src= '+ whore.photo +' width="200">' +
        '<div class="whore-age">Возраст: '+ whore.age +'</div>' +
        '<div class="whore-boobs">Размер груди: '+ whore.boobs +'</div>' +
        '<div class="whore-height">Рост: '+ whore.height +'</div>' +
        '<div class="whore-weight">Вес: '+ whore.heigh +'</div>'+
        '<div class="whore-phone">'+ whore.phone +'</div>' +
        '<div class="whore-can-come">Выезд: '+ (whore.can_come ? 'Да' : '-') + '</div>' +
        '<div class="whore-teaser">' + whore.teaser + '</div>');
    $('.b14').off();
});

$('.b15').on('click', function () {
    if ($('.cat-container-1 .fish').get(0) !== undefined) {
        $('.cat-container-2').append($('.fish'));
    } else {
        $('.cat-container-1').append($('.fish'));
    }
});

document.querySelector('.b16').addEventListener('click', function () {
    $('.tooth').css('display', 'none');
    $('.boy').css('display', 'block');
});

var possitionLeft = 0;
var moveSkinner = function(){
    possitionLeft += 5;
    $('.skier').css('left', possitionLeft + 'px');
};

$('.b17').on('click', function() {
    var setIntervalSkinner;
    setIntervalSkinner = setInterval(moveSkinner, 16);
    $('.b17-2').on('click', function () {
        clearInterval(setIntervalSkinner);
    });
});

var resultHTML = '';
for (var i = 0; i < mikki.length; i++) {
    for (var j = 0; j < mikki[i].length; j++) {
        if (mikki[i][j] === 'X'){
            resultHTML += '<div class="mikki_tile" style ="background: #000000" ></div>'
        }
        else resultHTML += '<div class="mikki_tile"></div>'
    }
}

$('.mikki_tiles').html(resultHTML);
$('.mikki_tile').css('outline', '1px solid gray');

$('.b18').on('click', function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var top = i * 16;
            var left = j * 16;
            var el = document.createElement('div');
            if (map[i][j] === 'z'){
                $(el).addClass('x_z')
            }
            if (map[i][j] === 'k'){
                $(el).addClass('x_k');
            }
            if (map[i][j] === 'c'){
                $(el).addClass('x_c');
            }
            if (map[i][j] === 't'){
                $(el).addClass('x_t');
            }
            if (map[i][j] === 'q'){
                $(el).addClass('x_q');
            }
            if (map[i][j] === 'b'){
                $(el).addClass('x_b');
            }
            if (map[i][j] === 'd'){
                $(el).addClass('x_d');
            }
            if (map[i][j] === 'w'){
                $(el).addClass('x_w');
            }
            $(el).addClass('tile');
            $(el).css('top', top +'px');
            $(el).css('left', left +'px');
            $('.scene').append(el);
        }
    }
});