// @todo: Темплейт карточки
// Находим поп-апы
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
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



// работа с поп - ап

// Универсальные функции для работы с поп-апами
function openModal(popup) {
  popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
}

// Настройка закрытия поп-апов
function setupPopupClose(popup) {
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', () => closeModal(popup));
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
}

setupPopupClose(profilePopup);
setupPopupClose(cardPopup);
setupPopupClose(imagePopup);

// Открытие поп-апа редактирования профиля
const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', () => openModal(profilePopup));

// Открытие поп-апа добавления карточки
const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', () => openModal(cardPopup));

// Функция создания карточки (с открытием поп-апа изображения)
function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  });

  cardImage.addEventListener('click', () => {
    const imagePopupImage = imagePopup.querySelector('.popup__image');
    const imagePopupCaption = imagePopup.querySelector('.popup__caption');
    imagePopupImage.src = cardData.link;
    imagePopupImage.alt = cardData.name;
    imagePopupCaption.textContent = cardData.name;
    openModal(imagePopup);
  });

  return cardElement;
}

// Добавление карточки на страницу
function addCard(cardElement) {
  const placesList = document.querySelector('.places__list');
  placesList.appendChild(cardElement);
}



initialCards.forEach(cardData => {
  const cardElement = createCard(cardData);
  addCard(cardElement);
});


