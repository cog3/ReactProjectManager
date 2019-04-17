//import React
import React from 'react';
import ReactDOM from 'react-dom';
//import Axios
import Axios from 'axios';
const url = "https://my-json-server.typicode.com/bnissen24/project2DB/posts";





/*
The App component will be the top-level component of your application and should be responsible for making requests to the 
API and updating the data after the fact.
*/
//The App Container
//Declare the state and set the properties
class App extends React.Component {
    state = {
      tasks: [], 
    }




//Check if the Axios connected to the end-point
// Back-end/side logic always goes here   
  componentDidMount(){
      Axios.get(url)
      .then(response => {
        this.setState({tasks: response.posts});
      }).catch(error => {
        console.log(`error: ${error.message}`)
      });
    }
  }




/*Control which of the other components is currently being viewed through conditional rendering and
 be the single source of truth for any data retrieved from the API. 
*/
/*
additions, updates, or deletions
*/




const message = "Hello World!"
ReactDOM.render(
  <h1> {message}</h1>,document.querySelector('#root')
);
export default App;