import React from 'react';
import './react-element.css';

const people = [
    {
        id: 0,
        name: 'Valerio',
        role: 'Programmer'
    },
    {
        id: 1,
        name: 'Lefemas',
        role: 'Marketing Manager'
    }
]

// Create a JSX/HTML like element
const element = ()=> {
    return (
        <div className='mainDiv'>
            <h1>This is an H1 tag create with <b>React.createElement</b> and rendered with <b>ReactDOM.render</b></h1> <br/>
            <p>
                <ul>
                    {people.map(person => (
                     <li key={person.id}><b>Name:</b> {person.name} = <b>Role:</b> {person.role}</li>   
                    ))}
                </ul>
            </p>
            <hr/>
        </div>
    );
}

export default function myElement() {
    return React.createElement(element, null, document.querySelector('#element'))
};