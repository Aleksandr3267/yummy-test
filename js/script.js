let cardText = document.querySelectorAll('.card .click');
let cardBlock = document.querySelectorAll('.card .block');
let card = document.querySelector('.card');


cardText.forEach(function (text) {
    text.addEventListener('click', () => {
        if (text.parentNode.parentNode.classList.contains('disabled')) { }
        else {
            text.parentNode.previousElementSibling.classList.add('selected');
            text.parentNode.classList.add('disable');
            text.parentNode.nextElementSibling.classList.add('selected');
        }
    });
});



cardBlock.forEach(function (item) {
    item.addEventListener('click', () => {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
            item.nextElementSibling.classList.remove('disable');
            item.nextElementSibling.nextElementSibling.classList.remove('selected');
            item.classList.remove('hover');
            item.classList.remove('hoverS');
            item.firstElementChild.firstElementChild.lastElementChild.classList.add('anim');
        } else if (item.parentNode.classList.contains('disabled')) { }
        else {
            item.classList.add('selected');
            item.nextElementSibling.classList.add('disable');
            item.nextElementSibling.nextElementSibling.classList.add('selected');
            item.classList.remove('hover');
            item.classList.remove('hoverS');
        }
    });
    item.addEventListener("mouseenter", () => {
        if (item.parentNode.classList.contains('disabled')) { }
        else if (item.classList.contains('selected')) {
            item.classList.add('hoverS');
        } else {
            item.classList.add('hover');
        }
    });
    item.addEventListener("mouseleave", () => {
        if (item.parentNode.classList.contains('disabled')) { }
        else if (item.classList.contains('selected')) {
            item.classList.remove('hoverS');
        } else {
            item.classList.remove('hover');
        }
    });

});


