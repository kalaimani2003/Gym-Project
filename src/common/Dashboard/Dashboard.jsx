import React from 'react'
import "./dashboard.css"
import { LogoName } from '../logo and name/LogoName'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';

export const Dashboard = () => {
  const location = useLocation();
  console.log(location.pathname.split("/").pop());

  return (
    <>
      <div className="Dashboard_head">
        <LogoName />
      </div>
      <div className="Dashboard_navbar">
        <div className="Dashboard_nav_box Dashboard_nav_buttons">
          <button className={(location.pathname.split("/").pop() == "Dashboard") ? "Dashboard_nav_btn_on" : "Dashboard_nav_btn"}> <SpaceDashboardIcon sx={{ marginRight: "10px" }} />  Dashboard</button>
          <button className='Dashboard_nav_btn'> <GroupsIcon sx={{ marginRight: "10px" }} /> View Registered</button>
          <button className='Dashboard_nav_btn'> <AddBusinessIcon sx={{ marginRight: "10px" }} /> Payment History</button>
        </div>
        <div className="Dashboard_nav_box">
          <button className='Dashboard_nav_btn'> <LogoutIcon sx={{ marginRight: "10px" }} />  Logout</button>
        </div>
      </div>
    </>
  )
}
