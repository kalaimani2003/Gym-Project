import React from 'react'
import "./pagebox.css"
import { Link, Links } from 'react-router-dom'
import logo from "../../assets/gym-logo.jpg"

export const PageBox = ({ tit, subTit, inp_box1, inp_box2, inp_box3, inp_box4, ancorr, btnn, setPageChange }) => {
    console.log(tit);

    // const Click = (t) => {
    //     setPageChange("false");
    //     setOtp(t);
    //     console.log(t);

    // }
    function SubmitForm(e) {
        e.preventDefault()
    }

    // if (name == "otp") {

    // }

    // console.log(subTit);


    return (
        <>
            <div className="pagebox_con">
                <div className="pagebox_in">
                    <div className="pagebox_log_txt">
                        <img src={logo} alt="" className='pagebox_logo' />
                        <div className="pagebox_txt">
                            Beast Forces <br />Gym
                        </div>
                    </div>
                    <div className="pagebox_tit">
                        {tit}
                    </div>
                    <div className="pagebox_sub_tit">
                        {subTit}
                    </div>
                    <form action="" onSubmit={SubmitForm}>
                        <div className={(tit == "Enter Your OTP") ? "pagebox_inp_otp" : "pagebox_inp_box"} >
                            {inp_box1}
                            {inp_box2}
                            {inp_box3}
                            {inp_box4}
                        </div>
                        <div onClick={() => setPageChange("forgetPage")}>
                            {ancorr}
                        </div>
                        <div className="pagebox_btn">

                            {(tit == "Login") ? <Link to={"/Dashboard"}>
                                <button>{btnn}</button>
                            </Link> : <button onClick={() => setPageChange(tit)}>{btnn}</button>} 
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
