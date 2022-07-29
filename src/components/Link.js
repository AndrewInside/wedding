import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
    const { href, title, children } = props;
    return (
        <a href={href} title={title} target="_blank" rel="noreferrer">{children}</a>
    )
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Link;