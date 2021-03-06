//import React
import React from 'react';
import ReactDOM from 'react-dom';
//import functional component
import Row from './Row' 
//import Axios
import Axios from 'axios';

const url = "https://my-json-server.typicode.com/bnissen24/project2DB/posts";

class App extends React.Component {
  state = { 
    response: []
  };


  getData(){
    Axios.get(url).then(response => {
      this.setState({ response: response.data })
      .catch(error => {console.log(`error: ${error.message}`) });
    });}

  //update Data
  updatePost(id, isTitle, isType, isStatus){
    Axios.put(url + '/' + id, {
    title: isTitle,
    type: isType,
    column: isStatus
    }).then(response => {
    console.log(response);
    }).catch(error => {
    console.log(error);
    });
  }

  //delete Data
  deletePost(id){
    Axios.delete(url + '/' + id)
    .then(res =>{
      console.log(res);
    }).catch(error =>{
      console.log(error);
    });
  }

  //add Data
  addData(isTitle, isType, isStatus){
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
    console.log(this.state.response);
    const taskRows = this.state.response.map((task, index) => {
      return <Row 
      key = {index}
      taskTitle = {task.title}
      taskType = {task.type}
      taskStatus = {task.column}
      />;
    });
    return( 
    <div className = "table">
      <div className = "container">
        <nav className="navbar bgLight">
          <ul class="navbarNav">
            <li class="navItem">
              <a class="navLink" href="#">Link 1</a>
            </li>
            <li class="navItem">
              <a class="navLink" href="#">Link 2</a>
            </li>
            <li class="navItem">
              <a class="navLink" href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </div>
      <table>
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