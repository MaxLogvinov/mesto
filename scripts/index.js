const likeButtons = document.querySelectorAll('.elements__like');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function () {
    likeButtons[i].classList.toggle('elements__like_active');
    likeButtons[i].classList.toggle('elements__like:hover');
  });
}

let profileName = document.querySelector('.profile__name');
profileName.textContent = 'Жак-Ив Кусто';

let profileOccupation = document.querySelector('.profile__occupation');
profileOccupation.textContent = 'Исследователь океана';

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__name');
nameInput.value = profileName.textContent;

let jobInput = document.querySelector('.popup__occupation');
jobInput.value = profileOccupation.textContent;

let popup = document.querySelector('.popup');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
});

const openPopupButton = document.querySelector('.profile__edit-button');

openPopupButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

const closePopupButton = document.querySelector('.popup__close-button');

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});
