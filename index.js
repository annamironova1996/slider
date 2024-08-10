let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const counter = document.querySelector('.counter');

function updateCounter() {
    counter.textContent = `Изображение ${index + 1} из ${totalSlides}`;
}

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateCounter();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateCounter();
}
