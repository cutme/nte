document.addEventListener('DOMContentLoaded',function() {    const el = document.getElementsByClassName('js-productThumb');    window.thumbs = function() {        const big = document.getElementsByClassName('js-image')[0];        const enlarge = function(e) {            const img = e.currentTarget.getAttribute('href');                        big.setAttribute('href', img);            big.getElementsByTagName('img')[0].setAttribute('src', img);            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;        };        for (let i = 0; i < el.length; i ++) {            el[i].addEventListener('click', enlarge);        }            };}, false);