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

document.body.addEventListener('click', function () {
    console.log(event.currentTarget);
    document.querySelector('.t12').innerHTML = 'хуй';

});

document.querySelector('.b13').addEventListener('click', function () {
    document.querySelector('.t13').innerHTML='Sun';
});
