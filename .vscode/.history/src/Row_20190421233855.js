import React from "react";

const Row = (props) => {
    const { taskTitle, taskType, taskStatus } = props;
    
    return(
        <tr>
            <td>
                <br>{taskTitle}</br>
                <br>{taskType}</br>
                <br>{taskStatus}</br>
            </td>>
        </tr>
    );
    //console.log(this.props);
}
export default Row;