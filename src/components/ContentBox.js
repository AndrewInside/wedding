import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = (props) => {
    const { name, children } = props;
    return (
        <div id={name}>
            {children}
        </div>
    )
};

ContentBox.propTypes = {
    name: PropTypes.string.isRequired
};

export default ContentBox;