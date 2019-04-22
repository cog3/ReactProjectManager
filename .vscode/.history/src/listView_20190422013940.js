import React from "react";
import ReactDOM from 'react-dom';

class listView extends React.Component{
    state = {

    }

    render(){

        return(
            <h1>"This is List View!"</h1>
        );
    }
}
ReactDOM.render(
    <listView />,
    document.querySelector('#root')
  )
export default listView;