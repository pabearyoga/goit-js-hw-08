import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const y = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener(
  'input',
  throttle(() => {
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
  }, 500)
);

window.addEventListener('load', () => {
  input.blur();

  if (y === null) {
    input.value = '';
    textarea.textContent = '';
  } else {
    input.value = y.email;
    textarea.textContent = y.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  form.reset();
  textarea.textContent = '';
  console.log(y);
});
