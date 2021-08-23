const sliderBox = document.querySelector('.slider-box');   /*получаем кнопки */
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slidesLength = slideRight.querySelectorAll('div').length;  /* посчитать количество слайдов для соотношения левых и правых */

let activeSlideIndex = 0; /*переменная определяет какой слайд активный */

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; /* высчитывается соотношение левых и правых */

upBtn.addEventListener('click', () => changeSlide('up'));       /* задаём клики */
downBtn.addEventListener('click', () => changeSlide('down'));
sliderBox.addEventListener('click', () => changeSlide('down')); /* перемотка по  клику в любой области sliderbox */

const changeSlide = (direction) => {
    const sliderHeight = sliderBox.clientHeight;
    if(direction === 'up'){   /* если прожата кнопка up */
        activeSlideIndex++;    /* к слайду добавить еденицу */
        if(activeSlideIndex > slidesLength - 1){  /* проверка */
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

   

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`; /* просто анимирование движения слайдов + вычисление высоты экрана */
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

