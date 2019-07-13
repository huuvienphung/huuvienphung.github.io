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

var as = document.querySelectorAll('.size a');
var khoinut = document.querySelectorAll('.khoinut a');
var khoind = document.querySelectorAll('.khoind');


function noidung(noidung, lop, namelop, vitri) {
    if (lop == namelop) {

        for (let i = 0; i < khoind.length; i++) {
            noidung[i].style.display = 'none';
        }
        noidung[vitri].style.display = 'block';
    }
}

function click(phantus, lop, khoind) {
    phantus.forEach(function (phantu, vitri) {
        phantu.addEventListener('click', e => {
            e.preventDefault();
            
            for (let i = 0; i < phantus.length; i++) {
                phantus[i].classList.remove(lop);
            }
            e.target.classList.add(lop);

            noidung(khoind, lop, 'tt', vitri);
            
        })
    })
}

click(as, 'si', null); // chọn phần kích cỡ
click(khoinut, 'tt', khoind); // chọn phần nội dung đặc điểm/ đánh giá


