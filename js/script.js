
$(function () {

    $('.woman__items').slick({
        nextArrow: '<button type = "button" class = "slick__btn slick-next"></button>',
        prevArrow: '<button type = "button" class = " slick__btn slick-prev"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $('.man__items').slick({
        nextArrow: '<button type = "button" class = "slick__btn slick-next"></button>',
        prevArrow: '<button type = "button" class = " slick__btn slick-prev"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });

});
const cardresult = document.querySelector('.popup__items')

/*
Для одной карточки
const btnMinus = document.querySelector('[data-action="minus"]');//Находим кнопку (-)
const btnPlus = document.querySelector('[data-action="plus"]');//Находим кнопку (+)
const btnCount = document.querySelector('[data-counter]');//Находим кнопку (счетчик)


btnMinus.addEventListener('click', function (){
    //Пишем внутри условии, чтобы количество (штук) не могло быть меньше 1
    if ( parseInt(btnCount.innerText) > 1){//parseInt - пребразует строковый тип в числовый
        //При нажатии на - innerText сохраняет значение и при клике уменьшает на 1 и сохраняет последнее значение(декремент)
        btnCount.innerText = --btnCount.innerText;   //innerText - меняет текст внутри тега ( В моем случаи текст внутри переменной btnCount)
    }

});

btnPlus.addEventListener('click', function (){
    //При нажатии на + innerText сохраняет значение и при клике увеличивает на 1 и сохраняет последнее значение(инкремент)
    btnCount.innerText = ++btnCount.innerText;   //innerText - меняет текст внутри тега ( В моем случаи текст внутри переменной btnCount)
});*/
/* console.log(priceIntType) */
const fullprice = document.querySelector('.value-price');//Находим тег по классу, куда будет выводиться итоговая цена
const price = 0;//итоговая сумма, которая добавим в fullprice




let quantity = document.querySelector('.quantity').innerText;//Первоначальное количество
console.log(quantity)
const quantityPrint = () => {
    let len = String(document.querySelector('.popup__items').children.length);
    quantity.innerText = len;
    console.log(quantity)
}







const priceWithoutSpaces = (str) => {//Удаление пробелов, буквы
    return str.replace(/[^+\d]/g, '')
}
const normalPrice = (str) => {//УПребразует число, в строку и буквами и с пробелами
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]$))/g, '$1 ');
}

const summa = (currentPrice) => {
    price += currentPrice
};
const minus = (currentPrice) => {
    price -= currentPrice
};

const fullsumma = () => {
    fullprice.innerText = `${normalPrice(price)} Р`;
}


window.addEventListener('click', function (event) { //windows.addEventListener - клик по всей окне брузера
    //Проверяем нажали ли мы именно на те кнопки, которые нам нужны (+ , -)
    if (event.target.dataset.action === 'plus') { //event.target.dataset.action - ищет клики на data-action
        //console.log('Plus')
        const counterWrapper = event.target.closest('.counter-wrapper'); //closest - ищет ближайшего родителя соответсвутющему селектру, который мы укажем в скобках(counter-wrapper)//Класс пишем с точкой, id c решеткой
        //console.log(counterWrapper);
        const count = counterWrapper.querySelector('[data-counter]') //Ищем счетчик (data-counter)
        //console.log(count)
        count.innerText = ++count.innerText; //innerText - меняет текст внутри тега ( В моем случаи текст внутри переменной count)
    }

    if (event.target.dataset.action === 'minus') { //event.target.dataset.action - ищет клики на data-action
        //console.log('Plus')
        const counterWrapper = event.target.closest('.counter-wrapper'); //closest - ищет ближайшего родителя соответсвутющий селектру, который мы укажем в скобках(counter-wrapper)//Класс пишем с точкой, id c решеткой
        //console.log(counterWrapper);
        const count = counterWrapper.querySelector('[data-counter]') //Ищем счетчик (data-counter)
        //console.log(count)
        //count.innerText = --count.innerText; //innerText - меняет текст внутри тега ( В моем случаи текст внутри переменной count)

        if (parseInt(count.innerText) > 1) { //parseInt - пребразует строковый тип в числовый
            //При нажатии на - innerText сохраняет значение и при клике уменьшает на 1 и сохраняет последнее значение(декремент)
            count.innerText = --count.innerText; //innerText - меняет текст внутри тега ( В моем случаи текст внутри переменной btnCount)
        }
    }
});



window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) { //Находим кнопку добавить в корзину
        const card = event.target.closest('.card') //Находим карточку (ролителя кнопки)
        const productInfo = { //Создаем объект с информацией
            id: card.dataset.id, //id карточки
            imgSrc: card.querySelector('.product__img').getAttribute('src'), //Путь к картинке
            title: card.querySelector('.card-item').innerText,
            textCard: card.querySelector('.card-item-text').innerText,
            newprice: card.querySelector('.newprice').innerText,
            oldprice: card.querySelector('.oldprice').innerText,
            priceIntT: parseInt(priceWithoutSpaces(card.querySelector('.newprice').textContent)),
            countCard: card.querySelector('[data-counter]').innerText,
        };



        const cardProduct = `
                <div class="popup__cart">
                    <div class="popup__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="popup__title">
                    ${productInfo.title}
                    </div>
                    <div class="popup__cart-description">
                    ${productInfo.textCard}
                    </div>
                    <div class="popup__price">
                        <span class="oldprice">${productInfo.oldprice}</span>
                        <sapn class="newprice">${productInfo.newprice}</sapn>
                    </div>
                    <div class="counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__control" data-counter>${productInfo.countCard}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <div class="main__btn">
                    <button  class="delete__product" type="button">Удалить из карзины</button>
                    </div>
                </div>
        `;
        cardresult.insertAdjacentHTML('beforeend', cardProduct);
    }
    quantityPrint()
});
/*
window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('.delete__product')){
        const cardh = event.target.closest('.popup__items').remove
    }
    console.log('Удалить')
}) */


