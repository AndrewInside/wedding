import React from 'react';
import Die from '../img/die.svg';

const FancyTitle = props => {
    const { children } = props;
    return (
        <div className="fancy">
            <h2>{children}</h2>
            <img src={Die} alt="die-logo" />
        </div>
    )
};

export default FancyTitle;