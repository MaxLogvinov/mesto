const showInputError = (
  errorTextElement,
  validationMessage,
  activeErrorClass
) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
};

const hideInputError = (errorTextElement, activeErrorClass) => {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
};

const disableButton = (submitButton, validSubmitButtonClass) => {
  submitButton.classList.add(validSubmitButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, validSubmitButtonClass) => {
  submitButton.classList.remove(validSubmitButtonClass);
  submitButton.disabled = false;
};

const checkInputValidity = (input, errorClassTemplate, activeErrorClass) => {
  const errorTextElement = document.querySelector(
    `${errorClassTemplate}${input.name}`
  );
  if (!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
};

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};

const toggleButtonState = (submitButton, validSubmitButtonClass, inputList) => {
  if (!hasInvalidInput(inputList)) {
    enableButton(submitButton, validSubmitButtonClass);
  } else {
    disableButton(submitButton, validSubmitButtonClass);
  }
};

const setEventListeners = (
  formAdd,
  inputList,
  errorClassTemplate,
  activeErrorClass,
  validSubmitButtonClass,
  submitButton
) => {
  formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, errorClassTemplate, activeErrorClass);
      toggleButtonState(submitButton, validSubmitButtonClass, inputList);
    });
  });
  formAdd.addEventListener('reset', () => {
    disableButton(submitButton, validSubmitButtonClass, inputList);
  });
};

const enableValidation = (config) => {
  const formAdd = document.querySelector(config.formAddSelector);
  const inputList = formAdd.querySelectorAll(config.inputSelector);
  const submitButton = formAdd.querySelector(config.submitButtonSelector);

  setEventListeners(
    formAdd,
    inputList,
    config.errorClassTemplate,
    config.activeErrorClass,
    config.validSubmitButtonClass,
    submitButton
  );
};

enableValidation({
  form: '.popup__form',
  formAddSelector: '.popup__form_type_add',
  inputSelector: '.popup__input',
  errorClassTemplate: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  submitButtonSelector: '.popup__save-button',
  validSubmitButtonClass: 'popup__save-button_valid',
});
