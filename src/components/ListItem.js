import React from "react";
import Hex from "../img/hex.svg";

const ListItem = (props) => {
    const { children } = props;

    return (
        <div className="list-item-wrapper">
            <div className="list-item-image"></div>
            <div>{children}</div>
        </div>
    )
};

// list-style-image: url(../img/hex.svg);

export default ListItem;