import React from "react";

class Tabs extends React.Component{
    
    
    onTabClick(tabName) {
        this.props.viewChange(tabName);
    }

    render(){

        return(
            <ul>
                <li>
                <a onClick={(e) => this.onTabClick('app')}>Grid View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick('listview')}>List View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick('addtask')}>Add Task</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;