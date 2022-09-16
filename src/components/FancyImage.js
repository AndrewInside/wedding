import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const FancyImage = props => {
    const { src, alt, link, dir = "se" } = props;
    let inner;

    if (link) {
        inner = (<Link href={link} title={alt}><img src={process.env.PUBLIC_URL + "/" + src} alt={alt} width="50%" /></Link>);
    } else {
        inner = (<img src={process.env.PUBLIC_URL + "/" + src} alt={alt} width="50%" />);
    }

    return (
        <div className={`fancy-box ${dir}`}>
            <div className={`fancy-border ${dir}`}>
                <div>

                </div>
            </div>
            <div className={`fancy-img ${dir}`}>
                {inner}
            </div>
        </div>
    );
}

FancyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    dir: PropTypes.string,
    link: PropTypes.string
};

export default FancyImage;