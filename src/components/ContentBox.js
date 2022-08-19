import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = (props) => {
    const { name, children } = props;
    return (
        <>
            <a aria-hidden="true" href={`#${name}`} className='anchor' id={name}>{name}</a>
            <div>
                {children}
            </div>
        </>
    )
};

ContentBox.propTypes = {
    name: PropTypes.string.isRequired
};

export default ContentBox;