import React, { useState } from 'react';
import { Menu } from 'react-feather';
import MenuLink from './MenuLink';

export const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className='app-nav wide'>
                <button className='nav-mobile-button' onClick={() => setOpenMenu(!openMenu)}>
                    <Menu size='2.5rem' color='var(--secondary-dark)' />
                </button>
                <div className='nav-wrapper' style={{ height: openMenu ? "auto" : "0", display: openMenu ? "block" : "none" }}>
                    <ul>
                        <li><MenuLink href='#nav-where' onClick={setOpenMenu}>Program</MenuLink></li>
                        <li><MenuLink href='#nav-jukebox' onClick={setOpenMenu}>Zapoj se</MenuLink></li>
                        <li><MenuLink href='#nav-covid' onClick={setOpenMenu}>Covid</MenuLink></li>
                        <li><MenuLink href='#nav-room' onClick={setOpenMenu}>Ubytko</MenuLink></li>
                        <li><MenuLink href='#nav-sunday' onClick={setOpenMenu}>Neděle</MenuLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
