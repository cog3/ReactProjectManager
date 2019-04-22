import React from "react";
import ReactDOM from 'react-dom';

class AddItem extends React.Component{
    state = {

    }

    render(){

        return(
            <h1>"This is List View!"</h1>
        );
    }
}
ReactDOM.render(
    <AddItem />,
    //document.querySelector('#root')
  )
export default addItem;