import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateMessageOutput();

function onFormInput() {
  const email = input.value;
  const message = textarea.value;

  const feedbackFormState = {
    email: email,
    message: message,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function populateMessageOutput() {
  const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveMessage) {
    input.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
}
