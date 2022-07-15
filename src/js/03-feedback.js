import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const feedbackFormState = {};
const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateMessageOutput();

function onFormInput(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function populateMessageOutput() {
  if (saveMessage) {
    input.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(saveMessage);
  localStorage.clear();
}
