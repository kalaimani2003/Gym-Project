import React from 'react'
import "./pagebox.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/gym-logo.jpg"

export const PageBox = ({ tit, subTit, inp_box1, inp_box2, ancorr, btnn }) => {
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
                    <div className="pagebox_inp_box">
                        {inp_box1}
                        {inp_box2}
                    </div>
                    <Link>
                        {ancorr}
                    </Link>
                    <div className="pagebox_btn">
                        <button>{btnn}</button>
                    </div>

                </div>
            </div>
        </>
    )
}
