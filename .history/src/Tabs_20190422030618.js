import React from "react";

class Tabs extends React.Component{
    
    
    onTabClick(tabName) {
        this.props.onViewChange(tabName);
    }

    render(){

        return(
            <ul>
                <li>
                <a onClick={(e) => this.onTabClick(e, 'page1')}>Grid View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick(e, 'listview')}>List View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick(e, 'addtask')}>Add Task</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;