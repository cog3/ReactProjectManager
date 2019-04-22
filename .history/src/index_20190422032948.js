//import React
import React from 'react';
import ReactDOM from 'react-dom';
//import functional components
import Row from './Row'; 
import Tabs from './Tabs';
//import ListView from './listView';
//import AddItem from './addItem';
//import Axios
import Axios from 'axios';
//import CSS
import './index.css';

const url = "https://my-json-server.typicode.com/bnissen24/project2DB/posts";

class App extends React.Component {
  state = { 
    response: [],
    view: 'app'
  };


  getData(){
    Axios.get(url).then(response => {
      this.setState({ response: response.data })
      .catch(error => {console.log(`error: ${error.message}`) });
    });
  }

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

  viewChange(view){
    this.setState({ view });
  }


  formatDivs(jsxcode){
    let { view } = this.state;
    return(
      <div>
        <Tabs viewChange={this.viewChange.bind(this)}/>
        {jsxcode}
      </div>
    );
  }




  render(){
    
    const taskRows = this.state.response.map((task, index) => {
      return <Row 
      key = {index}
      taskTitle = {task.title}
      taskType = {task.type}
      taskStatus = {task.column}
      />;
    });

    const {view} = this.state;

    switch (view){
      case 'app':{
        return(this.formatDivs(<App />))
      }
      case 'listview':{
        return(this.formatDivs(<ListView />))
      }
      case 'additem':{
        return(this.formatDivs(<AddItem />))
      }
      default:
        return <h2>Invalid Tab My Guy</h2>
    }
    // if(this.state.response){

    // }
    // else{
    //   return(
    //     <table>
    //       <tbody>
    //         {taskRows}
    //       </tbody>      
    //     </table>

    //   )
      return( 
        
          <h1>This is the App Component mmg</h1>
      
        // <div>
        //     <ul className = "ul">
        //       <li className = "li"><a href="#">Task View</a></li>
        //       <li className = "li"><a href="#">List View</a></li>
        //       <li className = "li"><a href="#">Add View</a></li>
        //     </ul>
        // </div>
      );
    }
    
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
export default App;