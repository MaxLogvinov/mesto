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

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const formProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const popupProfile = document.querySelector('.popup-profile');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const elements = document.querySelector('.elements');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add');
const formAddElement = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupCardImage = document.querySelector('.popup-photo__image_type_photo');
const popupCardTitle = document.querySelector('.popup-photo__title_type_photo');
const popupImage = document.querySelector('.popup-photo');
const popups = Array.from(document.querySelectorAll('.popup'));

export {
  initialCards,
  config,
  profileName,
  profileOccupation,
  formProfile,
  nameInput,
  jobInput,
  popupProfile,
  openPopupButton,
  closePopupButtons,
  elements,
  openPopupAddButton,
  popupAddCard,
  formAddElement,
  placeInput,
  linkInput,
  popupCardImage,
  popupCardTitle,
  popupImage,
  popups,
};
