import React from 'react'
import "./Sidebar.css"
import { Link } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/admin" className="link">
              <li className="sidebarItems">
                <HomeIcon className="sidebarIcon" />
                Trang chủ
              </li>
              </Link>
              <li className="sidebarItems">
                <TrendingUpIcon className="sidebarIcon"/>
                Thông số doanh thu
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarItems">
                <PersonIcon className="sidebarIcon" />
                User
              </li>
              <Link to="/products" className="link">
              <li className="sidebarItems">
                <StorefrontIcon className="sidebarIcon"/>
                Danh sách sản phẩm
              </li>
              </Link>
              <li className="sidebarItems">
                <CreditCardIcon className="sidebarIcon"/>
                Thanh toán
              </li>
              <li className="sidebarItems">
                <SignalCellularAltIcon className="sidebarIcon"/>
                Báo cáo
              </li>
            </ul>
          </div>
          
        </div>
    </div>
  )
}

export default Sidebar