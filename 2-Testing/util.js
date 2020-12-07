exports.generateText = (name, age) => {
    // Returns output text
    return `${name} is ${age} years old`;
  };
  
  exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
  };
  

  const validateUsername = (name)=> {
    return name.length >= 1 ? true : false;
  }

  const validateAge = (age)=> {;
    return parseInt(age) ? true : false;
  }

  exports.validateUser = (name, age)=> {
    return validateUsername(name) && validateAge(age) ? true : false;
};