const buttons = document.querySelectorAll('.faq__inner__button');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        const listItem = btn.parentElement;
        listItem.classList.toggle('active');
    });
});