import React, { useEffect, memo } from 'react';
import './Person.css';

// React must be imported since the following will be converted in React.createElement and JSX
// We do not need to import Component tho since we are not using a class

// We must use props parameter inside our functional component to be able to create props.name and props.age
// class Person extends Component {

//     constructor(props) {
//         super(props);
//         this.style = {
//             '@media (minWidth: 500px)' : {
//                 width: '450px'
//             }
//         }
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log('Person-Component: getSnapshotBeforeUpdate - Props: ' + this.props + ' State: ' + null);
//         return {message: 'Snapshot of the props'};
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log('Person-Component: componentDidUpdate - Props: ' + prevProps + ' State: ' + prevState + ' Snapshot: ' + snapshot);
//     }

//     render() {
//         return (
//             <div className='Person' style={this.style}>
//                 { console.log('[Person] rendering...') }
//                 <input type='text' onChange={ this.props.changeName } defaultValue={this.props.name} id={this.props.id} />
//                 <p onClick={ this.props.deletePerson }>My name is {this.props.name} and I am {this.props.age}</p>
//                 <p>{this.props.children}</p>
//             </div>
//         )
//     }
    
// }
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
        <div className='Person' style={style}>
            { console.log('[Person] rendering...') }
            <input type='text' onChange={ props.changeName } defaultValue={props.name} id={props.id} />
            <p onClick={ props.deletePerson }>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default memo(Person);