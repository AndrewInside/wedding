import { React } from 'react'
import Arrow from '../img/die_arrow.svg';
import PropTypes from 'prop-types';

const DownButton = (props) => {
    const { link } = props;

    return (
        <a data-scroll className='down-link' href={link}>
            <img src={Arrow} alt="down" />
        </a>
    )
};

DownButton.propTypes = {
    link: PropTypes.string
};

export default DownButton;