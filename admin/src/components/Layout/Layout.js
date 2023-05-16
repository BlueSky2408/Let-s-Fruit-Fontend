import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
        <Topbar />
        <div className="contain">
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout