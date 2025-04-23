import React, { useState } from 'react'
import "./logininput.css"
import { PageBox } from '../../common/page-box/PageBox'
import { Inp } from '../../common/input-box/Inp'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

export const LoginInput = () => {
    // tit, subTit, inp_box1, inp_box2, ancorr, btnn

    const [pageChange, setPageChange] = useState("loginPage");
    const navigatee = useNavigate();
    // navigatee("/")

    // console.log(pageChange);

    return (
        <>
            <div className="logininput_con">
                <div className="logininput_in">
                    {(pageChange == "forgetPage") ? <PageBox
                        tit={"Forgot Your Password ?"}
                        subTit={"Enter your Email below to receive your OTP"}
                        inp_box1={<Inp inp_icon={<EmailIcon />} inp_type={"email"} inp_plac={"Email"} />}
                        btnn={"Send"}
                        setPageChange={setPageChange}
                    /> : (pageChange == "Forgot Your Password ?") ? <PageBox
                        tit={"Enter Your OTP"}
                        inp_box1={<Inp inp_type={"number"} name={"otp"} />}
                        inp_box2={<Inp inp_type={"number"} name={"otp"} />}
                        inp_box3={<Inp inp_type={"number"} name={"otp"} />}
                        inp_box4={<Inp inp_type={"number"} name={"otp"} />}
                        btnn={"Send"}
                        setPageChange={setPageChange}
                    /> : (pageChange == "Enter Your OTP") ? <PageBox
                        tit={"Reset Password"}
                        subTit={"Enter your new password below, we are just being extra safe"}
                        inp_box1={<Inp inp_icon={<LockIcon />} inp_type={"password"} inp_plac={"Enter Your Password"} />}
                        inp_box2={<Inp inp_icon={<LockIcon />} inp_type={"password"} inp_plac={"Comform Password"} />}
                        btnn={"Save"}
                        setPageChange={setPageChange}
                    /> : <PageBox
                        tit={"Login"}
                        inp_box1={<Inp inp_icon={<EmailIcon />} inp_type={"email"} inp_plac={"Email"} />}
                        inp_box2={<Inp inp_icon={<LockIcon />} inp_type={"password"} inp_plac={"Password"} />}
                        ancorr={"forget password?"}
                        btnn={"Login"}
                        setPageChange={setPageChange}
                    />}
                </div>

            </div>
        </>
    )
}
