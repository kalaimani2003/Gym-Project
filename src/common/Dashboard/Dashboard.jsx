import React from 'react'
import "./dashboard.css"
import { LogoName } from '../logo and name/LogoName'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';

export const Dashboard = ({ useDashTotal }) => {
  const location = useLocation();
  // console.log(location.pathname.split("/").pop());

  return (
    <>
      <div className="Dashboard_head">
        <LogoName />
      </div>
      <div className="Dashboard_navbar">
        <div className="Dashboard_nav_box Dashboard_nav_buttons">
          <Link to={"/Dashboard"}>
            <button onClick={() => useDashTotal("dashBoard")} className={(location.pathname.split("/").pop() == "Dashboard") ? "Dashboard_nav_btn_on" : "Dashboard_nav_btn"}> <SpaceDashboardIcon sx={{ marginRight: "10px" }} />  Dashboard</button>
          </Link>
          <Link to={"/ViewRegister"}>
            <button onClick={() => useDashTotal("")} className={(location.pathname.split("/").pop() == "ViewRegister") ? "Dashboard_nav_btn_on" : "Dashboard_nav_btn"}> <GroupsIcon sx={{ marginRight: "10px" }} /> View Registered</button>
          </Link>
          <Link to={"/PaymentHistory"}>
            <button className={(location.pathname.split("/").pop() == "PaymentHistory") ? "Dashboard_nav_btn_on" : "Dashboard_nav_btn"}> <AddBusinessIcon sx={{ marginRight: "10px" }} /> Payment History</button>
          </Link>
        </div>
        <div className="Dashboard_nav_box">
          <Link to={"/Logout"}>
            <button className={(location.pathname.split("/").pop() == "Logout") ? "Dashboard_nav_btn_on" : "Dashboard_nav_btn"}> <LogoutIcon sx={{ marginRight: "10px" }} />  Logout</button>
          </Link>
        </div>
      </div>
    </>
  )
}
