const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  validSubmitButtonClass: 'popup__save-button_valid',
  activeErrorClass: 'popup__input_type_error',
};

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_type_profile');
const openPopupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');
const openPopupAvatarButton = document.querySelector('.profile__avatar-button');
const formAvatar = document.querySelector('.popup__form_type_avatar');

export {
  config,
  formProfile,
  nameInput,
  jobInput,
  openPopupProfileButton,
  openPopupAddButton,
  formAddElement,
  openPopupAvatarButton,
  formAvatar,
};
