// Добавляем прослушку на всех окнах

window.addEventListener('click' , function(event) {
    

    // Обьявляем переменную для счетчика
    let counter;


    // Проверяем клик строго по кнопкам Плюс либо минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    // Находим обертку счетчика 
    const counterWrapper = event.target.closest('.counter-wrapper')

    // Находим div с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');


    }

    // Когда я кликаю на любой элемент внутри страницы создается event 

    // event.target  показывает конкретный элемент по котором я кликнул

    // console.log(event.target.dataset.action) // У этого элемента есть data-action?


    // Проверяем является ли элемент по которому был совершен клик кнопкой plus
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText
        
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой plus

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }

})