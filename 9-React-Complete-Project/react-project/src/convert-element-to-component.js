import React, { Component } from 'react';
import './react-element.css';

class ConvertedElementToComponent extends Component {

    render() {

        const people = this.props.contacts;
        
        // Create a JSX/HTML like element
        return (
            <div className='mainDiv'>
                <h1>This is an H1 tag create with <b>React.createElement</b> and rendered with <b>ReactDOM.render</b></h1> <br/>
                <ul>
                    { people.map(person => (
                        <li key={person.id}><b>Name:</b> {person.name} = <b>Role:</b> {person.role}</li>
                    ))}
                </ul>
                <hr/>
            </div>
        );
        
    }
};

export default ConvertedElementToComponent;