import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
// import { openPopup, closePopup } from '../utils/utils.js';
import {
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
} from '../constants/constants.js';
import './index.css';

// Экземпляр класса валидации
const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();
const formAddelementValidator = new FormValidator(config, formAddElement);
formAddelementValidator.enableValidation();

//Экземпляр класса popup
const popup = new Popup('.popup');
popup.setEventListeners();
const popupProfileClass = new Popup('.popup-profile');
const popupAddCardClass = new Popup('.popup_type_add');
// const popupImageClass = new PopupWithImage('.popup-photo');

//Попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  popupProfileClass.closePopup();
}

formProfile.addEventListener('submit', handleFormSubmit);

function openProfilePopup() {
  jobInput.value = profileOccupation.textContent;
  nameInput.value = profileName.textContent;
  formProfileValidator.resetError();
  popupProfileClass.openPopup();
}
openPopupButton.addEventListener('click', openProfilePopup);

// closePopupButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

function addCard(card) {
  const cardElement = new Card(card, '#CardTemplate', handleCardClick);
  const newCards = cardElement.createCard();
  return newCards;
}

// initialCards.forEach((card) => {
//   elements.prepend(addCard(card));
// });

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      cardList.addItem(addCard(item));
    },
  },
  '.elements'
);

cardList.renderItems();

//Попап добавления карточки

function openAddPopup() {
  popupAddCardClass.openPopup();
  formAddElement.reset();
  formAddelementValidator.resetError();
}

openPopupAddButton.addEventListener('click', openAddPopup);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newAddCard = { name: placeInput.value, link: linkInput.value };
  addCard(newAddCard);
  elements.prepend(addCard(newAddCard));
  popupAddCardClass.closePopup();
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

//Попап открытия увеличенного изображения

function handleCardClick(e, name, link) {
  if (e.currentTarget !== e.target) {
    return;
  }
  const popupImageClass = new PopupWithImage(name, link, '.popup-photo');
  popupImageClass.openPopup();
}

// function handleCardClick(e, name, link) {
//   if (e.currentTarget !== e.target) {
//     return;
//   }
//   popupCardImage.src = link;
//   popupCardImage.alt = name;
//   popupCardTitle.textContent = name;
//   popupImageClass.openPopup();
// }

//Закрытие попапа по клику overlay

// function closeByOverlay(evt) {
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   }
// }

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', closeByOverlay);
// });
