import { Link, Outlet } from "react-router-dom";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LogoutIcon from "@mui/icons-material/Logout";

import "./Topbar.css";
import "./Sidebar.css";

function Layout() {
  return (
    <div>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <div className="topbarLogo">
              <Link to="/">Let's Fruit</Link>
              <p>Fruit & Flower Boutique</p>
            </div>
          </div>
          <div className="topRight">
            <div className="topbarIconsContainer">
              <NotificationsNoneIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <img
              src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
      <div className="contain">
        {/* Side Bar */}
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
                <Link to="/revenue" className="link">
                  <li className="sidebarItems">
                    <TrendingUpIcon className="sidebarIcon" />
                    Thông số doanh thu
                  </li>
                </Link>
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
                <li className="sidebarItems">
                  <CreditCardIcon className="sidebarIcon" />
                  Thanh toán
                </li>
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
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
