import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector(
      '.popup-photo__image_type_photo'
    );
    this._cardTitle = this._popup.querySelector(
      '.popup-photo__title_type_photo'
    );
  }
  openPopup(name, link) {
    super.openPopup();
    this._cardTitle.textContent = name;
    this._cardImage.src = link;
  }
}
