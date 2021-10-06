import React from "react";
import "./sidebar.scss";

function Sidebar({ openMenu, setOpenMenu }) {
  //   setOpenMenu(true);
  return (
    <div className={openMenu ? "sidebar active" : "sidebar"}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/incept">Incept</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/bloom">Bloom</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/about">About US</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/alumni">Our Alumni</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
