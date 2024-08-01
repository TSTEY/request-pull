let slideIndex = 0;

document.querySelector('.next').onclick = function() {
    moveSlides(1);
};

document.querySelector('.prev').onclick = function() {
    moveSlides(-1);
};

function moveSlides(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}
