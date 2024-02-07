import _ from 'lodash';

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const objectStorage = JSON.parse(localStorage.getItem(localStorageKey));

if (objectStorage && Object.keys(objectStorage).length > 0) {
  form.elements.email.value = objectStorage.email;
  form.elements.message.value = objectStorage.message;
}

function inputText() {
  const objectLocal = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
    email: '',
    message: '',
  };
  objectLocal.email = form.elements.email.value;
  objectLocal.message = form.elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(objectLocal));
}

form.addEventListener('input', _.throttle(inputText, 500));

form.addEventListener('submit', submitForm);

function submitForm(event) {
    try{
        const localStorageCLG = JSON.parse(localStorage.getItem(localStorageKey));
        console.log(localStorageCLG);
    } catch(error) {
        console.log(error);
    }
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.elements.email.value = "";
  form.elements.message.value = "";
}
