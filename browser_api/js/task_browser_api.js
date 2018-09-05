document.querySelector('.b1').addEventListener('click', function() {
    document.querySelector('.t1').style.color = 'green';
});

document.querySelector('.b2').addEventListener('click', function() {
    document.querySelector('.t2').style.background = 'green';
});

document.querySelector('.b3').addEventListener('click', function () {
    document.querySelector('.t3 a').setAttribute('href', 'https://ebanoe.it/');
});

document.querySelector('.b4').addEventListener('click', function () {
    document.querySelector('.t4 img').setAttribute('src', 'images/silvia.jpg');
});

document.querySelector('.b4').addEventListener('click', function () {
    document.querySelector('.t4 img').setAttribute('src', 'images/silvia.jpg');
});

document.querySelector('.b5').addEventListener('click', function () {
    document.querySelector('.t5').setAttribute('id', 'ba');
});

/*document.querySelector('.b6').addEventListener('click', function () {
    document.querySelector('.t6').innerText='id';
});*/

/*document.querySelector('.b6').addEventListener('click', function () {
    document.querySelector('.t6').textContent='id';
});*/

document.querySelector('.b6').addEventListener('click', function () {
    document.querySelector('.t6').innerHTML='id';
});

document.querySelector('.b7').addEventListener('click', function () {
    document.querySelector('.t7').innerHTML='Тест <i>Цветы</i>';
});

document.querySelector('.b8').addEventListener('click', function() {
    document.querySelector('.t8').style.fontSize='18px';
});

document.querySelector('.b9').addEventListener('click', function () {
    document.querySelector('.t9').classList.add('hi');
});

document.querySelector('.b10').addEventListener('click', function () {
    document.querySelector('.t10').classList.remove('hi');
});

document.querySelector('.b11').addEventListener('click', function () {
    document.querySelector('.t11').classList.contains('hi') ? document.querySelector('.t11').classList.remove('hi') : document.querySelector('.t11').classList.add('hi');
});

document.body.addEventListener('click', function (e) {
    var target = e.target;
    document.querySelector('.t12').textContent = target.className;
});

document.querySelector('.b13').addEventListener('click', function () {
    document.querySelector('.t13').innerText = document.querySelector('.t13').getAttribute('data-en');
});

document.querySelector('.b14').addEventListener('click', function () {
    var newWhore =  document.createElement('div');
    newWhore.setAttribute('class', 'whore whore_jasmin');
    document.querySelector('.whores-container').appendChild(newWhore);
    document.querySelector('.whore_jasmin').innerHTML =
        '<div class="whore-name">'+ whore.name +'</div>' +
        '<img src= '+ whore.photo +' width="200">' +
        '<div class="whore-age">Возраст: '+ whore.age +'</div>' +
        '<div class="whore-boobs">Размер груди: '+ whore.boobs +'</div>' +
        '<div class="whore-height">Рост: '+ whore.height +'</div>' +
        '<div class="whore-weight">Вес: '+ whore.heigh +'</div>'+
        '<div class="whore-phone">'+ whore.phone +'</div>' +
        '<div class="whore-can-come">Выезд: '+ (whore.can_come ? 'Да' : '-') +'</div>' +
        '<div class="whore-teaser">' + whore.teaser + '</div>';
});

document.querySelector('.b15').addEventListener('click', function () {
    document.querySelector('.cat-container-1').innerHTML =
        '<img class="cat" src="images/kat.png" width="100">' + '<img class="cat" src="images/kat.png" width="100">';
    document.querySelector('.cat-container-2').innerHTML=
        '<img class="fish" src="images/fish.jpg" width="100">';
});

document.querySelector('.b16').addEventListener('click', function () {
    document.querySelector('.tooth').style.display = 'none';
    document.querySelector('.boy').style.display = 'block';
});

document.querySelector('.b17').addEventListener('click', function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var top = i * 16;
            var left = j * 16;
            var el = document.createElement('div');
            if (map[i][j] === 'z'){
                el.setAttribute('class', 'tile x_z');
            }
            if (map[i][j] === 'k'){
                el.setAttribute('class', 'tile x_k');
            }
            if (map[i][j] === 'c'){
                el.setAttribute('class', 'tile x_c');
             }
            if (map[i][j] === 't'){
                el.setAttribute('class', 'tile x_t');
            }
            if (map[i][j] === 'q'){
                el.setAttribute('class', 'tile x_q');
            }
            if (map[i][j] === 'b'){
                el.setAttribute('class', 'tile x_b');
            }
            if (map[i][j] === 'd'){
                el.setAttribute('class', 'tile x_d');
            }
            if (map[i][j] === 'w'){
                el.setAttribute('class', 'tile x_w');
            }
            if (map[i][j] === '') {
                el.setAttribute('class', 'tile');
            }
            el.style.top = top +'px';
            el.style.left = left +'px';
            document.querySelector('.scene').appendChild(el);
        }
    }
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
document.querySelector('.mikki_tiles').innerHTML = resultHTML;

