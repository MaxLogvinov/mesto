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

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  validSubmitButtonClass: 'popup__save-button_valid',
  activeErrorClass: 'popup__input_type_error',
};

const formProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');

export {
  initialCards,
  config,
  formProfile,
  nameInput,
  jobInput,
  openPopupProfileButton,
  openPopupAddButton,
  formAddElement,
};
