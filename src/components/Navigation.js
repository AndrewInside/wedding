import React, { useState } from 'react';
import { MessageSquare, Menu } from 'react-feather';

export const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className='app-nav'>
                <button className='nav-mobile-button' onClick={() => setOpenMenu(!openMenu)}>
                    <Menu size='2em' color='black' />
                </button>
                <div className='nav-wrapper' style={{height: openMenu ? "200px" : "0", display: openMenu ? "block" : "none" }}>
                    <ul>
                        <li>Some</li>
                        <li>Nav</li>
                        <li>Could</li>
                        <li>Be</li>
                        <li>Here</li>
                    </ul>
                </div>
            </nav>
            <a className='app-comment-float' href="#app-comment-section">
                <MessageSquare size='2em' />
            </a>
        </>
    )
}
