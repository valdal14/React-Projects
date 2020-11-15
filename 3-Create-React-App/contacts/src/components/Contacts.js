import React from 'react';

export default class Contacts extends React.Component {

    render() {

        const people = this.props.contacts;

        return (
            <div className="contacts">
                <ol>
                {people.map(person => (
                    <li key={person.id}>
                        {person.fullName}
                    </li>
                ))}
                </ol>
            </div>
        )
    }
}

