import React from 'react';

const FancyTitle = props => {
    const { children } = props;
    return (
        <div className="fancy">
            <span></span>
            <h2>{children}</h2>
            <span></span>
        </div>
    )
};

export default FancyTitle;