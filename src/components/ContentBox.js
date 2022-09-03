import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = (props) => {
    const { name, children } = props;
    return (
        <section className='app-content-box'>
            <a aria-hidden="true" href={`#${name}`} className='anchor' id={name}>{name}</a>
            <div>
                {children}
            </div>
        </section>
    )
};

ContentBox.propTypes = {
    name: PropTypes.string.isRequired
};

export default ContentBox;