var possitionLeft = 0;

var moveSkinner = function(){
    possitionLeft += 5;
    document.querySelector('.skier').style.left = possitionLeft + 'px';
};

document.querySelector('.b18').addEventListener('click', function() {
    var setIntervalSkinner;
    setIntervalSkinner = setInterval(moveSkinner, 16);

    document.querySelector('.b18-2').addEventListener('click', function () {
            clearInterval(setIntervalSkinner);
    });
});

var currentImage;
var nextImage;

document.querySelector('.next').addEventListener('click', function () {
    currentImage = document.querySelector('.active');
    nextImage = document.querySelector('.active').nextElementSibling;
    if (nextImage.classList.contains('slide') === true) {
    currentImage.classList.remove('active');
    nextImage.classList.add('active');
    }
});

document.querySelector('.previous').addEventListener('click', function () {
    currentImage = document.querySelector('.active');
    nextImage = document.querySelector('.active').previousElementSibling;
    if (nextImage.classList.contains('slide') === true) {
        currentImage.classList.remove('active');
        nextImage.classList.add('active');
    }
});


document.body.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('question') === true) {
        //target.classList.contains('active') ?  target.classList.remove('active') : target.classList.add('active');
        target.classList.toggle('active');
    }


/*   else {
       clickedElement.classList.add('active')
   }*/
});

document.querySelector('.show-login-pop-up').addEventListener('click', function () {
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.pop-up').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.pop-up').style.display = 'none';
});

document.body.addEventListener('click', function (e) {
    var currentTab = document.querySelector('.x-tabs .active');
    var currentEl;
    var currentElAttribute;
    var targetTab = e.target;
    var targetEl;
    var targetElAttribute;

    if (targetTab.classList.contains('x-tab') === true) {
        currentTab.classList.remove('active');
        targetTab.classList.add('active');
        currentElAttribute = currentTab.getAttribute('data-tab');
        targetElAttribute = targetTab.getAttribute('data-tab');
        currentEl = document.querySelector('[data-section="' + currentElAttribute + '"]');
        targetEl = document.querySelector('[data-section="' + targetElAttribute + '"]');
        currentEl.classList.remove('active');
        targetEl.classList.add('active');
    }
});


/*document.querySelector('.link-ebanoe').onclick = function (e) {
    e.preventDefault();
};*/

document.querySelector('.link-ebanoe').addEventListener('click', function(e) {
    e.preventDefault();
});

var loadGames = function(games) {
    var gameTemplate = document.querySelector('#game-template').innerHTML;
    var gameTemplateFn = doT.template(gameTemplate);
    var result = '';
    for (var i = 0; i < games.length; i++) {
        result += gameTemplateFn(games[i]);
    }
    return result;
};

document.querySelector('.load-more').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:3000/');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.games').innerHTML += loadGames(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
});

var loadTemplate = function(navLinks) {
    var navTemplate = document.querySelector('#nav-template').innerHTML;
    var navTemplateEn = doT.template(navTemplate);
    return navTemplateEn(navLinks);
};

document.querySelector('.btn-nav-en').addEventListener('click', function () {
    document.querySelector('.nav').innerHTML = loadTemplate({
        links: navLinksEn
    });
});

document.querySelector('.btn-nav-ro').addEventListener('click', function () {
    document.querySelector('.nav').innerHTML = loadTemplate({
        links: navLinksRo
    });
});

document.querySelector('[name="email"]').addEventListener('focus', function (){
    document.querySelector('.field_name_email').classList.add('focused');
    document.querySelector('.field_name_email').classList.remove('invalid')
});

var regexp = new RegExp();
document.querySelector('[name="email"]').addEventListener('blur', function (){
    document.querySelector('.field_name_email').classList.remove('focused');
    regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var tested = document.querySelector('[name="email"]').value;
    if (regexp.test(tested) === true) {
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_email').classList.add('invalid');
    }
});

document.querySelector('[name="userName"]').addEventListener('focus', function (){
    document.querySelector('.field_name_username').classList.add('focused');
    document.querySelector('.field_name_username').classList.remove('invalid')
});

