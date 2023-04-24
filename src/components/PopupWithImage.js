import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._cardImage = this._popup.querySelector(
      '.popup-photo__image_type_photo'
    );
    this._cardTitle = this._popup.querySelector(
      '.popup-photo__title_type_photo'
    );
    this._name = name;
    this._link = link;
  }
  openPopup() {
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    super.openPopup();
  }
}
