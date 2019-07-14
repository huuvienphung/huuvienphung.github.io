var add = document.getElementById('addItem');
var alert = document.getElementById('thongbao');


add.addEventListener('click', addItem);

function addItem(e) {
    e.preventDefault();

    var name_nd = document.getElementById('inputName').value;
    var star_nd = document.getElementById('inputStar').value;
    var body_nd = document.getElementById('inputBody').value;

    if (name_nd == '' || star_nd == '' || body_nd == '') {
        alert.style.display = 'block';
        alert.innerHTML = '<h5 class=" alert alert-danger">Sao chưa nhập đầy đủ đã gửi</h5>';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 2000);
        
    } else {
        document.getElementById('inputName').value = '';
        document.getElementById('inputStar').value = '';
        document.getElementById('inputBody').value = '';

        var percent = (star_nd / 5) * 100;

        var output = '';
        output = `
            <button class="delete btn btn-danger float-right">X</button>
            <h5 class="na_me">${name_nd}</h5>
            <div class="khoisao">
                <div class="kho">
                    <div class="stars">
                        <div class="star" style="width: ${percent}%"></div>
                    </div>
                </div>
                <span>${star_nd}</span>
            </div>
            <div class="body">${body_nd}</div>
    `;
        var li = document.createElement('li');
        li.innerHTML = output;

        let ul = document.querySelector('.nhanxet ul');

        khoiul.insertBefore(li, khoiul.childNodes[0]);

        var h3 = ul.getElementsByTagName('h3')[0];

        if (ul.children.length != 0 && h3 != null) {


            h3.remove();
        }
    }
    

};



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
};

var as = document.querySelectorAll('.size a');
var khoinut = document.querySelectorAll('.khoinut a');
var khoind = document.querySelectorAll('.khoind');


function noidung(noidung, lop, namelop, vitri) {
    if (lop == namelop) {

        for (let i = 0; i < khoind.length; i++) {
            noidung[i].style.display = 'none';
            noidung[i].style.visibility = 'hidden';
        }
        noidung[vitri].style.display = 'block';
        noidung[vitri].style.visibility = 'visible';
    }
};

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
};

click(as, 'si', null); // chọn phần kích cỡ
click(khoinut, 'tt', khoind); // chọn phần nội dung đặc điểm/ đánh giá


var users = [
    {
        name: 'Phùng Hữu Viện',
        sao: 3.4,
        body: 'sản phẩm đẹp, cảm ơn shop rất nhiều, trước đây biết shop trước thì tốt'
    },
    {
        name: 'Võ Văn Tuyền',
        sao: 3.7,
        body: 'nhận sản phẩm đẹp hơn ảnh shop gửi, cảm ơn shop đã tư vấn rất nhiệt tình'
    },
    {
        name: 'Nguyễn Trúc Quỳnh',
        sao: 4.3,
        body: 'Hàng đẹp quá, nhận xong mà ưng lắm shop'
    },
    {
        name: 'Văn Tấn Thịnh',
        sao: 1.6,
        body: 'nhận hàng đẹp lắm shop, tks bạn, giao hàng rất nhanh'
    }
];
var khoiul = document.querySelector('.nhanxet ul');

var none = '<h3 class="text-center">Không có bình luận nào</h3>';


var output = '';

for (let i = 0; i < users.length; i++) {

    var percent = (users[i].sao / 5) * 100;
    output += `
        <li>
            <button class="delete btn btn-danger float-right">X</button>
            <h5 class="na_me">${users[i].name}</h5>
            <div class="khoisao">
                <div class="kho">
                    <div class="stars">
                        <div class="star" style="width: ${percent}%"></div>
                    </div>
                </div>
                <span>${users[i].sao}</span>
            </div>
            <div class="body">${users[i].body}</div>
        </li>
    `;  
};

khoiul.innerHTML = output;

document.body.addEventListener('click', e => {
    e.preventDefault();

    
    if (e.target.classList.contains('delete')) {
        if (confirm('Bạn chắc muốn xóa')) {
            e.target.parentElement.remove();

            let ul = document.querySelector('.nhanxet ul');

            if (ul.children.length == 0) {
                ul.innerHTML = none;
            }
        }
        
    }
});








