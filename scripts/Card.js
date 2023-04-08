export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.elements__name').textContent = this._name;
    this._element.querySelector(
      '.elements__image'
    ).style.backgroundImage = `url(${this._link})`;

    return this._element;
  }

  _clickLike() {
    this._likeButton.classList.toggle('elements__like_active');
    this._likeButton.classList.toggle('elements__like:hover');
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.elements__like');

    this._deleteButton = this._element.querySelector(
      '.elements__delete-button'
    );
    this._cardImage = this._element.querySelector('.elements__image');
    this._likeButton.addEventListener('click', () => {
      this._clickLike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener('click', (e) => {
      this._handleCardClick(e, this._name, this._link);
    });
  }
}
