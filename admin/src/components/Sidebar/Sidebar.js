import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarItems">
                <HomeIcon className="sidebarIcon" />
                Trang chủ
              </li>
            </Link>
            <Link to="/revenue" className="link"><li className="sidebarItems">
              <TrendingUpIcon className="sidebarIcon" />
              Thông số doanh thu
            </li></Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/*<li className="sidebarItems">
                <PersonIcon className="sidebarIcon" />
                User
                </li>*/}
            <Link to="/products" className="link">
              <li className="sidebarItems">
                <StorefrontIcon className="sidebarIcon" />
                Danh sách sản phẩm
              </li>
            </Link>
            <Link to="/addProduct" className="link">
            <li className="sidebarItems">
              <AddBusinessIcon className="sidebarIcon" />
              Thêm sản phẩm
            </li>
          </Link>
          <li className="sidebarItems">
            <SignalCellularAltIcon className="sidebarIcon" />
            Báo cáo
          </li>
          <li className="sidebarItems">
            <LogoutIcon className="sidebarIcon" />
            Thoát
          </li>
        </ul>
      </div>

    </div>
    </div >
  )
}


export default Sidebar