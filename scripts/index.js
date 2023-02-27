/*const likeButtons = document.querySelectorAll('.elements__like');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function () {
    likeButtons[i].classList.toggle('elements__like_active');
    likeButtons[i].classList.toggle('elements__like:hover');
  });
}; */
/*profileName.textContent = 'Жак-Ив Кусто';
profileOccupation.textContent = 'Исследователь океана';*/

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_occupation');
let popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');

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
