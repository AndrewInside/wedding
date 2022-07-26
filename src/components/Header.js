import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import header from '../img/header_centered.jpg';

export const Header = () => {
  return (
    <ParallaxProvider>
      <header className="app-header">
        <ParallaxBanner style={{ height: "100vh" }}
          layers={[
            { image: header, speed: -50, expanded: false, opacity: [1.6, 0.4] },
            {
              children: (
                <div className="app-header-wrapper" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h1>Jana &amp; Ondra</h1>
                  <h2>Bereme se. Buď u toho.</h2>
                </div>
              ),
              speed: -30,
              expanded: false
            }]} />
      </header>
    </ParallaxProvider>
  )
}