document.querySelector('[name="userName"]').addEventListener('blur', function (){
    document.querySelector('.field_name_username').classList.remove('focused');
    regexp = /^[a-zA-Z]{3,10}$/;
    var tested = document.querySelector('[name="userName"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_username').classList.add('invalid');
    }
});

document.querySelector('[name="password"]').addEventListener('focus', function (){
    document.querySelector('.field_name_password').classList.add('focused');
    document.querySelector('.field_name_password').classList.remove('invalid')
});

document.querySelector('[name="password"]').addEventListener('blur', function (){
    document.querySelector('.field_name_password').classList.remove('focused');
    regexp = /^[a-zA-Z0-9]{8,20}$/;
    var tested = document.querySelector('[name="password"]').value;
    if (regexp.test(tested) === true) {
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_password').classList.add('invalid');
    }
});

document.querySelector('[name="firstname"]').addEventListener('focus', function (){
    document.querySelector('.field_name_first-name').classList.add('focused');
    document.querySelector('.field_name_first-name').classList.remove('invalid')
});

document.querySelector('[name="firstname"]').addEventListener('blur', function (){
    document.querySelector('.field_name_first-name').classList.remove('focused');
    regexp = /^[a-zA-Z]{3,15}$/;
    var tested = document.querySelector('[name="firstname"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_first-name').classList.add('invalid');
    }
});

document.querySelector('[name="lastname"]').addEventListener('focus', function (){
    document.querySelector('.field_name_last-name').classList.add('focused');
    document.querySelector('.field_name_last-name').classList.remove('invalid')
});

document.querySelector('[name="lastname"]').addEventListener('blur', function (){
    document.querySelector('.field_name_last-name').classList.remove('focused');
    regexp = /^[a-zA-Z]{4,20}$/;
    var tested = document.querySelector('[name="lastname"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_last-name').classList.add('invalid');
    }
});

document.querySelector('[name="address"]').addEventListener('focus', function (){
    document.querySelector('.field_name_address').classList.add('focused');
    document.querySelector('.field_name_address').classList.remove('invalid')
});

document.querySelector('[name="address"]').addEventListener('blur', function (){
    document.querySelector('.field_name_address').classList.remove('focused');
    regexp = /^[a-zA-Z]{4,30}$/;
    var tested = document.querySelector('[name="address"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_address').classList.add('invalid');
    }
});

document.querySelector('[name="city"]').addEventListener('focus', function (){
    document.querySelector('.field_name_city').classList.add('focused');
    document.querySelector('.field_name_city').classList.remove('invalid')
});

document.querySelector('[name="city"]').addEventListener('blur', function (){
    document.querySelector('.field_name_city').classList.remove('focused');
    regexp = /^[a-zA-Z]{3,16}$/;
    var tested = document.querySelector('[name="city"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_city').classList.add('invalid');
    }
});

document.querySelector('[name="zip"]').addEventListener('focus', function (){
    document.querySelector('.field_name_zip').classList.add('focused');
    document.querySelector('.field_name_zip').classList.remove('invalid')
});

document.querySelector('[name="zip"]').addEventListener('blur', function (){
    document.querySelector('.field_name_zip').classList.remove('focused');
    regexp = /^[0-9]{5}$/;
    var tested = document.querySelector('[name="zip"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_zip').classList.add('invalid');
    }
});

document.querySelector('[name="phonenumber"]').addEventListener('focus', function (){
    document.querySelector('.field_name_phone-number').classList.add('focused');
    document.querySelector('.field_name_phone-number').classList.remove('invalid')
});

document.querySelector('[name="phonenumber"]').addEventListener('blur', function (){
    document.querySelector('.field_name_phone-number').classList.remove('focused');
    regexp = /^[+][0-9]{12}$/;
    var tested = document.querySelector('[name="phonenumber"]').value;
    if (regexp.test(tested) === true) {
        console.log('yes')
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_phone-number').classList.add('invalid');
    }
});

document.querySelector('[name="coupon"]').addEventListener('focus', function (){
    document.querySelector('.field_name_promo-code').classList.add('focused');
    document.querySelector('.field_name_promo-code').classList.remove('invalid')
});

document.querySelector('[name="coupon"]').addEventListener('blur', function (){
    document.querySelector('.field_name_promo-code').classList.remove('focused');
    regexp = /^[a-zA-Z0-9]{10}$/;
    var tested = document.querySelector('[name="coupon"]').value;
    if (regexp.test(tested) === true) {
    }
    if (regexp.test(tested) === false) {
        document.querySelector('.field_name_promo-code').classList.add('invalid');
        console.log('777');
    }
    if (tested === '') {
        document.querySelector('.field_name_promo-code').classList.remove('invalid');
    }
});