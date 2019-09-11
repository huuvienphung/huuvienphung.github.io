const a = document.querySelectorAll('.cordian li > a[href="#"]');
        // gọi a là những thẻ có href[#] được click

for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function(e) {
        e.preventDefault();

        
        if (!this.nextElementSibling.classList.contains('xuathien')) {
            let ul = this.parentElement.parentElement
            // tìm đến thẻ ul cha của cái được click

            for (var i = 0; i < ul.children.length; i++) {
                let li = ul.children[i];
                // dùng vòng lặp duyệt những thẻ con của ul cùng cấp đầu tiên

                if (li.lastElementChild.classList.contains('xuathien')) {
                    // kiểm tra những thẻ đồng cấp nếu có con cuối ul có class là d-block thì thực hiện remove d-block và remove thẻ con có class xoay
                    li.lastElementChild.classList.remove('xuathien');
                    li.firstElementChild.firstElementChild.classList.remove('xoay');
                }
            }
        }
        this.nextElementSibling.classList.toggle('xuathien');
        this.firstElementChild.classList.toggle('xoay');

    })
}