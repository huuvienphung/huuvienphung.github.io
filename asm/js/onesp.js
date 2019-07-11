var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
    // cellAlign: 'left',
    prevNextButtons: false,
    wrapAround: true,
    // autoPlay: true
    fade: true
});
var elem2 = document.querySelector('.carousel-nav');

var flkty = new Flickity(elem2, {
    asNavFor: elem,
    // cellAlign: 'left',
    prevNextButtons: false,
    wrapAround: true,
    // autoPlay: true
    pageDots: false,
    prevNextButtons: false,
    fade: true
});

document.body.addEventListener('mouseover', mouse);

function mouse(e) {

    var zoom = document.querySelector('.zoom.is-selected')
    zoom.addEventListener('mousemove', zooms)
    
    function zooms(e) {
        var zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX;
        e.offsetY ? offsetY = e.offsetY : offsetX;
        x = (offsetX / zoomer.offsetWidth) * 100;
        y = (offsetY / zoomer.offsetHeight) * 100;
        zoomer.style.backgroundPosition = x + "% " + y + "%";
        zoomer.style.backgroundSize = '150%';
    }
}

