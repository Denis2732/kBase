let tab = document.querySelector('#template').content.querySelector('.tab');
let tabs = document.querySelector('.tabs');

// Копирование кода по клику на кнопку
function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}

// Клонирование из массива
function cloning(){
    let newTab = tab.cloneNode(true);
    
    newTab.querySelector('.tab__title-text').textContent = dataJS[i].title;
    newTab.querySelector('.tab__description').textContent = dataJS[i].description;
    newTab.querySelector('.tab__code').innerHTML = dataJS[i].code;
    newTab.querySelector('.tab__code').setAttribute('name', [i]);
    newTab.querySelector('.js-btn-close').setAttribute('name', [i]);
    newTab.querySelector('.tab_content').setAttribute('name', [i]);
    newTab.querySelector('.tab__title').setAttribute('name', [i]);
    newTab.querySelector('.tab__title-text').setAttribute('name', [i]);
    newTab.querySelector('.tab__icon-state').setAttribute('name', [i]);
    newTab.querySelector('.tab__btn_close').setAttribute('name', [i]);
    newTab.querySelector('.js-btn-copy').setAttribute('name', [i]);
    newTab.setAttribute('name', [i]);
    
    
    return newTab;
}

let fragment = document.createDocumentFragment();
for (var i = 0; i < dataJS.length; i++){

    fragment.appendChild(cloning(i));
    
}

tabs.appendChild(fragment);


let tabContent = document.querySelector('.tab_content');
let iconState = document.querySelector('.tab__icon-state');
let tabBtn = document.querySelectorAll('.tab');
let tabBtnClose = document.querySelectorAll('.js-btn-close');
let tabCode = document.querySelectorAll('.tab__code');

// Табы
tabs.addEventListener('click', function(event){
    let elem = event.target;
    let data = elem.getAttribute('name');
    
    for(var i = 0; i < tabBtn.length; i++){
        if(tabBtn[i].getAttribute('name') == data){
            tabBtn[i].classList.add('tab_active')
        } if(tabBtn[i].getAttribute('name') != data){
            tabBtn[i].classList.remove('tab_active')
        } if(elem.classList.contains('js-btn-close') || elem.classList.contains('tab__btn_close')) {
            if(tabBtn[i].getAttribute('name') == data){
                tabBtn[i].classList.remove('tab_active')
            }
        } if(elem.classList.contains('js-btn-copy') || elem.classList.contains('tab__btn_copy')) {
            if(tabCode[i].getAttribute('name') == data){
                copytext(tabCode[i])
            }
        }   
    };

});

// Подсветка ключевых слов
function highlight(text, words, tag) {
    tag = tag || 'span';
    var len = words.length, re;
    for (var idx = 0; idx < len; idx++) {
        re = new RegExp(words[idx], 'g');
        if (re.test(text)) {
            text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
        }
    }
    return text;
}
$('.tab__code').each(function( index ) {
    $(this).html( highlight(
        $(this).html(), // текст для поиска
        ['Lorem', 'let', 'function', 'var', 'const', 'true', 'false', 'return'], // слова для обрамления
        'strong'// тег обрамления
    ));
    $(this).html( highlight(
        $(this).html(), // текст для поиска
        ['cloneNode', 'querySelector', 'getAttribute', 'add', 'remove', 'appendChild', 'setAttribute', 'contains', 'createDocumentFragment'], // слова для обрамления
        'b'// тег обрамления
    ));
    $(this).html( highlight(
        $(this).html(), // текст для поиска
        ['for', 'if', 'else', 'length', 'textContent', 'innerHTML'], // слова для обрамления
        'd'// тег обрамления
    ));

});

let theme = document.querySelector('.header__button-theme-bg');
let body = document.querySelector('body');
let btnInfo = document.querySelector('.header__button-info');
let modalWrap = document.querySelector('.modal_wrapper_none');
let btnClose = document.querySelector('.modal__btn_close');
let iconClose = document.querySelector('.modal__icon-close');

// Сохранение темы при переходе по страницам
$(document).ready ( function(){
    let counterDark = localStorage.getItem('Dark');
    if(counterDark == 'Yes'){
        body.classList.toggle('body_dark');
        iconClose.classList.add('modal__icon-close_dark')
    }
});

// Смена Темы
theme.addEventListener('click', function(){
    body.classList.toggle('body_dark');
    if(body.classList.contains('body_dark')){
        localStorage.setItem('Dark', 'Yes');
        iconClose.classList.add('modal__icon-close_dark')
    } else {
        localStorage.setItem('Dark', 'No');
        iconClose.classList.remove('modal__icon-close_dark')
    }
})
// Модалка
btnInfo.addEventListener('click', function(){
    body.classList.toggle('body-modal_block')
})
modalWrap.addEventListener('click', function(){
    body.classList.toggle('body-modal_block')
})
btnClose.addEventListener('click', function(){
    body.classList.toggle('body-modal_block')
})

