import React from 'react'
import { LogoName } from '../../common/logo and name/LogoName'
import "./loginpage.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <>
            <div className="loginpage_con">
                <div className="loginpage_logo">
                    <LogoName txtcolor={"white"} />
                </div>
                <h1 className='loginpage_h1'>
                    Get Ready
                </h1>
                <p className='loginpage_p1'>
                    Shape your body
                </p>
                <p className='loginpage_p2'>
                    “The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything.”
                </p>
                <div className="loginpage_button">
                    <Link to={"/LoginPage"}>
                        <button className='loginpage_btn'>Get Start</button>
                    </Link>
                </div>
                <div className="loginpage_medias">
                    <div className="loginpage_medias_box">
                        <FacebookIcon sx={{color:"red"}}/>
                    </div>
                    <div className="loginpage_medias_box">
                        <GoogleIcon sx={{color:"red"}} />
                    </div>
                    <div className="loginpage_medias_box">
                        <InstagramIcon sx={{color:"red"}} />
                    </div>
                    <div className="loginpage_medias_box">
                        <WhatsAppIcon sx={{color:"red"}} />
                    </div>
                </div>
            </div>
        </>
    )
}
