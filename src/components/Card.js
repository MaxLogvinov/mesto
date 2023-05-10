export default class Card {
  constructor(data, templateSelector, userId, authorData, handleEvents) {
    this._card = data;
    this._name = this._card.name;
    this._link = this._card.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardId = authorData.cardId;
    this._authorId = authorData.authorId;
    this._cardClick = handleEvents.handleCardClick;
    this._cardDelete = handleEvents.handleCardDelete;
    this._putLike = handleEvents.handleCardLike;
    this._removeLike = handleEvents.handleCardDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  renderCardLike(card) {
    this._likeSum = card.likes;
    if (this._likeSum.length === 0) {
      this.likeSelector.textContent = '';
    } else {
      this.likeSelector.textContent = this._likeSum.length;
    }
    if (this._likedCard()) {
      this._likeButton.classList.add('elements__like_active');
    } else {
      this._likeButton.classList.remove('elements__like_active');
    }
  }

  _likedCard() {
    const likedElement = this._likeSum.find(
      (userLike) => userLike._id === this._userId
    );
    return likedElement;
  }

  _toggleLike() {
    if (this._likedCard()) {
      this._removeLike(this._cardId);
    } else {
      this._putLike(this._cardId);
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.elements__image');
    this._elementName = this._element.querySelector('.elements__name');
    this._likeButton = this._element.querySelector('.elements__like');
    this._deleteButton = this._element.querySelector(
      '.elements__delete-button'
    );
    this.likeSelector = this._element.querySelector('.elements__like-counter');

    this._elementName.textContent = this._name;
    this._elementImage.style.backgroundImage = `url(${this._link})`;
    this._elementImage.alt = this._name;

    this.renderCardLike(this._card);
    this._setEventListeners();

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._toggleLike());
    this._elementImage.addEventListener('click', () =>
      this._cardClick(this._name, this._link)
    );
    if (this._userId === this._authorId) {
      this._deleteButton.addEventListener('click', () =>
        this._cardDelete(this, this._cardId)
      );
    } else {
      this._deleteButton.remove();
    }
  }
}
