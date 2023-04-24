import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormAddSubmit }) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._handleFormAddSubmit = handleFormAddSubmit;
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
      const inputValues = this._getInputValues();
      this._handleFormAddSubmit(inputValues);
      this.closePopup();
    });
  }
  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }
}
