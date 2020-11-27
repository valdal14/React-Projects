import React from 'react';

// React must be imported since the following will be converted in React.createElement and JSX
// We do not need to import Component tho since we are not using a class
const person = () => {
    return <h2>I'am a <b>Functional Component</b></h2>
};

export default person;