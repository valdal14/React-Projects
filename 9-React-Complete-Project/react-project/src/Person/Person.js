import React from 'react';
// import './Person.css';
import styled from 'styled-components';

// React must be imported since the following will be converted in React.createElement and JSX
// We do not need to import Component tho since we are not using a class

// We must use props parameter inside our functional component to be able to create props.name and props.age
const person = (props) => {
    
    // styled-components
    const StyledDiv = styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;


    @media (min-width: 500px) {
        width: 450px; 
    }
`;

    return (
        <StyledDiv>
            <input type='text' onChange={ props.changeName } defaultValue={props.name} id={props.id} />
            <p onClick={ props.deletePerson }>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </StyledDiv>
    )
};

export default person;