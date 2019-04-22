import React from "react";

const Row = (props) => {
    const { taskTitle, taskType, taskStatus } = props;
    console.log(this.props);
    return(
        <tr>
            <td>
                <br>{taskTitle}</br>
                <br>{taskType}</br>
                <br>{taskStatus}</br>
            </td>>
        </tr>
    );
}
export default Row;