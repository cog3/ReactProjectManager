import React from "react";

const Row = (props) => {
    const { taskTitle } = props;
    const text = "blahh";
    console.log(this.props);
    return(
        <tr><td>{taskTitle}</td>></tr>
    );
}
export default Row;