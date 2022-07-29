import React, { useState } from 'react';
import { MessageSquare, Menu } from 'react-feather';
import MenuLink from './MenuLink';

export const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className='app-nav'>
                <button className='nav-mobile-button' onClick={() => setOpenMenu(!openMenu)}>
                    <Menu size='2.5rem' color='black' />
                </button>
                <div className='nav-wrapper' style={{ height: openMenu ? "auto" : "0", display: openMenu ? "block" : "none" }}>
                    <ul>
                        <li><MenuLink href='#nav-where' onClick={setOpenMenu}>Kde</MenuLink></li>
                        <li><MenuLink href='#nav-kids' onClick={setOpenMenu}>Děti</MenuLink></li>
                        <li><MenuLink href='#nav-traditions' onClick={setOpenMenu}>Zvyky</MenuLink></li>
                        <li><MenuLink href='#nav-dress-code' onClick={setOpenMenu}>Dress Code</MenuLink></li>
                        <li><MenuLink href='#nav-transport' onClick={setOpenMenu}>Doprava a ubytko</MenuLink></li>
                        <li><MenuLink href='#nav-jukebox' onClick={setOpenMenu}>Zapoj se do Jukeboxu!</MenuLink></li>
                        <li><MenuLink href='#nav-gifts' onClick={setOpenMenu}>Dary</MenuLink></li>
                        <li><MenuLink href='#nav-comments' onClick={setOpenMenu}>Vzkazy</MenuLink></li>
                    </ul>
                </div>
            </nav>
            <a className='app-comment-float' href="#app-comment-section">
                <MessageSquare size='2.5rem' />
            </a>
        </>
    )
}
