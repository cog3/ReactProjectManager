import React from "react";
import ReactDOM from './react-dom';

class addItem extends React.Component{
    state = {

    }

    render(){

        return(
            <h1>"This is List View!"</h1>
        );
    }
}
ReactDOM.render(
    <addItem />,
    document.querySelector('#root')
  )
export default addItem;