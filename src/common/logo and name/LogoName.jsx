import React from 'react'
import GymLogo from "../../assets/gym-logo.jpg"
import "./logoname.css"

export const LogoName = ({txtcolor}) => {
  return (
    <>
    <div className="log_name_con">
        <img src={GymLogo} alt="" className='Gymlogo_img'/>
        <div className="log_name_txt" style={{color:txtcolor}}>
            Beast Force
        </div>
    </div>
    </>
  )
}
