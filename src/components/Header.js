import React from "react";
import header from "../img/header_centered.jpg";
import DownButton from "./DownButton";

export const Header = () => {
  return (
    <header className="app-header wide" style={{ backgroundImage: `url(${header})` }}>
      <div className="app-header-text">
        <div className="">
          <h2>Bereme se.</h2>
          <h2>Buď u&nbsp;toho.</h2>
          <DownButton link="#nav-where" />
        </div>
      </div>
      {/* <ParallaxBanner style={{ height: "100vh" }}
          layers={[
            { image: header, height: "50%", speed: -50, expanded: false, opacity: [1.6, 0.4]},
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
          ]} /> */}
    </header>
  )
}
