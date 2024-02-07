import _ from 'lodash.throttle';

console.log("aaa");
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

try{
    const objectStorage = JSON.parse(localStorage.getItem(localStorageKey));
} catch(error) {
    console.log(error.name);
}

// form.elements.email.value = objectStorage.email;
// form.elements.message.value = objectStorage.message;

function inputText() {
    const objectLocal = JSON.parse(localStorage.getItem(localStorageKey)) ?? {email:"",message:"",};
    objectLocal.email = form.elements.email.value;
    objectLocal.message = form.elements.message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(objectLocal));
}

form.addEventListener('input', _.throttle(inputText, 500));

// form.addEventListener('submit', submitForm);

// function submitForm() {
//     localStorage.removeItem(localStorageKey);
// }
