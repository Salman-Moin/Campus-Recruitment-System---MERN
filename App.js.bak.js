import React, { Component} from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordon Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,

  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abromov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// const name = {
//   firstName: 'Robin',
//   lastName: 'Wieruch'
// };

// ES5 without destructuring
//var firstName = name.firstName;
//var lastName = name.lastName;

//console.log(firstName + ' ' + lastName);

// ES6 with destructing
// const {firstName, lastName} = name;
// console.log(firstName + ' with destructuring ' + lastName);

const user = ['Albert', 'John', 'Mike'];
const [userOne, userTwo, userThree] = user;
console.log(userOne, userTwo, userThree);

class App extends Component {
  render() {
    return(
      <div className="App">
        {
          list.map(item => {
            return <div key={item.objectID}>
                       <span> <a href={item.url}> {item.title} </a> </span>
                       <span> {item.author} </span>
                       <span> {item.num_comments}</span>
                        <span>{item.points}</span>
                      
            </div>;
          })}
 
      </div>  
    );
  }
}

export default App;
