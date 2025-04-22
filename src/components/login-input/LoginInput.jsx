import React, { useState } from 'react'
import "./logininput.css"
import { PageBox } from '../../common/page-box/PageBox'
import { Inp } from '../../common/input-box/Inp'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const LoginInput = () => {
    // tit, subTit, inp_box1, inp_box2, ancorr, btnn

    const [pageChange, setPageChange] = useState("loginPage")
    return (
        <>
            <div className="logininput_con">
                {(pageChange == "loginPage") ? <PageBox
                    tit={"Login"}
                    inp_box1={<Inp inp_icon={<EmailIcon />} inp_type={"email"} inp_plac={"Email"} />}
                    inp_box2={<Inp inp_icon={<LockIcon />} inp_type={"password"} inp_plac={"Password"} />}
                    ancorr={"forget password?"}
                    btnn={"Login"}
                    setPageChange={setPageChange}
                /> : (pageChange == "forgetPage") ? <PageBox
                    tit={"Forgot Your Password ?"}
                    subTit={"Enter your Email below to receive your OTP"}
                    inp_box1={<Inp inp_icon={<EmailIcon />} inp_type={"email"} inp_plac={"Email"} />}
                    btnn={"Send"}
                />:""}

            </div>
        </>
    )
}
