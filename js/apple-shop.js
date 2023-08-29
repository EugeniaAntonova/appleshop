
var applesList = document.querySelector('.main__list');

let apples = [
    {
        name: 'Red apple',
        cost: '3',
        picture: 'img/red-apple.jpeg'
    },
    {
        name: 'Green apple',
        cost: '5',
        picture: 'img/green-apple.jpeg'
    },
    {
        name: 'Yellow apple',
        cost: '7',
        picture: 'img/yellow-apple.jpeg'
    },
    {
        name: 'Wet apple',
        cost: '2',
        picture: 'img/wet-apple.png'
    }


];

let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;  
    }
    
    return element;
};

let makeCard = function (good) {
    let item = makeElement('li', 'main__item');
    let card = makeElement('article', 'apple-card');
    item.appendChild(card);
    let imgWrapper = makeElement('div', 'card__img-wrapper');
    card.appendChild(imgWrapper);
    let picture = makeElement('img', 'img');
    picture.src = good.picture;
    picture.alt = good.name;
    imgWrapper.appendChild(picture);
    let heading = makeElement('h2', 'apple-card__header', good.name);
    card.appendChild(heading);
    let price = makeElement('p', 'apple-card__price', good.cost + '.00€');
    card.appendChild(price);
    let buyButton = makeElement('button', 'apple-card__btn', 'buy');
    card.appendChild(buyButton);
    return item;
}

let renderListItems = function (goods) {
    for (let i = 0; i < goods.length; i++) {
        let listItem = makeCard(goods[i]);
        applesList.appendChild(listItem);
    }
}

renderListItems(apples);
let chosenApples = [];

var purchaseButton = document.querySelectorAll('.apple-card__btn');
var counterNumber = document.querySelector('.counter__number');
var littleCounter = 0;

for (let i = 0; i < purchaseButton.length; i++) {
  purchaseButton[i].addEventListener('click', function () {
    littleCounter += 1;
    counterNumber.textContent = littleCounter;
});  
}










