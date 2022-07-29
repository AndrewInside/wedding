import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = props => {
    const { href, children, onClick } = props;
    return (
        <a className='nav-link' href={href} onClick={() => onClick(false)}>{children}</a>
    )
};

MenuLink.propTypes = {
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default MenuLink;