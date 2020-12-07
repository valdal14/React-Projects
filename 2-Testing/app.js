const { generateText, createElement, validateUser } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const valid = validateUser(newUserNameInput.value, newUserAgeInput.value);

  if(valid) {
    const userList = document.querySelector('.user-list');
    const outputText = generateText(
      newUserNameInput.value,
      newUserAgeInput.value
    );
    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
  } else {
    const userList = document.querySelector('.user-list');
    const element = createElement('li', 'Invalid form', 'form-error');
    userList.appendChild(element);
  }
};

// Start the app!
initApp();

