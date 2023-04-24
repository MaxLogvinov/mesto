import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  config,
  formProfile,
  nameInput,
  jobInput,
  openPopupProfileButton,
  openPopupAddButton,
  formAddElement,
} from '../constants/constants.js';

// Экземпляр класса валидации
const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();
const formAddelementValidator = new FormValidator(config, formAddElement);
formAddelementValidator.enableValidation();

// Экземпляр класса профиля
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userDescriptionSelector: '.profile__occupation',
});

const popupProfile = new PopupWithForm('.popup-profile', {
  handleFormAddSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

openPopupProfileButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value = currentUserInfo.userDescription;
  formProfileValidator.resetError();
  popupProfile.openPopup();
});
popupProfile.setEventListeners();

// Функция создания новой карточки

function addCard(card) {
  const cardElement = new Card(card, '#CardTemplate', handleCardClick);
  const newCards = cardElement.createCard();
  return newCards;
}

//Экземпляр класса Section

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      cardList.addItem(addCard(item));
    },
  },
  '.elements'
);

//Попап добавления карточки
const popupAddCard = new PopupWithForm('.popup_type_add', {
  handleFormAddSubmit: (data) => {
    cardList.addItem(addCard(data));
  },
});
popupAddCard.setEventListeners();

openPopupAddButton.addEventListener('click', () => {
  popupAddCard.openPopup();
  formAddElement.reset();
  formAddelementValidator.resetError();
});

cardList.renderItems();

//Попап открытия увеличенного изображения

function handleCardClick(e, name, link) {
  if (e.currentTarget !== e.target) {
    return;
  }
  const popupImage = new PopupWithImage(name, link, '.popup-photo');
  popupImage.setEventListeners();
  popupImage.openPopup();
}
