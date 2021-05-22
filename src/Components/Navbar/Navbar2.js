import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import InfoIcon from '@material-ui/icons/Info'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import SurgeLogo from '../../assets/aulogo.png'
import './Navbar2.css'
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@material-ui/core'

function Navbar2() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <div className="navheader">
        <div className="navheader__icons">
          <Link to="/" className="navheader__icon">
            <HomeIcon />
            <p>Home</p>
          </Link>
          <Link to="/courses" className="navheader__icon">
            <LocalLibraryIcon />
            <p
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Incept
            </p>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/courses/#syllabus">
                <MenuItem onClick={handleClose}>Syllabus</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Tutorial</MenuItem>
              <MenuItem onClick={handleClose}>Projects</MenuItem>
              <MenuItem onClick={handleClose}>Gate Resourses</MenuItem>
            </Menu>
          </Link>
        </div>
        <img src={SurgeLogo} alt="Surge Logo"></img>
        <div className="navheader__icons">
          <Link to="/about" className="navheader__icon">
            <InfoIcon />
            <p>Bloom Up</p>
          </Link>
          <Link to="/auth" className="navheader__icon">
            <AssignmentIndIcon />
            <p>Alumni</p>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />

          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
