// phan sp

var clickcarts = document.querySelectorAll('.cartpro');
var changenumber = document.querySelector('.cart small');

var pluss = document.querySelectorAll('.fa-plus');
var minuss = document.querySelectorAll('.fa-minus')

clickcarts.forEach(function (clickcart, idx) {
    clickcart.addEventListener('click', e => {
        e.preventDefault();

        changenumber.textContent++;
    })
})
// phần tăng giảm số lượng

pluss.forEach(function (plus) {
    plus.addEventListener('click', e => {
        e.preventDefault();
        // console.log(e.target);

        // e.target.previousElementSibling.value;
        e.target.parentElement.previousElementSibling.value++;
    })
})
minuss.forEach(function (minus) {
    minus.addEventListener('click', e => {
        e.preventDefault();
        // console.log(e.target);

        // e.target.previousElementSibling.value;
        if (e.target.parentElement.nextElementSibling.value != 0) {
            e.target.parentElement.nextElementSibling.value--;
        }
    })
})
// ===========================================

// ======================================

// var iso = new Isotope(elem, {
//     itemSelector: '.sp',
//     layoutMode: 'fitRows'
// });
// var iso = new Isotope('.khoisp', { layoutMode: 'fitRows'});
// imagesLoaded(elem).on('progress', function () {
//     iso.layout();
// });


var phantus = document.querySelectorAll('.choosen');
var thaydoi = document.getElementById('thaydoi');
var menh = document.getElementById('menh');
var elem = document.querySelector('.khoisp');
var thongbao = document.getElementById('thongbao');
console.log(thongbao);

var sp = elem.querySelectorAll('.sp');

phantus.forEach(function(phantu) {
    phantu.addEventListener('click', e => {
        e.preventDefault();
        thongbao.innerHTML = '';
        for (let i = 0; i < phantus.length; i++) {
            phantus[i].classList.remove('chon');        
        }
        e.target.classList.add('chon');
        thaydoi.textContent = e.target.textContent;
        menh.textContent = '';
        var k = 0;
        var datachon = e.target.getAttribute('data-chon');
        
        for (let i = 0; i < sp.length; i++) {

            if (datachon == 'khong') {
                sp[i].style.display = 'block';
                
            } else {
                if (sp[i].classList.contains(datachon)) {
                    sp[i].style.display = 'block';
                    
                } else {
                    sp[i].style.display = 'none';
                    k++;
                    
                    if (k == sp.length) {
                        thongbao.innerHTML = 'không có sản phẩm!';
                    }

                }
            }
            
        }
    })

})
    // ==============================================

var iteminput = document.querySelector('input#tk');
var select = document.querySelector('select');

select.addEventListener('click', test);
function test() {
    if (select.value != 'Lựa chọn theo mệnh') {
        menh.textContent = ' - '+select.value;
    } else {
        menh.textContent = '';
    }
}

iteminput.addEventListener('keyup', runEvent);
function runEvent(e) {
    // let khoisp = document.querySelector('.khoisp');

    if (e.target.value == '') {
        thaydoi.textContent = 'ĐÁ PHONG THỦY';
        for (let i = 0; i < sp.length; i++) {
            sp[i].style.display = 'block';    
        }
    } else {
        thaydoi.textContent = e.target.value;
        var nhapvao = e.target.value.toUpperCase();
        
        
        for (let i = 0; i < sp.length; i++) {
            let h6 = sp[i].getElementsByTagName('h6')[0];

            if (h6.innerHTML.toUpperCase().indexOf(nhapvao) > -1) {
                sp[i].style.display = 'block';
            } else {
                sp[i].style.display = 'none';
            }
            
        }
        
        
    }

}
