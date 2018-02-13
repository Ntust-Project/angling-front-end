console.log('%c(๑•́ ₃ •̀๑)', 'color: #fff; font-size: 50px;');
if ('addEventListener' in window) {
window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}