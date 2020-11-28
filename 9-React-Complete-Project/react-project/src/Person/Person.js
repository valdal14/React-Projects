import React from 'react';

const generateRandomNumber = () => { 
    return Math.floor(Math.random() * 90) 
}

// React must be imported since the following will be converted in React.createElement and JSX
// We do not need to import Component tho since we are not using a class

// We must use props parameter inside our functional component to be able to create props.name and props.age
const person = (props) => {
    return (
        <div>
            <h2>I'am a <b>Functional Component</b></h2>
            <p>I can generate random number like { generateRandomNumber() }</p>
            <p>I can also use <b>props</b> like so:</p>
            {/* creating a props called name and age */}
            <p>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <hr/>
        </div>
    )
};

export default person;