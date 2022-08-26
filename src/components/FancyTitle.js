import React from 'react';
import Die from '../img/die.svg';

const FancyTitle = props => {
    const { children } = props;
    return (
        <div className="fancy">
            <img src={Die} alt="die-logo" />
            <h2>{children}</h2>
        </div>
    )
};

export default FancyTitle;