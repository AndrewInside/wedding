import React from 'react';
import PropTypes from 'prop-types';

const FancyImage = props => {
    const { src, alt, dir = "se", title = "" } = props;
    return (
        <div className={`fancy-box ${dir}`}>
            <div className={`fancy-border ${dir}`}>
                <div>
                    <span className={`fancy-border-title ${dir} caption-font`}>{title}</span>
                </div>
            </div>
            <div className={`fancy-img ${dir}`}>
                <img src={process.env.PUBLIC_URL + "/" + src} alt={alt} width="50%" />
            </div>
        </div>
    );
}

FancyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    dir: PropTypes.string,
    title: PropTypes.string
};

export default FancyImage;