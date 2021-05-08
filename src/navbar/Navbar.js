import { Button } from '@material-ui/core'
import { Event, InfoOutlined, Phone } from '@material-ui/icons'
import HomeOutlined from '@material-ui/icons/HomeOutlined'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Navbar_body">
        <li>
          <img
            src="https://github.com/JK-Open-Source-Community/JKOSC/raw/main/intro_logo.gif"
            alt=""
          />
        </li>
        <li>
          <div className="Navbar_content">
            <a href="/">
              <HomeOutlined />
              Home
            </a>
          </div>
        </li>
        <li>
          <div className="Navbar_content">
            <a href="/">
              <InfoOutlined />
              About
            </a>
          </div>
        </li>
        <li>
          <div className="Navbar_content">
            <a href="/">
              <Event />
              Event
            </a>
          </div>
        </li>
        <li>
          <div className="Navbar_content">
            <a href="/">
              <Phone />
              Contact
            </a>
          </div>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />

        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    </div>
  )
}

export default Navbar
