// @todo: Темплейт карточки

// @todo: DOM узлы

// Функция добавления карточки в DOM
function addCard(cardElement) {
    const placesList = document.querySelector('.places__list');
    placesList.appendChild(cardElement);
  }
// Перебор массива и добавление карточек
initialCards.forEach(cardData => {
    const cardElement = createCard(cardData);
    addCard(cardElement);
  });

// @todo: Функция создания карточки

function createCard(cardData) {
    // Находим шаблон карточки в DOM и берем его содержимое
    const cardTemplate = document.querySelector('#card-template').content;
    // Клонируем содержимое шаблона, чтобы создать новую карточку
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
    // Находим элементы внутри карточки: изображение, заголовок, кнопку удаления и кнопку лайка
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
  
    // Заполняем карточку данными
    cardImage.src = cardData.link; // Устанавливаем ссылку на изображение
    cardImage.alt = cardData.name; // Устанавливаем альтернативный текст для изображения
    cardTitle.textContent = cardData.name; // Устанавливаем название карточки
  
    // Добавляем обработчик для кнопки удаления
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
  
    // Добавляем обработчик для кнопки лайка
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like-button_active');
    });
  
    // Возвращаем готовую карточку
    return cardElement;
  }

// @todo: Функция удаления карточки

function deleteCard(cardElement) {
    cardElement.remove(); // Удаляем карточку из DOM
  }

// @todo: Вывести карточки на страницу

function addCard(cardElement) {
    // Находим контейнер для карточек в DOM
    const placesList = document.querySelector('.places__list');
    // Добавляем карточку в контейнер
    placesList.appendChild(cardElement);
  }



