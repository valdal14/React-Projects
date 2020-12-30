import React, { useEffect, memo } from 'react';
import './Person.css';
import Aux from '../HOC/Aux';

const Person = (props) => {
    
    useEffect(()=> {
        const timer = setTimeout(()=>{
            alert('useEffect executing - Data has been saved!!!');
        }, 1000)

        return ()=> {
            // clean up with useEffect
            clearTimeout(timer);
            console.log('cleaning up the Person component')
        };

    }, []);

    const style = {
        '@media (minWidth: 500px)' : {
            width: '450px'
        }
    };
    
    return (
        // Note that now the key attribute is not required
        <Aux>
            <div className='Person' style={style}>
                <input type='text' onChange={ props.changeName } defaultValue={props.name} id={props.id} />
            </div>
            <div className='Person' style={style}>
                <p onClick={ props.deletePerson }>My name is {props.name} and I am {props.age}</p>
            </div>
        </Aux>
    )
};

export default memo(Person);