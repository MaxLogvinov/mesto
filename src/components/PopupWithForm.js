import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._saveButton = this._formElement.querySelector('.popup__save-button');
    this._saveButtonText = this._saveButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._saveButton.textContent;
      this._saveButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.closePopup())
        .finally(() => {
          this._saveButton.textContent = initialText;
        });
    });
  }

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }
}
