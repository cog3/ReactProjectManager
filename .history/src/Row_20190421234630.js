import React from "react";

const Row = (props) => {
    const { taskTitle, taskType, taskStatus } = props;
    //console.log(this.props);
    return(
        <tr>
            <td>
                <p>{taskTitle}</p>
                <p>{taskType}</p>
                <p>{taskStatus}</p>
            </td>>
        </tr>
    );
}
export default Row;