/*const likeButtons = document.querySelectorAll('.elements__like');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function () {
    likeButtons[i].classList.toggle('elements__like_active');
    likeButtons[i].classList.toggle('elements__like:hover');
  });
}; */
/*profileName.textContent = 'Жак-Ив Кусто';
profileOccupation.textContent = 'Исследователь океана';*/
//Попап профиля
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_occupation');
let popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');

//Попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

function openPopup() {
  popup.classList.add('popup_opened');
  jobInput.value = profileOccupation.textContent;
  nameInput.value = profileName.textContent;
}

openPopupButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);

//Карточки по умолчанию
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

// Создание карточек и попап добавления карточек
const elements = document.querySelector('.elements');

function CreateCard(card) {
  const newCard = document
    .querySelector('#CardTemplate')
    .content.cloneNode(true);
  const cardName = newCard.querySelector('.elements__name');
  cardName.textContent = card.name;
  const cardImage = newCard.querySelector('.elements__image');
  cardImage.setAttribute('style', `background-image: url(${card.link})`);
  elements.prepend(newCard);
}

initialCards.forEach(CreateCard);

const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup__add-card');
const popupCloseAddButton = document.querySelector(
  '.popup__close-button_type_add'
);

function openAddPopup() {
  popupAddCard.classList.add('popup_opened');
}

openPopupAddButton.addEventListener('click', openAddPopup);

function closeAddPopup() {
  popupAddCard.classList.remove('popup_opened');
}

popupCloseAddButton.addEventListener('click', closeAddPopup);

const formAddElement = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newAddCard = [
    {
      name: placeInput.value,
      link: linkInput.value,
    },
  ];
  if (placeInput.value === '' || linkInput.value === '') {
    placeInput.value = '';
    linkInput.value = '';
    popupAddCard.classList.remove('popup_opened');
  } else {
    newAddCard.forEach(CreateCard);
    popupAddCard.classList.remove('popup_opened');
    placeInput.value = '';
    linkInput.value = '';
  }
}

formAddElement.addEventListener('submit', handleFormAddSubmit);
