import React from 'react';

const FancyTitle = props => {
    const { children } = props;
    return (
        <div className="fancy">
            <h2>{children}</h2>
        </div>
    )
};

export default FancyTitle;