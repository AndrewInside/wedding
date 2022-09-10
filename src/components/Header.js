import React from "react";
import header from "../img/header_centered_offset.jpg";
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
    </header>
  )
}
