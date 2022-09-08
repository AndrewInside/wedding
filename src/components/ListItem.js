import React from "react";

const ListItem = (props) => {
    const { children } = props;

    return (
        <div className="list-item-wrapper">
            <div className="list-item-image"></div>
            <div>{children}</div>
        </div>
    )
};

export default ListItem;