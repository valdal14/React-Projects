import './Person.css';

export default function Person(props) {

  return (
    <div className="person">
      <h1 className="name">{props.name}</h1>
      <p className="age">Your age: {props.age}</p>
    </div>
  );
}
