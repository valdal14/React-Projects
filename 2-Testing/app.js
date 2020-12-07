const { generateText, createElement, validateUser, fetchData } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);

  const postButton = document.querySelector('#btnGetPosts');
  postButton.addEventListener('click', getPostById);
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

const getPostById = async (e)=>{
    e.preventDefault();
    const id = document.querySelector('#post').value;
    const data = await fetchData(id);
    console.log(data);
    const element = createElement('div', data.body, 'posts');
    const appendPost = document.querySelector('#post-list');
    appendPost.appendChild(element);
}

// Start the app!
initApp();

