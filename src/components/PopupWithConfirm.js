import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, { handleDeleteFormSubmit }) {
    super(popupSelector);
    this._buttonDeleteForm = this._popup.querySelector('.popup__form');
    this._handleDeleteFormSubmit = handleDeleteFormSubmit;
  }

  openPopup(card, cardId) {
    this._card = card;
    this._cardId = cardId;
    super.openPopup();
  }

  setEventListeners() {
    this._buttonDeleteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleDeleteFormSubmit(this._card, this._cardId);
    });
    super.setEventListeners();
  }
}
