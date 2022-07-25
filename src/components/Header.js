import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import header from '../img/header.jpg';

export const Header = () => {
  return (
    <ParallaxProvider>
        <header className="app-header">
          <ParallaxBanner style={{ height: "100vh" }}
            layers={[
              { image: header, speed: -50, expanded: false, opacity: [1.6, 0.4] },
              {
                children: (<h1 style={{lineHeight:"100vh"}}>Header test text</h1>),
                speed: -30,
                expanded: false
            }]} />
        </header>
      </ParallaxProvider>
  )
}
