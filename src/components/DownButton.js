import { React } from 'react'

const DownButton = (props) => {
    const { link } = props;

    return (
        <a data-scroll className='down-link' href={link}><span></span></a>
    )
}

export default DownButton;