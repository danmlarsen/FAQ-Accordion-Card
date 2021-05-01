const questions = document.querySelectorAll('.faq__list__accordion');

questions.forEach(question => {
    question.addEventListener('click', e => {
        const listItem = question.parentElement;
        listItem.classList.toggle('active');
    });
});