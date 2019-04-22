//import React
import React from 'react';
import ReactDOM from 'react-dom';
//import functional component
import Row from './Row' 
//import Axios
import Axios from 'axios';
import { compileFunction } from 'vm';

const url = "https://my-json-server.typicode.com/bnissen24/project2DB/posts";

class App extends React.Component {
  state = { 
    response: []
    };


  getData(){
    Axios.get(url).then(response => {
    this.setState({ response: response.data })
    .catch(error => {
    console.log(`error: ${error.message}`) });
    });
  }

  //update Data
  updatePost(id, isTitle, isType, isStatus){
    axios.put(url + '/' + id, {
    title: isTitle,
    type: isType,
    column: isStatus
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(err);
  });
}

  //delete Data
  deletePost(){
    Axios.delete()
  }

  //add Data
  addData(id,isTitle, isType, isStatus){
    Axios.post(url,{
      title: isTitle,
      type: isType,
      column: isStatus
    });
  }


  componentDidMount(){
    this.getData();
  }

  render(){
    const message = "Hello World!";
    console.log(this.state.response);
    const taskRows = this.state.response.map((task) => {
      return <Row taskItem = {task.title}/>;
    });
    return( 
    <div>
      <h1>{message}</h1>
      <table className = "table">
        <tbody>
          {taskRows}
        </tbody>      
      </table>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
export default App;