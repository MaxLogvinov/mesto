import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup } from './utils.js';
import { initialCards, config } from './constants.js';

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const formProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const popupProfile = document.querySelector('.popup-profile');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
// const saveButtonProfile = document.querySelector(
//   '.popup__save-button_type_profile'
// );
// const saveButtonAdd = document.querySelector('.popup__save-button_type_add');
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

//Попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', handleFormSubmit);

function openProfilePopup() {
  jobInput.value = profileOccupation.textContent;
  nameInput.value = profileName.textContent;
  new FormValidator(config, formProfile).resetError();
  openPopup(popupProfile);
}
openPopupButton.addEventListener('click', openProfilePopup);

closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function addCard(card) {
  const cardElement = new Card(card, '#CardTemplate', handleCardClick);
  elements.prepend(cardElement.createCard());
}

initialCards.forEach((card) => {
  addCard(card);
});

//Попап добавления карточки

function openAddPopup() {
  openPopup(popupAddCard);
  formAddElement.reset();
  new FormValidator(config, formAddElement).resetError();
}

openPopupAddButton.addEventListener('click', openAddPopup);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newAddCard = { name: placeInput.value, link: linkInput.value };
  addCard(newAddCard);
  closePopup(popupAddCard);
  evt.target.reset();
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

//Попап открытия увеличенного изображения

function handleCardClick(e, name, link) {
  if (e.currentTarget !== e.target) {
    return;
  }
  popupCardImage.src = link;
  popupCardImage.alt = name;
  popupCardTitle.textContent = name;
  openPopup(popupImage);
}

//Закрытие попапа по клику overlay

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', closeByOverlay);
});

// Поиск и включение валидации форм
const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((form) => {
  const validForm = new FormValidator(config, form);
  validForm.enableValidation();
});
