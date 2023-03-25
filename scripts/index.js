/*profileName.textContent = 'Жак-Ив Кусто';
profileOccupation.textContent = 'Исследователь океана';*/

//Попап профиля
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const formProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_occupation');
const popupProfile = document.querySelector('.popup-profile');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const saveButtonProfile = document.querySelector(
  '.popup__save-button_type_profile'
);
const saveButtonAdd = document.querySelector('.popup__save-button_type_add');

//Попап профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', handleFormSubmit);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeByOverlay);
  document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function openProfilePopup() {
  jobInput.value = profileOccupation.textContent;
  nameInput.value = profileName.textContent;
  activeButton(saveButtonProfile, config);
  openPopup(popupProfile);
}
openPopupButton.addEventListener('click', openProfilePopup);

closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

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

// Создание карточек, попап добавления карточек и лайк карточки
const elements = document.querySelector('.elements');
const templateCard = document.querySelector('#CardTemplate').content;

function createCard(card) {
  const newCard = templateCard.cloneNode(true);
  const cardName = newCard.querySelector('.elements__name');
  cardName.textContent = card.name;

  const cardImage = newCard.querySelector('.elements__image');
  cardImage.setAttribute('style', `background-image: url(${card.link})`);
  cardImage.addEventListener('click', (e) => openPopupPictures(e, card));

  const likeButton = newCard.querySelector('.elements__like');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like_active');
    event.target.classList.toggle('elements__like:hover');
  });

  const deleteButton = newCard.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
  return newCard;
}

const addCard = (card) => {
  elements.prepend(createCard(card));
};
initialCards.forEach((card) => addCard(card));

function handleDeleteButton(event) {
  const button = event.target;
  const card = button.closest('.elements__card');
  card.remove();
}
//Попап добавления карточки
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add');
const formAddElement = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');

function openAddPopup() {
  openPopup(popupAddCard);
  formAddElement.reset();
  resetButton(saveButtonAdd, config);
}

openPopupAddButton.addEventListener('click', openAddPopup);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newAddCard = [
    {
      name: placeInput.value,
      link: linkInput.value,
    },
  ];
  if (placeInput.value === '' || linkInput.value === '') {
    closePopup(popupAddCard);
    evt.target.reset();
  } else {
    newAddCard.forEach(addCard);
    closePopup(popupAddCard);
    evt.target.reset();
  }
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

//Попап открытия увеличенного изображения
const popupCardImage = document.querySelector('.popup-photo__image_type_photo');
const popupCardTitle = document.querySelector('.popup-photo__title_type_photo');
const popupImage = document.querySelector('.popup-photo');

function openPopupPictures(e, card) {
  if (e.currentTarget !== e.target) {
    return;
  }
  popupCardImage.src = card.link;
  popupCardImage.alt = card.name;
  popupCardTitle.textContent = card.name;
  openPopup(popupImage);
}

//Закрытие попапа по нажатию на esc

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Закрытие попапа по клику overlay

function closeByOverlay(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(openedPopup);
  }
}
