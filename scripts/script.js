
'use strict'

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу

    if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
        *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
        *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
        *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
        *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
        *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
        *       3.2. Нет: Конец
        *   4. Конец
        * 
        *   Блок-схема: /images/block-schema2.png
        */

        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        })

    }
});

// Объявляем переменную-массив intensiveImg и сохраняем в нее все элементы на странице с классом intensive__img  
const cardImg = document.querySelectorAll('.card__icon');

// Пройдемся по каждому элементу массива intensiveImg, с помощью цикла forEach.  Внутри функции 2 переменные: 
// item - текущее изображение, а index — его номер в массиве, начиная с 0
cardImg.forEach((item, index) => {

    // Объявляем переменную intensiveText и сохраняем в нее все элементы с классом intensive__description, которые связаны с описаниями для изображений
    const cardText = document.querySelectorAll('.card__description');

    // Когда курсор наводится на изображение (событие mouseenter), срабатывает обработчик события mouseenter:
    item.addEventListener('mouseenter', () => {
        // Делаем изображение полупрозрачным
        item.style.opacity = 0.5;
        // И удаляем атрибут hidden и текст становится видимым
        cardText[index].removeAttribute('hidden');
    });

    // Когда курсор убираем с изображения (событие mouseleave), срабатывает обработчик события mouseleave:
    item.addEventListener('mouseleave', () => {
        // Изображение делаем непрозрачным
        item.style.opacity = 1;
        // И добавляем атрибут hidden и текст становится видимым
        cardText[index].setAttribute('hidden', true);
    });


    // Дополнительные скрипты
    // Scroll up
    // Обратите внимание, что в коде выше уже есть слушатель скролла (на следующей практике уберем повторение)

    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollUpButton) {
        const windowHeight = document.documentElement.clientHeight; // Определяем высоту видимой части окна браузера
console.log("кнопка вверх найдена")
        // Показать кнопку при прокрутке вниз на высоту экрана
        document.addEventListener('scroll', () => {
            let scrollPageY = this.scrollY;
            console.log("скролим")
                console.log(scrollPageY) 
                console.log(windowHeight) 
            if (scrollPageY >= windowHeight/4) {
                scrollUpButton.classList.add('scroll-up--show'); 
            } else {
                scrollUpButton.classList.remove('scroll-up--show');
            }
        });

        // Плавная прокрутка наверх при нажатии на кнопку
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }
});
