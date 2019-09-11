const form = document.getElementById('form');
const text = document.getElementById('text');
const lists = document.querySelector('.list-group');
const del = document.getElementById('del');
const search = document.getElementById('search');



loadEventListener();

function loadEventListener() {

    document.addEventListener('DOMContentLoaded', loadLocal);

    // add item
    form.addEventListener('submit', addItem);

    //remove item
    lists.addEventListener('click', removeItem);

    // clear tất cả
    del.addEventListener('click', clearAll);

    // search item
    search.addEventListener('keyup', filter);
}

function loadLocal() {
    let items;

    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    items.forEach(function(item) {

        const li = document.createElement('li');
        li.className = 'list-group-item';

        li.appendChild(document.createTextNode(item));

        // tạo link a để xóa
        const link = document.createElement('a');
        link.className = 'delete float-right';
        link.innerHTML = '<i class="fas fa-times btn btn-danger"></i>';

        // add link vào li
        li.appendChild(link);

        // add li vào ul
        lists.insertBefore(li, lists.childNodes[0]);
    })
}

function addLocal(item) {
    let items;

    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
}

function addItem(e) {

    if (text.value === '') {
        alert('chưa nhập gì mà!');
    } else {

        // tạo con li
        const li = document.createElement('li');
        li.className = 'list-group-item';

        li.appendChild(document.createTextNode(text.value));

        // tạo link a để xóa
        const link = document.createElement('a');
        link.className = 'delete float-right';
        link.innerHTML = '<i class="fas fa-times btn btn-danger"></i>';

        // add link vào li
        li.appendChild(link);

        // add li vào ul
        lists.insertBefore(li, lists.childNodes[0]);

        // add local
        addLocal(text.value);

        text.value = '';
        
    }

    e.preventDefault();
}

function deleteLocal(li) {
    let items;

    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    items.forEach(function(item, index) {
        if(li.textContent === item) {
            items.splice(index, 1);
        }
    })
    localStorage.setItem('items', JSON.stringify(items));
    
}
function removeItem(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        if (confirm('bạn muốn xóa!')) {
            e.target.parentElement.parentElement.remove();

            deleteLocal(e.target.parentElement.parentElement);
            
        }
    }
    e.preventDefault();
}
function clearLocal() {
    localStorage.clear();
}
function clearAll(e) {
    if (confirm('bạn muốn xóa tất cả!')) {
        // lists.innerHTML = ''; // không tốt

        while(lists.firstChild) {
            lists.removeChild(lists.firstChild);
        }

        clearLocal();

    }
    e.preventDefault();
}

function filter(e) {
    
    var valu = e.target.value.toUpperCase();

    // var lis = lists.querySelectorAll('.list-group-item');
    var lis = document.querySelectorAll('li');
    
    lis.forEach(function(li) {

        const item = li.firstChild.textContent;
        
        if (item.toUpperCase().indexOf(valu) != -1) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    })
    
}