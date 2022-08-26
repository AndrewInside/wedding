import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import header from '../img/header_centered.jpg';
import DownButton from './DownButton';

export const Header = () => {
  return (
    <ParallaxProvider>
      <header className="app-header">
        <ParallaxBanner style={{ height: "100vh" }}
          layers={[
            { image: header, speed: -50, expanded: false, opacity: [1.6, 0.4]},
            {
              children: (
                <div className="app-header-wrapper">
                  <h2>Bereme se.</h2>
                  <h2>Buď u&nbsp;toho.</h2>
                  <DownButton link="#nav-where" />
                </div>
              ),
              speed: 10,
              expanded: false
            },
          ]} />
      </header>
    </ParallaxProvider>
  )
}
