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

// Находим форму редактирования профиля и её поля
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');

// Находим элементы профиля на странице
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

// Находим кнопку редактирования профиля
const editProfileButton = document.querySelector('.profile__edit-button');

// Функция для заполнения полей формы редактирования профиля
function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем значения из полей формы
  const newName = nameInput.value;
  const newJob = jobInput.value;

  // Вставляем новые значения в элементы профиля на странице
  profileName.textContent = newName;
  profileJob.textContent = newJob;

  closeModal(profilePopup); // Закрываем поп-ап
}

// Прикрепляем обработчик к форме редактирования профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// Открытие поп-апа редактирования профиля
editProfileButton.addEventListener('click', () => {
  fillProfileForm(); // Заполняем поля формы
  openModal(profilePopup); // Открываем поп-ап
});

function openModal(popup) {
    popup.classList.add('popup_is-opened');
  }
  
  function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
  }
  
  // Настройка закрытия поп-апа редактирования профиля только на крестик
  function setupProfilePopupClose(popup) {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', () => closeModal(popup));
  }
  
  // Универсальная функция для закрытия поп-апов на крестик и оверлей
  function setupPopupClose(popup) {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', () => closeModal(popup));
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        closeModal(popup);
      }
    });
  }

  // Настраиваем закрытие для всех поп-апов
setupProfilePopupClose(profilePopup); // Поп-ап редактирования профиля (только на крестик)
setupPopupClose(cardPopup); // Поп-ап добавления карточки (на крестик и оверлей)
setupPopupClose(imagePopup); // Поп-ап с изображением (на крестик и оверлей)

// Находим кнопку добавления карточки
const addCardButton = document.querySelector('.profile__add-button');

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
    likeButton.classList.toggle('card__like-button_is-active'); // Используйте правильный класс
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

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция добавления карточки на страницу
function addCard(cardElement) {
  const placesList = document.querySelector('.places__list');
  placesList.appendChild(cardElement);
}

// Находим форму добавления карточки и её элементы
const cardFormElement = cardPopup.querySelector('.popup__form');
const cardTitleInput = cardFormElement.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardFormElement.querySelector('.popup__input_type_url');
const closeCardPopupButton = cardPopup.querySelector('.popup__close');

// Обработчик открытия формы добавления карточки
addCardButton.addEventListener('click', () => {
  cardTitleInput.value = ''; // Очищаем поле названия
  cardLinkInput.value = '';  // Очищаем поле ссылки
  openModal(cardPopup);      // Открываем форму
});

// Обработчик закрытия формы добавления карточки
closeCardPopupButton.addEventListener('click', () => closeModal(cardPopup));

// Обработчик отправки формы добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем данные из формы
  const cardData = {
    name: cardTitleInput.value,
    link: cardLinkInput.value,
  };

  // Создаем новую карточку
  const newCard = createCard(cardData);

  // Добавляем карточку в начало контейнера
  const placesList = document.querySelector('.places__list');
  placesList.prepend(newCard);

  // Закрываем форму
  closeModal(cardPopup);
}

// Привязываем обработчик к форме
cardFormElement.addEventListener('submit', handleCardFormSubmit);




