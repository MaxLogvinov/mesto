export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupList = document.querySelectorAll(popupSelector);
  }
  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  };
  setEventListeners() {
    this._popupList.forEach((popup) => {
      popup.addEventListener('click', (evt) => {
        if (
          evt.target.classList.contains('popup_opened') ||
          evt.target.classList.contains('popup__close-button')
        ) {
          popup.classList.remove('popup_opened');
        }
      });
    });
  }
}
