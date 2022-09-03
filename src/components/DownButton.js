import { React } from 'react'
import Arrow from '../img/die_arrow.svg';

const DownButton = (props) => {
    const { link } = props;

    return (
        <a data-scroll className='down-link' href={link}>
            <img src={Arrow} alt="down" />
        </a>
    )
}

export default DownButton;