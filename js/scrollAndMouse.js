let wheel = false;
let mouseDown = false;

document.onmousedown = function () {
    mouseDown = true;
}

document.onmouseup = function () {
    mouseDown = false;
}

function listenWheel() {
    wheel = true;

}

function scrollEvent(event) {
    let scrollY = this.scrollY;
    let node = document.getElementById("menu-selector");
    let body = document.getElementsByTagName("body")[0];

    let x = scrollY * (node.scrollWidth - node.clientWidth + 20) / (body.scrollHeight);///2.5;
    if (mouseDown || wheel) {
        node.scrollTo(x, 0);
        wheel = false;
    }    
};

function menuSelectorSlide(m) {
    let node = document.getElementById("menu-selector");

    let u_clientWidth = node.clientWith;  // Grösse de Angezeigten Balken
    let u_ScrollLet = node.scrollLeft;    // Position i Balken
    let u_ScrollWidth = node.scrollWidth; // Gesamte Inhalt Größe

    let width = node.scrollWidth - node.clientWidth;
    let step = Math.max(width / 100,5);

    let menuSliderX = node.scrollLeft;  // Position Balken

    menuSliderX += step * m;
    if (menuSliderX > width) {
        menuSliderX = width;
    }
    if (menuSliderX < 0) {
        menuSliderX = 0;
    }

    node.scrollTo(menuSliderX, 0);
}

function addScrollListener() {
    window.addEventListener('wheel', listenWheel, true);
    window.addEventListener('mousewheel', listenWheel, true); // Safari
    window.addEventListener('scroll', scrollEvent,true);
}
