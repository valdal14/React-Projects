import React from 'react';
import './Person.css';

// React must be imported since the following will be converted in React.createElement and JSX
// We do not need to import Component tho since we are not using a class

// We must use props parameter inside our functional component to be able to create props.name and props.age
const person = (props) => {
    
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };

    return (
        <div className='Person' style={style}>
            <input type='text' onChange={ props.changeName } defaultValue={props.name} id={props.id} />
            <p onClick={ props.deletePerson }>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;