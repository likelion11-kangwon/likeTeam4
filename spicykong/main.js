let page = 2;
window.onload = function() {
    page1();
}
function setAll(a, b) {
    for (const el of a) {
        el.style.display = b;
    }
}

function page1() {
    setAll(document.querySelectorAll(".card1"), "");
    setAll(document.querySelectorAll(".card2"), "none");
    document.querySelector('.marker#m1').style.zIndex='6';
    document.querySelector('.marker#m2').style.zIndex='4';
}

function page2() {
    setAll(document.querySelectorAll(".card1"), "none");
    setAll(document.querySelectorAll(".card2"), "");
    document.querySelector('.marker#m1').style.zIndex='4';
    document.querySelector('.marker#m2').style.zIndex='6';
}