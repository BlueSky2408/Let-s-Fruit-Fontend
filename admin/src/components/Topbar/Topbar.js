import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
              <div className="topbarLogo">
                <a href="/">Let's Fruit</a>
                <p>Fruit & Flower Boutique</p>
              </div>
            </div>
            <div className="topRight">
              <div className="topbarIconsContainer">
                <NotificationsNoneIcon />
                <span className="topbarIconBadge">2</span>
              </div>
              <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar