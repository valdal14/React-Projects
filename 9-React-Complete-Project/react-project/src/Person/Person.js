import React, { useEffect, memo } from 'react';
import './Person.css';
import Aux from '../HOC/Aux';
import PropsType from 'prop-types';

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            '@media (minWidth: 500px)' : {
                width: '450px'
            }
        }
        // using createRef to bind the inputElement to the ref
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        this.inputElement.current.focus();
    }

    render(){
        return(
            <Aux>
            <div className='Person' style={this.style}>
                <input type='text' 
                onChange={ this.props.changeName } 
                defaultValue={this.props.name} 
                id={this.props.id}
                ref={this.inputElement}
                />
                
            </div>
            <div className='Person' style={this.style}>
                <p onClick={ this.props.deletePerson }>My name is {this.props.name} and I am {this.props.age}</p>
            </div>
        </Aux>
        )
    }
}


// const Person = (props) => {
    
//     useEffect(()=> {
//         const timer = setTimeout(()=>{
//             alert('useEffect executing - Data has been saved!!!');
//         }, 1000)

//         return ()=> {
//             // clean up with useEffect
//             clearTimeout(timer);
//             console.log('cleaning up the Person component')
//         };

//     }, []);

//     const style = {
//         '@media (minWidth: 500px)' : {
//             width: '450px'
//         }
//     };
    
//     return (
//         // Note that now the key attribute is not required
//         <Aux>
//             <div className='Person' style={style}>
//                 <input type='text' onChange={ props.changeName } defaultValue={props.name} id={props.id} />
//             </div>
//             <div className='Person' style={style}>
//                 <p onClick={ props.deletePerson }>My name is {props.name} and I am {props.age}</p>
//             </div>
//         </Aux>
//     )
// };

Person.propTypes = {
    changeName: PropsType.func,
    name: PropsType.string,
    id: PropsType.number,
    age: PropsType.number,
    deletePerson: PropsType.func
};

export default memo(Person);