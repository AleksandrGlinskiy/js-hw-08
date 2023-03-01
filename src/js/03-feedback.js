import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(setDataToLocaleStorage, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function setDataToLocaleStorage(e) {
    console.log(e.target.name);
    console.log(e.target.value);

   formData[e.target.name] = e.target.value;

   console.log(formData);
   
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    console.log(e.target.name);
    console.log(e.target.value);


    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function  getDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');

    if(data) {
        message.value = data.message;
        email.value = data.email;
    }
}
getDataFromLocalStorage();
