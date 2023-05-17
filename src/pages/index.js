import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  config,
  formProfile,
  nameInput,
  jobInput,
  openPopupProfileButton,
  openPopupAddButton,
  formAddElement,
  openPopupAvatarButton,
  formAvatar,
} from '../constants/constants.js';

// Экземпляр класса Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: 'bd701aac-610c-4e72-ab07-3a706d53fd4f',
    'Content-Type': 'application/json',
  },
});

let userId;

// Экземпляр класса валидации

const formProfileValidator = new FormValidator(config, formProfile);
formProfileValidator.enableValidation();
const formAddelementValidator = new FormValidator(config, formAddElement);
formAddelementValidator.enableValidation();
const formAvatarValidator = new FormValidator(config, formAvatar);
formAvatarValidator.enableValidation();

// Экземпляр класса попапа профиля

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userDescriptionSelector: '.profile__occupation',
  userAvatarSelector: '.profile__avatar',
});

const popupProfile = new PopupWithForm('.popup-profile', {
  handleFormSubmit: (userData) => {
    return api
      .sendUserInfo(userData)
      .then((res) => {
        userInfo.setUserInfo({
          userName: res.name,
          userDescription: res.about,
        });
        popupProfile.closePopup();
      })
      .catch((err) => {
        console.log(err);
      });
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

// Экземпляр класса попапа изменения аватара

const popupAvatar = new PopupWithForm('.popup-avatar', {
  handleFormSubmit: (userData) => {
    return api
      .sendAvatar(userData)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupAvatar.closePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupAvatar.setEventListeners();

openPopupAvatarButton.addEventListener('click', () => {
  formAvatarValidator.resetError();
  popupAvatar.openPopup();
});

//Функция создания новой карточки
const addCard = function (card) {
  const cardItem = new Card(
    card,
    '#CardTemplate',
    userId,
    { cardId: card._id, authorId: card.owner._id },
    {
      handleCardClick: (name, link) => {
        popupImage.openPopup(name, link);
      },

      handleCardDelete: (card, cardId) => {
        popupConfirm.openPopup(card, cardId);
      },

      handleCardLike: (cardId) => {
        api
          .putLike(cardId)
          .then((res) => {
            cardItem.renderCardLike(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },

      handleCardDeleteLike: (cardId) => {
        api
          .deleteLike(cardId)
          .then((res) => {
            cardItem.renderCardLike(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    }
  );
  return cardItem.createCard();
};

//Экземпляр класса Section

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(addCard(item));
    },
  },
  '.elements'
);

// Общий промис при положительном исходе двух запросов

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, card]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      userName: userData.name,
      userDescription: userData.about,
    });
    cardList.renderItems(card.reverse());
    userInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

//Экземпляр класса попапа увеличенного изображения

const popupImage = new PopupWithImage('.popup-photo');
popupImage.setEventListeners();

//Экземпляр класса попапа добавления карточки

const popupAddCard = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (data) => {
    return api
      .addNewCard({ name: data.name, link: data.link })
      .then((card) => {
        cardList.addItem(addCard(card));
        popupAddCard.closePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupAddCard.setEventListeners();

openPopupAddButton.addEventListener('click', () => {
  popupAddCard.openPopup();
  formAddelementValidator.resetError();
});

//Экземпляр класса попапа подтверждения удаления

const popupConfirm = new PopupWithConfirm('.popup-delete', {
  handleDeleteFormSubmit: (card, cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        card.deleteCard();
        popupConfirm.closePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupConfirm.setEventListeners();
